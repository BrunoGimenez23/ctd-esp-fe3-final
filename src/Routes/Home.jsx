
import Card from '../Components/Card'
import { useFavContext } from '../Components/utils/Context';


const Home = () => {
  
  const { state } = useFavContext();

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        
      {state.dentistas.map((dentista) => <Card item={dentista} key={dentista.id}/>)}
      </div>
    </main>
  )
}

export default Home