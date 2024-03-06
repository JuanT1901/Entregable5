import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import "./styles/pokeIdPage.css"

const PokeidPage = () => {
  const [ pokeData, getPokeData ] = useFetch()
  const param = useParams();

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${param.id}`;
    getPokeData(url);
  }, []);

  const widthHP = `${pokeData?.stats[0].base_stat}%`;
  const widthBarHp = `${100 - pokeData?.stats[0].base_stat}%`

  const widthAttack = `${pokeData?.stats[1].base_stat}%`;
  const widthBarAttack = `${100 - pokeData?.stats[1].base_stat}%`

  const widthDefense = `${pokeData?.stats[2].base_stat}%`;
  const widthBarDefense = `${100 - pokeData?.stats[2].base_stat}%`

  const widthSpeed = `${pokeData?.stats[5].base_stat}%`;
  const widthBarSpeed = `${100 - pokeData?.stats[5].base_stat}%`

  return (
    <article>
      <div className="pokedex">
        <div className="w-full h-[100px] m-0 flex flex-col justify-star bg-red-600"></div>
        <div className="w-full h-[45px] m-0 flex flex-col justify-start bg-black shadow-md"></div>
        <picture className="absolute top-[48px] left-[10%]">
          <img className="w-80" src="../../public/title.png" alt="" />
        </picture>
        <div className="absolute top-[87px] right-[8%] min-w-full flex justify-end">
          <div className="relative w-[70px] h-[70px] bg-white border-[6px] border-solid border-black rounded-[50%] shadow-md">
            <div className="absolute bottom-[15%] right-[15%] w-[40px] h-[40px] bg-slate-800 border-[6px] border-solid border-black rounded-[50%]"></div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="poke__card">
        <div className={`${pokeData?.types[0].type.name} poke__bg`}></div>
          <picture className="poke__id__img">
            <img src={pokeData?.sprites.other['official-artwork'].front_default} alt="" />
          </picture>
          <div className="poke__info">
            <h3 id='id__number'  className={`${pokeData?.types[0].type.name}`}>#{pokeData?.id}</h3>
            <h3 className={`poke__id__name ${pokeData?.types[0].type.name}`}>{(pokeData?.name)?.charAt(0).toUpperCase() + (pokeData?.name.slice(1))}</h3>
            <div className="poke__physic">
              <div>
                <h4 className="wh__title">Weight</h4>
                <h3>{pokeData?.weight}</h3>
              </div>
              <div>
                <h4 className="wh__title">Height</h4>
                <h3>{pokeData?.height}</h3>
              </div>
            </div>
            <div className="poke__types__abilities">
              <div className="">
                <h2>Type</h2>
                {
                  pokeData?.types.length > 1 
                  ? <h3 className={`poke__type ${pokeData?.types[0].type.name}`}>{(pokeData?.types[0].type.name)?.charAt(0).toUpperCase() + (pokeData?.types[0].type.name.slice(1))} / {(pokeData?.types[1].type.name)?.charAt(0).toUpperCase() + (pokeData?.types[1].type.name.slice(1))}</h3>
                  : <h3 className="poke__type">{(pokeData?.types[0].type.name)?.charAt(0).toUpperCase() + (pokeData?.types[0].type.name.slice(1))}</h3>
                }
              </div>
              <div>
                <h2>Abilities</h2>
                {
                  pokeData?.abilities.map(ability => (
                    <h3 className="poke__ability" key={ability.ability.name}>{(ability.ability.name)?.charAt(0).toUpperCase() + (ability.ability.name.slice(1))}</h3>
                  ))
                }
              </div>
            </div>
            <div className="poke__title__stats">
              <h3>Stats</h3>
              <img className="pokeball__img" src="../../public/poke_logo.png" alt="pokeLogo"/>
            </div>
            <div className="poke__id__stats">
              <div className="title__stats">
                <h3>HP</h3>
                <h3>{pokeData?.stats[0].base_stat} / 100</h3>
              </div>
              <div className="bars">
                <div className="bar" style={{width: widthHP}}></div>
                <div className="back" style={{width: widthBarHp}}></div>
              </div>
              <div className="title__stats">
                <h3>Attack</h3>
                <h3>{pokeData?.stats[1].base_stat} / 100</h3>
              </div>
              <div className="bars">
                <div className="bar" style={{width: widthAttack}}></div>
                <div className="back" style={{width: widthBarAttack}}></div>
              </div>
              <div className="title__stats">
                <h3>Defense</h3>
                <h3>{pokeData?.stats[2].base_stat} / 100</h3>
              </div>
              <div className="bars">
                <div className="bar" style={{width: widthDefense}}></div>
                <div className="back" style={{width: widthBarDefense}}></div>
              </div>
              <div className="title__stats">
                <h3>Speed</h3>
                <h3>{pokeData?.stats[5].base_stat} / 100</h3>
              </div>
              <div className="bars">
                <div className="bar" style={{width: widthSpeed}}></div>
                <div className="back" style={{width: widthBarSpeed}}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="moves__container">
          <div className="poke__title__stats move__stats">
            <h3>Movements</h3>
            <img className="pokeball__img" src="../../public/poke_logo.png" alt="pokeLogo"/>
          </div>
          <div className="moves__list">
            {
              pokeData?.moves.map(move => (
                <h3 className="poke__moves" key={move.move.name}>{move.move.name}</h3>
              ))
            }
          </div>
        </div>
      </div>
    </article>
  )
}
export default PokeidPage