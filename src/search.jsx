import React, { useState, useEffect, useContext } from "react";
import PokeCard from "./components/PokeCard";
import PokeList from "./components/PokeList";
import { UserContext } from "./components/constext";
import { Link } from "react-router-dom";

const Search = () => {
  const [listData, setListData] = useState([]);
  const [pokemon, setPoke] = useState("")
  const [pokeDescription, setPokeDescription] = useState("")
  const [itemId, setItemid] = useState("")
  const { selectedItem } = useContext(UserContext)


  useEffect(() => {
    if (selectedItem) {
      //filter(Boolean is to remove all the falsy from an array)
      //falsy value: false, 0, "", null, undefined,NaN
      const url = selectedItem.url
      setItemid(url?.split("/").filter(Boolean).pop())

      const fetchImg = async (imgUrl) => {
        try {
          const res = await fetch(imgUrl)
          if (!res.ok) throw Error("not found")
          const data = await res.json()
          setPoke(data)
        } catch (err) {
          console.log(err)
        }
      }
      const fetchDescription = async () => {
        const descriptionUrl = `https://pokeapi.co/api/v2/pokemon-species/${itemId}/`
        try {
          const res = await fetch(descriptionUrl)
          if (!res.ok) throw Error("not found")
          const data = await res.json()

          const englishEntry = data.flavor_text_entries.find(entry => entry.language.name === "en")
          if (englishEntry) {
            //Some flavor texts contain weird characters like \f (form feed).
            setPokeDescription(englishEntry.flavor_text.replace(/\f/g, ' '))
          }
        } catch (err) {
          console.log(err)
        }
      }

      fetchImg(url)
      fetchDescription()
    }
  }, [selectedItem])


  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=1138";
    fetch(url)
      .then((response) => response.json())
      .then((json) => setListData(json.results));
  }, []);


  return (
    <div className="px-[160px] min-w-[1440px]">
      <img
        src={"/src/assets/img/pokemon-search.png"}
        className="fixed top-0 left-0 w-screen h-screen object-cover overflow-scroll -z-10"

      ></img>
      <div className=" grid grid-cols-3 pt-5">
        <Link to={"/"} className="bg-[#CA8446] py-3 px-3 rounded-full w-15 shadow-lg transform hover:scale-105">
          <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2606" width="32" height="32"><path d="M714.808889 853.333333H208.118519c-11.757037 0-21.333333-9.576296-21.333334-21.333333s9.576296-21.333333 21.333334-21.333333h506.69037c100.02963 0 181.380741-87.514074 181.380741-195.128889s-81.351111-195.128889-181.380741-195.128889H106.761481c-11.757037 0-21.333333-9.576296-21.333333-21.333333s9.576296-21.333333 21.333333-21.333334h608.047408c60.112593 0 116.527407 24.936296 158.90963 70.162963 42.002963 44.847407 65.137778 104.391111 65.137777 167.632593 0 63.241481-23.134815 122.785185-65.137777 167.632592-42.382222 45.226667-98.797037 70.162963-158.90963 70.162963z" p-id="2607" fill="#493022"></path><path d="M106.761481 420.408889c-5.499259 0-10.903704-2.085926-15.075555-6.257778-8.343704-8.343704-8.343704-21.807407 0-30.151111l207.36-207.075556c8.343704-8.343704 21.807407-8.343704 30.151111 0s8.343704 21.807407 0 30.151112L121.837037 414.151111c-4.171852 4.171852-9.576296 6.257778-15.075556 6.257778z" p-id="2608" fill="#493022"></path></svg>
        </Link>
        <div className="font-bold text-6xl text-center text-[#493022]">Pokedex</div>
      </div>
      <div className="grid grid-cols-5 pt-6">
        <div className="col-span-2"><PokeList data={listData} /></div>
        <div className="col-span-3 flex justify-end items-end"><PokeCard item={selectedItem} imageSrc={pokemon ? pokemon.sprites.front_default : ""} description={pokeDescription} /></div>
      </div>
    </div>
  );
};

export default Search;