import { useRef } from "react"
import { setTrainerName } from "../store/slices/trainerName.slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './styles/homePage.css'

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
        <picture className="py-4 w-[50%]">
          <img src="./title.png" alt="" />
        </picture>
        <h1 className="text-red-600 font-bold pt-5" >¡Hola entrenador!</h1>
        <h2 className="pt-1 pb-5 font-light text-lg" >Para poder comenzar, dame tu nombre</h2>
        <form onSubmit={handleSubmit} className="flex min-w-[50%]">
          <input className='text-black border-0 h-[40px] w-[70%] shadow-lg cursor-text p-5' type="text" placeholder="Tu nombre..." ref={textInput}/>
          <button className="bg-red-600 text-white border-0 h-[40px] w-[40%] cursor-pointer hover:bg-red-400">Comenzar</button>
        </form>
      </div>
        <div>
          <div className="w-full h-[8vh] m-0 flex flex-col justify-end bg-red-600"></div>
          <div className="w-full h-[5vh] m-0 flex flex-col justify-end bg-black"></div>
          <div className="absolute bottom-[3px] min-w-full flex justify-center">
            <div className="relative w-[70px] h-[70px] bg-white border-[6px] border-solid border-black rounded-[50%]">
              <div className="absolute bottom-[15%] right-[15%] w-[40px] h-[40px] bg-slate-800 border-[6px] border-solid border-black rounded-[50%]"></div>
            </div>
          </div>
        </div>
    </div>
  )
}
export default HomePage;