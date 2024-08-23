import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'
import { useState } from 'react'
import { useEffect } from 'react'

const DisplayAlbum = ({album}) => {
  const {playWithId, albumsData, songsData } = useContext(PlayerContext);
    const {id} = useParams();
    const [albumData, setAlbumData] = useState(" ")
    
    useEffect(()=>{
      albumsData.map((item)=>{
        if(item._id === id){
          setAlbumData(item)
        }
      })
    },[])
    
  return albumData ? (
  
    <>
      <Navbar /> 
      <div className="mt-10 gap-8 flex flex-col md:flex-row md:items-end">
        <img src={albumData.image} alt="" className="w-48 rounded" />
        <div className="flex flex-col">
            <p>Playlist</p>
            <h2 className="text-5xl font-bold mb-4 md:text-7xl">{albumData.name}</h2>
            <h4>{albumData.desc}</h4>
            <p className="mt-1">
                <img src={assets.spotify_logo} alt="" className="inline-block w-5" />
                <b className='ml-2'>Spotify</b>
                . 1,56,623,365  Likes
                . <b className='mr-2'>50 Songs,</b>
                about 2 hr 30 min
            </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p> <b className="mr-4">#</b>Title </p>
        <p>Album </p>
        <p className="hidden sm:block">Date Added</p>
        <img src={assets.clock_icon} alt="" className="m-auto w-4" />
      </div>
      <hr />
      {
        songsData.filter((item)=> item.album === album.name).map((item, index) =>(
          <div  onClick={()=>playWithId(item.id)} key={index} className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer">
            <p className="text-white">
              <b className="mr-4 text-[#a7a7a7]">{index+1}</b>
              <img src={item.image} alt="" className="inline w-10 mr-5" />
              {item.name}
            </p>
            <p className='text-[15px] '>{albumData.name}</p>
            <p className='text-[15px] hidden sm:block'>5 days ago</p>
            <p className='text-[15px] text-center '>{item.duration}</p>
          </div>
        )

        )
      }
    </>
  ) : null
}

export default DisplayAlbum
