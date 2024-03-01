import { useEffect, useRef } from "react";
import useFetch from "../../hooks/useFetch";
import { setPokemonName } from "../../store/slices/pokemonName.slice";
import { useDispatch } from "react-redux";

const SelectType = ({ setSelectValue }) => {
  const [types, getTypes, getPerType] = useFetch();
  const dispatch = useDispatch();

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/type/";
    getTypes(url);
  }, []);

  const textSelect = useRef();

  const handleChange = () => {
    setSelectValue(textSelect.current.value);
    dispatch(setPokemonName(''));
  }

  return (
    <select className="text-black" onChange={handleChange} ref={textSelect}>
      <option value="allPokemons">All pokemons</option>
      {types?.results.map((type) => (
        <option value={type.url} key={type.url}>
          {type.name}
        </option>
      ))}
    </select>
  );
};
export default SelectType;
