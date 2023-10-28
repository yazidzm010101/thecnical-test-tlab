export interface GameProps {
  id: number;
  title: string;
  thumbnail: string;
  game_url: string;
  short_description: string;
  platform: string;
  release_date: string;
  genre: string;
  className?: string;
}

function Game(props: GameProps) {
  return (
    <a
      className={`flex flex-col  w-full rounded-md shadow-sm bg-white cursor-pointer hover:-translate-y-1 transition-all ${props.className}`}
      href={props.game_url}
      target="_blank"
    >
      <div className="p-2 relative">
        <div className="rounded-full absolute bottom-5 left-5 bg-blue-200 text-blue-900 font-medium px-3 py-1">
          {props.genre}
        </div>
        <img
          className="aspect-[16/9] w-full rounded-md"
          src={props.thumbnail}
        />
      </div>
      <div className="p-2 px-4 flex flex-col flex-grow">
        <h5 className="text-xl mb-2">{props.title}</h5>
        <p className="text-sm mb-auto text-gray-600">{props.short_description}</p>
        <hr className="my-4 border-gray-200" />
        <div className="flex flex-wrap">
          <div className="sm:w-[50%] flex-shrink-0 mr-10 sm:mr-0 pb-3">
            <p className="text-xs text-gray-400">Platform</p>
            <p className="">{props.platform}</p>
          </div>
          <div className="sm:w-[50%] flex-shrink-0 mr-10 sm:mr-0 pb-3">
            <p className="text-xs text-gray-400">Release Date</p>
            <p className="">{props.release_date}</p>
          </div>
        </div>
      </div>
    </a>
  );
}


export default Game;
