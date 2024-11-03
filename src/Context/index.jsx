import { createContext, useState, useEffect } from 'react'
import monstersData from '../monsters.json'

export const MonsterContext = createContext()

export const MonsterProvider = ({ children }) => {
  const [monsters, setMonsters] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const [searchByName, setSearchByName] = useState('')
  const [searchByCategory, setSearchByCategory] = useState('')
  const [isCardDetailOpen, setIsCardDetailOpen] = useState(false)
  const [cardToShow, setCardToShow] = useState(null) // Cambiado a null inicialmente

  const openCardDetail = () => setIsCardDetailOpen(true)
  const closeCardDetail = () => {
    setIsCardDetailOpen(false)
    setCardToShow(null) // Limpia la carta mostrada al cerrar
  }

  useEffect(() => {
    setMonsters(monstersData)
    setFilteredItems(monstersData)
  }, [])

  useEffect(() => {
    let filtered = monsters

    if (searchByName) {
      filtered = filtered.filter(monster =>
        monster.name.toLowerCase().includes(searchByName.toLowerCase())
      )
    }

    if (searchByCategory) {
      filtered = filtered.filter(monster => monster.category === searchByCategory)
    }

    setFilteredItems(filtered)
  }, [monsters, searchByName, searchByCategory])

  return (
    <MonsterContext.Provider value={{
        monsters,
        filteredItems,
        searchByName,
        searchByCategory,
        setSearchByName,
        setSearchByCategory,
        isCardDetailOpen,
        openCardDetail,
        closeCardDetail,
        cardToShow,
        setCardToShow
      }}
    >
      {children}
    </MonsterContext.Provider>
  )
}
