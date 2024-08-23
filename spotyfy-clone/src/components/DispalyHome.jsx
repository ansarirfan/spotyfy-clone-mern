import React from 'react'
import Navbar from './Navbar'

import AlbumItem from './AlbumItem'

import SongsItem from './SongsItem'
import { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const DispalyHome = () => {

  const {songsData, albumsData} =  useContext(PlayerContext);
  return (
    <>
      <Navbar />
      <div className="my-4 ">
        <h1 className="my-5 font-bold text-2xl">Featured Charted</h1>
        <div className=" flex overflow-auto">
        {albumsData.map((item,index) =>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item._id} image={item.image}/>))}
        </div>
     </div>
     <div className="my-4 ">
        <h1 className="my-5 font-bold text-2xl">Today's Biggest Hits</h1>
        <div className="flex overflow-auto">
        {songsData.map((item, index) =>(<SongsItem key={index} name={item.name} image={item.image} desc={item.desc} id={item._id} />))}
        </div>
     </div>
    </>
  )
}

export default DispalyHome
