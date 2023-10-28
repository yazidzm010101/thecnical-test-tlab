import GameList from "./components/GameList";
import Navbar from "./components/Navbar";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
import viteLogo from "/vite.svg";

const availableCategories = [
  "MMORPG",
  "Shooter",
  "MOBA",
  "Anime",
  "Battle-Royale",
  "Strategy",
  "Fantasy",
  "Sci-Fi",
  "Card-Games",
  "Racing",
  "Fighting",
  "Social",
  "Sports",
];

function App() {
  const [category, setCategory] = useState("");

  return (
    <div className="bg-gray-200">
      <Navbar />
      <div className="pt-10 pb-[12rem] bg-blue-500 text-white py-8 px-4">
        <div className="pb-10 flex flex-wrap container max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold w-full lg:w-[50%]">
            Pilih Game Favorite Kalian
          </h1>
          <h1 className="w-full lg:w-[50%]">
            Eiusmod labore dolor consequat occaecat exercitation aliquip sunt
            adipisicing aute deserunt pariatur id. Eu duis aliqua nisi aliquip.
            Cupidatat ad pariatur velit excepteur.
          </h1>
        </div>
        <div className="flex flex-wrap container max-w-6xl mx-auto my-4">
          <h2 className="text-xl w-full lg:w-[50%]">
            Daftar Game
          </h2>
          <div className="w-full lg:w-[50%] flex justify-end">
            <select className="rounded-sm px-3 py-2 text-gray-500" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value={""}>Semua Genre</option>
              {
                availableCategories.map((category, i) => (
                  <option key={i} value={category}>{category}</option>
                ))
              }
            </select>
          </div>
        </div>
      </div>
      <div className="w-full container max-w-6xl mx-auto mt-[-10rem]">
        <GameList category={category}/>
      </div>
    </div>
  );
}

export default App;
