import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPokemonName } from "../store/slices/pokemonName.slice";
import useFetch from "../hooks/useFetch";
import PokeCard from "../components/pokedexPage/PokeCard";
import SelectType from "../components/pokedexPage/SelectType";
import "./styles/pokedexPage.css";
import Pagination from "../components/pokedexPage/Pagination";

const PokedexPage = () => {
  const trainerName = useSelector((store) => store.trainerName);
  const pokemonName = useSelector((store) => store.pokemonName);
  const textInput = useRef();
  const dispatch = useDispatch();
  const [pokemons, getPokemons, getPerType] = useFetch();
  const [selectValue, setSelectValue] = useState("allPokemons");
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage] = useState(10);

  useEffect(() => {
    if (selectValue === "allPokemons") {
      const url = `https://pokeapi.co/api/v2/pokemon/?limit=100`;
      getPokemons(url);
    } else {
      getPerType(selectValue);
    }
  }, [selectValue]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setPokemonName(textInput.current.value.trim().toLowerCase()));
    textInput.current.value = "";
  };

  const cbFilter = () => {
    if (pokemonName) {
      return currentPokemon?.filter((element) =>
        element.name.includes(pokemonName)
      );
    } else {
      return currentPokemon;
    }
  };

  //Get current pokemons

  const indexOfLastPost = currentPage * pokemonPerPage;
  const indexOfFirstPost = indexOfLastPost - pokemonPerPage;
  const currentPokemon = pokemons?.results.slice(indexOfFirstPost,indexOfLastPost);

  return (
    <div>
      <div className="pokedex">
        <div className="w-full h-[100px] m-0 flex flex-col justify-star bg-red-600"></div>
        <div className="w-full h-[45px] m-0 flex flex-col justify-start bg-black shadow-md"></div>
        <picture className="absolute top-[48px] left-[10%]">
          <img className="w-80" src="./title.png" alt="" />
        </picture>
        <div className="absolute top-[87px] right-[8%] min-w-full flex justify-end">
          <div className="relative w-[70px] h-[70px] bg-white border-[6px] border-solid border-black rounded-[50%] shadow-md">
            <div className="absolute bottom-[15%] right-[15%] w-[40px] h-[40px] bg-slate-800 border-[6px] border-solid border-black rounded-[50%]"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center max-w-[80%] m-auto">
        <section className="poke__header w-full flex flex-col items-start">
          <h3 className="font-light">
            <span className="text-red-600 font-semibold">
              Bienvenido {trainerName},
            </span>{" "}
            aquí podrás encontrar tu Pokémon favorito
          </h3>
          <div id="poke__form" className="py-8">
            <form className="w-[64%]" onSubmit={handleSubmit}>
              <input
                className="text-black border-0 h-[40px] w-[70%] shadow-md p-3"
                type="text"
                ref={textInput}
                placeholder="Busca tu Pokémon"
              />
              <button className="bg-red-600 text-white w-[30%] border-0 h-[40px] cursor-pointer hover:bg-red-400">
                Buscar
              </button>
            </form>
            <SelectType setSelectValue={setSelectValue} />
          </div>
        </section>
        <section className="poke__container">
          {cbFilter()?.map((pokemon) => (
            <PokeCard key={pokemon.url} url={pokemon.url} />
          ))}
        </section>
      </div>
      <Pagination
        pokemonPerPage={pokemonPerPage}
        totalPokemons={pokemons?.results.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
export default PokedexPage;
