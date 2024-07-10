import React, { useState } from 'react';
import filter from "../assets/filter.svg";
import search from "../assets/search.svg";
import Hero from './Hero';



function SearchBar() {

 
  const [searchs, setsearchs] = useState("")
  

  return (
    
    <div className="flex items-center  flex-col gap-[30px] py-8">
      <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-md  border-zinc-400 border-[1px]  ">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent focus:outline-none"
          onChange={(e)=> setsearchs(e.target.value)}
        />
        <img src={search} alt="Search Icon" className="w-6 h-6 ml-2" />
      </div>

      <div className="flex items-center justify-center bg-white w-[100px] h-[40px] rounded-lg border-zinc-400 border-[1px] right-[190px] fixed   ">
        <h1 className="text-lg font-semibold">Filter</h1>
        <img src={filter} alt="Filter Icon" className="w-6 h-6 ml-2" />
      </div>
      <Hero searchs={searchs}/>
      
      
    </div>
  );
}

export default SearchBar;
