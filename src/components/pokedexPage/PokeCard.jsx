import { useEffect } from "react";
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom";
import "./styles/pokeCard.css"

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
    <article className={`${pokemon?.types[0].type.name} flex flex-col justify-evenly items-center border-solid border-8 rounded-xl cursor-pointer relative`} onClick={handleClick}>
      <div className={`${pokemon?.types[0].type.name} poke__bg`}></div>
      <img className="poke__img" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      <div className="flex flex-col justify-evenly items-center h-full pb-[20px]">
        <div className="flex flex-col items-center justify-center">
          <h3 className={`${pokemon?.types[0].type.name} poke__name`}>{(pokemon?.name)?.charAt(0).toUpperCase() + (pokemon?.name.slice(1))}</h3>
          {
            pokemon?.types.length > 1 
            ? <h3 className="poke__type">{(pokemon?.types[0].type.name)?.charAt(0).toUpperCase() + (pokemon?.types[0].type.name.slice(1))} / {(pokemon?.types[1].type.name)?.charAt(0).toUpperCase() + (pokemon?.types[1].type.name.slice(1))}</h3>
            : <h3 className="poke__type">{(pokemon?.types[0].type.name)?.charAt(0).toUpperCase() + (pokemon?.types[0].type.name.slice(1))}</h3>
          }
        </div>
        <h4 className="titles">Type</h4>
        <hr className="titles"/>
        <div className="grid grid-cols-2">
          <div className="poke__stats">
            <h4 className="titles">HP</h4>
            <h3 className={pokemon?.types[0].type.name}>{pokemon?.stats[0]?.base_stat}</h3>
          </div>
          <div className="poke__stats">
            <h4 className="titles">ATTACK</h4>
            <h3 className={pokemon?.types[0].type.name}>{pokemon?.stats[1]?.base_stat}</h3>
          </div>
          <div className="poke__stats">
            <h4 className="titles">DEFENSE</h4>
            <h3 className={pokemon?.types[0].type.name}>{pokemon?.stats[2]?.base_stat}</h3>
          </div>
          <div className="poke__stats">
            <h4 className="titles">SPEED</h4>
            <h3 className={pokemon?.types[0].type.name}>{pokemon?.stats[5]?.base_stat}</h3>
          </div>
        </div>
      </div>
    </article>
  )
}
export default PokeCard