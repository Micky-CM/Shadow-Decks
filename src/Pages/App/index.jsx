import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import NotFound from '../NotFound'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import './App.css'
import { MonsterProvider } from '../../Context'

const AppRoutes = ()=>{
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path:'/:category', element:<Home /> },
    { path: '/*', element: <NotFound /> },
  ])
  return routes
}
const App = ()=> {
  return (
    <MonsterProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <Footer />
      </BrowserRouter>
    </MonsterProvider>
  )
}

export default App