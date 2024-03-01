import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPokemonName } from "../store/slices/pokemonName.slice";
import useFetch from "../hooks/useFetch";
import PokeCard from "../components/pokedexPage/PokeCard";
import SelectType from "../components/pokedexPage/SelectType";
import './styles/pokedexPage.css';

const PokedexPage = () => {
  const trainerName = useSelector((store) => store.trainerName);
  const pokemonName = useSelector((store) => store.pokemonName);
  const textInput = useRef();
  const dispatch = useDispatch();
  const [ pokemons, getPokemons, getPerType ] = useFetch();
  const [selectValue, setSelectValue] = useState('allPokemons');

  useEffect(() => {
    if(selectValue === 'allPokemons'){
      const url = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
      getPokemons(url);
    } else {
      getPerType(selectValue);
    }
  }, [selectValue]);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(setPokemonName(textInput.current.value.trim().toLowerCase()));
    textInput.current.value = '';
  }

  const cbFilter = () => {
    if(pokemonName){
      return pokemons?.results.filter(element => element.name.includes(pokemonName));
    }else {
      return pokemons?.results; 
    }
  }

  return (
    <div>
      <div className="pokedex">
        <div className="w-full h-[8vh] m-0 flex flex-col justify-star bg-red-600"></div>
        <div className="w-full h-[5vh] m-0 flex flex-col justify-start bg-black"></div>
      </div>
      <div>
        <section className="poke__header">
          <h3><span className="text-red-600">Bienvenido {trainerName}.</span>  Aquí podrás encontrar tu pokemon favorito</h3>
          <div className="min-w-full">
            <form className='w-[40%]' onSubmit={handleSubmit}>
              <input className='text-black border-0 h-[40px] w-[70%] shadow-lg' type="text" ref={textInput} placeholder="Busca tu Pokémon"/>
              <button className="bg-red-600 text-white w-[30%] border-0 h-[40px] cursor-pointer hover:bg-red-400">Buscar</button>
            </form>
            <SelectType
              setSelectValue={setSelectValue}
            />
          </div>
        </section>
        <section className='poke__container'>
          {
            cbFilter()?.map(pokemon => (
              <PokeCard 
                key={pokemon.url}
                url={pokemon.url}
              />
            ))
          }
        </section>
      </div>
    </div>
  )
}
export default PokedexPage