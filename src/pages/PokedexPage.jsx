import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPokemonName } from "../store/slices/pokemonName.slice";
import useFetch from "../hooks/useFetch";
import PokeCard from "../components/pokedexPage/PokeCard";
import SelectType from "../components/pokedexPage/SelectType";

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

  console.log(selectValue);

  return (
    <div>
      <section>
        <h3><span className="text-red-600">Bienvenido {trainerName}.</span>  Aquí podrás encontrar tu pokemon favorito</h3>

        <form onSubmit={handleSubmit}>
          <input className='text-black' type="text" ref={textInput}/>
          <button>Buscar</button>
        </form>
        <SelectType
          setSelectValue={setSelectValue}
        />
      </section>
      <section>
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
  )
}
export default PokedexPage