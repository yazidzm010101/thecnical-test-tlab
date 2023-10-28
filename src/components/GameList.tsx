import Game, { GameProps } from "./Game";
import React, { useEffect, useState } from "react";

import { getGames } from "../libs/getGames";

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

  useEffect(() => {
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
        } else {
          setState({ ...defaultState, isError: true, isLoading: false });
        }
      })
      .catch((err) =>
        setState({ ...defaultState, isError: true, isLoading: false })
      );
  }, [props.category]);

  if (isLoading) {
    const skeletons = Array.apply("", Array(10));
    return (
      <div className="flex w-full flex-wrap">
        {skeletons?.map((skeleton, i) => (
          <div key={i} className="w-full md:w-[50%] lg:w-[33.3%] p-2">
            <div className="full rounded-md shadow-sm bg-white cursor-pointer p-2">
              <div className="w-full bg-gray-200 rounded-md h-5 mb-2"/>
              <div className="w-full bg-gray-200 rounded-md h-[15rem] mb-2"/>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="flex w-full flex-wrap">
      {data?.map((game) => (
        <div key={game.id} className="w-full md:w-[50%] lg:w-[33.3%] p-2">
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
