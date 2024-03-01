import { useRef } from "react"
import { setTrainerName } from "../store/slices/trainerName.slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const textInput = useRef();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(setTrainerName(textInput.current.value.trim()));
    navigate('/pokedex');
  }

  return (
    <div>
      <div className="min-h-[87vh] flex flex-col items-center justify-center">
        <picture className="py-4">
          <img src="../../public/title.png" alt="" />
        </picture>
        <h1 className="text-red-600 font-bold pt-5" >¡Hola entrenador!</h1>
        <h2 className="pb-7" >Para poder comenzar, dame tu nombre</h2>
        <form onSubmit={handleSubmit}>
          <input className='text-black border-0 h-[40px] shadow-lg' type="text" placeholder="Tu nombre..." ref={textInput}/>
          <button className="bg-red-600 text-white border-0 h-[40px] cursor-pointer hover:bg-red-400">Comenzar</button>
        </form>
      </div>
        <div>
          <div className="w-full h-[8vh] m-0 flex flex-col justify-end bg-red-600"></div>
          <div className="w-full h-[5vh] m-0 flex flex-col justify-end bg-black"></div>
        </div>
    </div>
  )
}
export default HomePage;