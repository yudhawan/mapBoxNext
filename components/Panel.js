import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {LocationMarkerIcon} from '@heroicons/react/solid'
function Panel({id,name,longitude,latitude,image,types,location,updatePort,updateIdActive,idActive}) {
  return (
    <div className={`rounded-tl-lg rounded-tr-lg flex flex-col border-b-2 border-gray-400 p-2 cursor-pointer ${(id===idActive)?'bg-blue-100':'bg-none'}`} onClick={()=>{
        updateIdActive(id)
        updatePort(longitude,latitude)}} key={id}>
        <div className='flex justify-between items-center'>
            <div className='flex-col space-y-2 justify-start flex'>
                <p className='text-xs text-gray-400 '>BUSINESS</p>
                <p className='text-2xl font-bold'>{name}</p>
            </div>
            <Image src={image} width={120} height={100} />
        </div>
        <div className='flex-col flex justify-start space-y-2'>
            <div className='flex space-x-2 items-center'>
                <LocationMarkerIcon className='w-5 h-5 text-gray-500' />
                <p className='text-gray-500 text-xs'>{location}</p>
            </div>
            <div className='flex space-x-2'>
                {
                    types.map((val,index)=><div key={index} className='bg-blue-200 border border-blue-500 text-blue-500 text-xs rounded-sm py-1 px-2 w-fit'>{val}</div>)
                }
            </div>
        </div>
    </div>
  )
}

export default Panel