import { useContext } from "react"
import { MonsterContext } from '../../Context'
import Layout from "../../Components/Layout"
import Card from '../../Components/Card'
import CardDetail from '../../Components/CardDetail'

const Home = ()=> {
  const context = useContext(MonsterContext)

  const renderView = ()=> {
    if (context.filteredItems?.length > 0) {
      return (
        context.filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    } else {
      return (
        <div className="text-lg text-moon font-bold">Invocando a los monstruos...</div>
      )
    }
  }

  return (
    <Layout>
      <div className="flex justify-center items-center relative w-full mb-8">
        <input
          className="w-80 rounded-lg border-2 border-gold bg-liliac-soft shadow-md focus:outline-liliac-light p-2"
          type="text"
          placeholder="Buscar un monstruo por su nombre"
          onChange={(event)=> context.setSearchByName(event.target.value)}
        />
      </div>

      <div className="flex flex-wrap justify-center w-full max-w-screen-lg gap-8">
        { renderView() }
      </div>
      <CardDetail />
    </Layout>
  )
}

export default Home
