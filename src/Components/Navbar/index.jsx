import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MonsterContext } from '../../Context'

const Navbar = ()=> {
  const [isScrolled, setIsScrolled] = useState(false)

  const { setSearchByCategory } = useContext(MonsterContext)
  const activeStyle = 'underline underline-offset-4 font-medium'

  useEffect(() => {
    const handleScroll = ()=> {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return ()=> window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`w-full flex flex-col items-center fixed z-10 top-0 font-title px-12 py-6 transition-colors duration-300 ${
        isScrolled ? 'bg-night bg-opacity-90' : 'bg-night'
      } `}
    >
      <div className='flex items-center gap-2 mb-3'>
        <img
          className='w-12 hover:scale-125'
          src='/public/Shadow-Decks-logo.png'
          alt='logo de Shadow Decks'
        />
        <h1 className='font-title text-4xl text-gold drop-shadow-lg'>Shadow Decks</h1>
      </div>

      <ul className='hidden md:flex justify-center items-center text-lg text-moon gap-4'>
        <li>
          <NavLink
            to='/'
            onClick={() => setSearchByCategory('')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Todos los Monstruos
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/Vampiro'
            onClick={() => setSearchByCategory('Vampiro')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Vampiro
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/Licántropo'
            onClick={() => setSearchByCategory('Licántropo')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Licántropo
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/Espectro'
            onClick={() => setSearchByCategory('Espectro')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Espectro
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/Hechicero'
            onClick={() => setSearchByCategory('Hechicero')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Hechicero
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/Profundo'
            onClick={() => setSearchByCategory('Profundo')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Profundo
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
