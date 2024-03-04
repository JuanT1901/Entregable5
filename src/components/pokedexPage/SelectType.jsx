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
    <select className="text-black w-[34%] shadow-lg border-0 bg-white p-3" onChange={handleChange} ref={textSelect}>
      <option value="allPokemons">All Pokemon</option>
      {types?.results.map((type) => (
        <option value={type.url} key={type.url}>
          {(type?.name)?.charAt(0).toUpperCase() + (type?.name.slice(1))}
        </option>
      ))}
    </select>
  );
};
export default SelectType;
