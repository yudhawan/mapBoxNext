import { useState } from 'react'
import MapBox from '../components/Map'
import Panel from '../components/Panel'
import 'mapbox-gl/dist/mapbox-gl.css';

export default function Home({data}) {
  const [port,setPort]=useState({
    longitude: 0,
    latitude:0,
  })
  const [idActive,setIdActive] = useState('')
  const updatePort = (long,lat) => setPort({longitude: long,latitude:lat,})
  const updateIdActive = (id)=>{
    if(idActive===id) {
      setIdActive('')
    }else{
        setIdActive(id)
    }
  }
  return (
    <div className="bg-white w-full h-screen flex justify-between divide-x-2">
      <section className='w-[40vw] p-10 space-y-7 overflow-y-auto'>
        {
          data?.companies.map(val=> <Panel key={val.key} updateIdActive={updateIdActive} updatePort={updatePort} idActive={idActive} id={val.key} name={val.name} longitude={val.longitude} latitude={val.latitude} image={val.image} types={val.types} location={val.location}/>)
        }
      </section>
      <div className='w-full h-auto'>
        <MapBox data={data.companies} port={port}/>
      </div>
    </div>
  )
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://localhost/api/map`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}