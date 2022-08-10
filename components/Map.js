import Map,{Marker,Popup} from 'react-map-gl';
import React, { useState,useEffect } from 'react'
import {LocationMarkerIcon,UserIcon} from '@heroicons/react/solid'
import { getCenter } from 'geolib';
function MapBox({data,port}) {
    const coordinate = data.map(val => ({longitude:val.longitude, latitude:val.latitude}))
    // const centerMap = getCenter(coordinate)
    const [viewport,setViewport] = useState({
        longitude: port.longitude,
        latitude: port.latitude,
        zoom: 14,
    })
    const [myLocation, setMyLocation]=useState({
      longitude: 0,
      latitude: 0,
    })
    useEffect(()=>{
       navigator.geolocation.getCurrentPosition(position => {
        setMyLocation({latitude:position.coords.latitude,longitude:position.coords.longitude})
        setViewport({latitude:position.coords.latitude,longitude:position.coords.longitude,zoom:14})
      })
    },[])
  return <Map 
    {...viewport}
    mapStyle='mapbox://styles/mapbox/streets-v11'
    mapboxAccessToken={process.env.mapBoxKey}
    onMove={next => setViewport({latitude:next.viewState.latitude, longitude:next.viewState.longitude, zoom:next.viewState.zoom})}
  >
    <Marker longitude={myLocation.longitude} latitude={myLocation.latitude} ><LocationMarkerIcon className="text-orange-500 w-7 h-10 " /></Marker>
    {
        data.map(val=> {
          if(val.latitude===port.latitude && val.longitude===port.longitude) return(<Marker key={val.latitude} longitude={val.longitude} latitude={val.latitude} ><LocationMarkerIcon className="text-red-500 w-7 h-10 animate-bounce" /></Marker>)
          return(<Marker key={val.latitude} longitude={val.longitude} latitude={val.latitude} ><LocationMarkerIcon className="text-blue-500 w-7 h-10" /></Marker>)
        })
    }
  </Map>
}

export default MapBox