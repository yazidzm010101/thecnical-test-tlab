import GameList from "./components/GameList";
import Navbar from "./components/Navbar";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

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
  const [searchParams] = useSearchParams()
  console.log(searchParams.get('alt-design'))

  // FIRST DESIGN ON FIGMA: BY ADDING ?alt-design=true in query parameters
  if (!!searchParams.get('alt-design')) {
    return (
      <div className="bg-gray-200">
      <Navbar />
      <div className="py-20 bg-gradient-to-r from-blue-900 to-teal-900 text-white px-4 relative">
        <img src="/thecnical-test-tlab//banner.png" className="absolute top-0 left-0 w-full h-full opacity-10"/>
        <div className="relative pb-10 flex flex-col items-center justify-center container max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-center my-2">
            Pilih Game Favorite Kalian
          </h1>
          <h1 className="w-full text-center my-2 max-w-xl">
            Eiusmod labore dolor consequat occaecat exercitation aliquip sunt
            adipisicing aute deserunt pariatur id. Eu duis aliqua nisi aliquip.
            Cupidatat ad pariatur velit excepteur.
          </h1>
          <button className="bg-blue-600 px-4 py-3 rounded-md my-2 text-white font-bold">
            Sign Up For Free Account
          </button>
        </div>
       
      </div>
      <div className="flex flex-wrap container max-w-6xl px-4 mx-auto my-8">
          <h2 className="text-xl w-full lg:w-[50%]">
            Game Terbaru
          </h2>
          <div className="w-full lg:w-[50%] flex justify-end">
            <select className="w-[12rem] max-w-full rounded-sm px-3 py-2 text-gray-500 border-r-8 outline outline-[1px] outline-gray-300 border-transparent" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value={""}>Semua Genre</option>
              {
                availableCategories.map((category, i) => (
                  <option key={i} value={category}>{category}</option>
                ))
              }
            </select>
          </div>
        </div>
      <div className="w-full container max-w-6xl mx-auto">
        <GameList category={category}/>
      </div>
    </div>
    )
  }

  // SECOND DESIGN OF FIGMA
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
        <hr className="my-3 border-blue-400 max-w-6xl mx-auto"/>
        <div className="flex flex-wrap container max-w-6xl mx-auto my-4">
          <h2 className="text-xl w-full lg:w-[50%]">
            Daftar Game
          </h2>
          <div className="w-full lg:w-[50%] flex justify-end">
            <select className="w-[12rem] max-w-full rounded-sm shadow-md px-3 py-2 text-gray-500 border-r-8 border-transparent" value={category} onChange={(e) => setCategory(e.target.value)}>
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
