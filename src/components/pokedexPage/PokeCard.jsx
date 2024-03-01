import { useEffect } from "react";
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom";

const PokeCard = ({ url }) => {
  const  [pokemon, getPokemon] = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    getPokemon(url)
  }, []);

  const handleClick = () => {
    navigate(`/pokedex/${pokemon?.id}`);
  }

  return (
    <article onClick={handleClick}>
      <picture>
        <img className="w-[250px]" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </picture>
      <h3>{pokemon?.name}</h3>
    </article>
  )
}
export default PokeCard