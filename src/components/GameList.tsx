import "./GameList.css";

import Game, { GameProps } from "./Game";
import { useEffect, useState } from "react";

import { getGames } from "../libs/getGames";
import { useSearchParams } from "react-router-dom";

interface State {
  data: Array<GameProps>;
  isLoading: boolean;
  isError: boolean;
}
const defaultState: State = {
  data: [],
  isLoading: true,
  isError: false,
};

interface GameListProps {
  category?: string;
}

function GameList(props: GameListProps) {
  const [{ data, isLoading, isError }, setState] = useState(defaultState);
  const [searchParams] = useSearchParams()
  const isAltDesign = !!searchParams.get('alt-design')

  const fetchData = () => {
    setState(defaultState);
    getGames(props.category)
      .then((res) => {
        if (Array.isArray(res.data)) {
          setState({
            ...defaultState,
            data: res.data,
            isLoading: false,
            isError: false,
          });
        } else if (res.data?.status == 0) {
          setState({
            ...defaultState,
            data: [],
            isError: false,
            isLoading: false,
          });
        } else {
          setState({ ...defaultState, isError: true, isLoading: false });
        }
      })
      .catch((err) => {
        if (err?.response?.data?.status == 0) {
          setState({ ...defaultState, data: [], isError: false, isLoading: false });  
        } else {
          setState({ ...defaultState, isError: true, isLoading: false });
        }
      });
  };

  useEffect(() => fetchData(), [props.category]);

  if (isLoading) {
    const skeletons = Array.apply("", Array(10));
    return (
      <div className="flex w-full flex-wrap game-list">
        {skeletons?.map((_skeleton, i) => (
          <div key={i} className="w-full md:w-[50%] lg:w-[33.3%] p-5">
            <div className="full rounded-md shadow-sm bg-white cursor-pointer p-2">
              <div className="w-full bg-gray-200 rounded-md aspect-[16/9] mb-2" />
              <div className="w-full bg-gray-200 rounded-md h-8 mb-2" />
              <div className="w-full bg-gray-200 rounded-md h-5 mb-2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full flex flex-col items-center justify-center">
        <h3 className={isAltDesign ? "text-gray-600" : "text-white"}>
          Maaf, terjadi kesalahan ketika memuat data silahkan coba kembali
        </h3>
        <button
          className="bg-blue-600 text-white rounded-sm px-4 py-2 mt-4"
          onClick={fetchData}
        >
          Muat ulang
        </button>
      </div>
    );
  }

  if (data.length == 0) {
    return (
      <div className="w-full flex flex-col items-center justify-center">
        <h3 className={isAltDesign ? "text-gray-600" : "text-white"}>
          Tidak ada data dengan genre "{props.category}"
        </h3>
        <button
          className="bg-blue-600 text-white rounded-sm px-4 py-2 mt-4"
          onClick={fetchData}
        >
          Muat ulang
        </button>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-wrap game-list">
      {data?.map((game: GameProps) => (
        <div key={game.id} className="w-full md:w-[50%] lg:w-[33.3%] p-5">
          <Game
            id={game.id}
            title={game.title}
            thumbnail={game.thumbnail}
            short_description={game.short_description}
            platform={game.platform}
            release_date={game.release_date}
            game_url={game.game_url}
            genre={game.genre}
            className="h-full"
          />
        </div>
      ))}
    </div>
  );
}

export default GameList;
