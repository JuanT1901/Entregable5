import { useSelector } from "react-redux";

const PokedexPage = () => {
  const trainerName = useSelector((store) => store.trainerName);

  return (
    <div>
      <h3><span className="text-red-600">Bienvenido {trainerName}.</span>  Aquí podrás encontrar tu pokemon favorito</h3>
    </div>
  )
}
export default PokedexPage