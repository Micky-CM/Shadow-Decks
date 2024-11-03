import { useContext } from "react"
import { MonsterContext } from "../../Context"

const CardDetail = () => {
  const context = useContext(MonsterContext)

  if (!context.cardToShow) {
    return null // No mostrar el modal si no hay carta seleccionada
  }

  const handleCloseOutsideClick = () => {
    context.closeCardDetail() // Cierra el modal
  }

  return (
    <div
      className={`${context.isCardDetailOpen ? 'flex' : 'hidden'} fixed inset-0 bg-black bg-opacity-80 justify-center items-center z-20`}
      onClick={handleCloseOutsideClick}
    >
      <aside
        className="w-96 bg-gradient-to-tl from-amber-300 via-night to-amber-300 rounded-lg max-w-[600px] overflow-y-auto p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <h2 className="font-title font-bold text-2xl text-moon drop-shadow-lg shadow-black mb-2">{context.cardToShow.name}</h2>
          <button onClick={context.closeCardDetail}>
            <p className="h-8 w-8 font-title font-bold text-moon hover:text-liliac-light">X</p>
          </button>
        </div>
        <figure className="flex justify-center px-4">
          <img
            className="w-full object-cover rounded-lg"
            src={context.cardToShow.image}
            alt={context.cardToShow.name}
          />
        </figure>
        <div className="flex flex-col rounded-lg bg-gradient-to-br from-gold to-amber-50 mx-4 my-2 p-4">
          <p className="font-bold font-body italic text-lg line-clamp-3">{context.cardToShow.category}</p>
          <p className="font-medium font-body italic text-md line-clamp-3">{context.cardToShow.description}</p>
          <p className="font-medium font-body italic text-md line-clamp-3"><strong>Habilidad:</strong> {context.cardToShow.skill}</p>
          <p className="font-bold font-body italic text-lg text-end line-clamp-3">Puntos de Terror: <strong>{context.cardToShow.horrorPoints}</strong></p>
        </div>
      </aside>
    </div>
  )
}

export default CardDetail
