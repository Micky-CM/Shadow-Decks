import { useContext } from "react"
import { MonsterContext } from "../../Context"

const Card = ({ data }) => {
  const context = useContext(MonsterContext)

  const showCard = () => {
    context.setCardToShow(data) // Establece la carta seleccionada
    context.openCardDetail() // Abre el modal
  }

  return (
    <article
      className="bg-gradient-to-tl from-amber-300 via-night to-amber-300 cursor-pointer w-56 rounded-lg shadow-lg p-3 mb-2 hover:scale-125"
      onClick={showCard}
    >
      <figure className="relative mb-2 w-full h-3/4">
        <figcaption className="absolute bottom-0 left-0 bg-blue-300/60 rounded-lg text-black text-sm m-2 px-3 py-0.5">
          {data.category}
        </figcaption>
        <img
          className="w-full h-full object-contain rounded-lg"
          src={data.image}
          alt={data.name}
        />
      </figure>
      <div className="flex flex-col text-moon drop-shadow-md">
        <h3 className="text-lg font-title truncate">{data.name}</h3>
        <p className="text-md font-medium font-body italic">Puntos de Terror: <strong className=" font-title">{data.horrorPoints}</strong> </p>
      </div>
    </article>
  )
}

export default Card
