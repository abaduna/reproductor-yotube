
import YouTube from 'react-youtube';
import "./VideoPlayer.css"
import { useEffect, useState } from 'react';
function VideoPlayer({addVideo}) {
    const [show,setShow]= useState(false)
    console.log(addVideo);
    let playlist = ""
   
    function combinarConComa(str2) {
        if (!playlist) {
            return playlist =str2
        }
         playlist += ',' + str2;
        return playlist;
    }
    
     if (addVideo) {
        addVideo?.forEach((value) => {
          playlist = combinarConComa(value);
        });
      }
      console.log(playlist);
      useEffect(() => {
        if (addVideo) {
          addVideo.forEach((value) => {
            playlist = combinarConComa(value);
          });
          if (addVideo.length >0) {
            setShow(true)
          }
         
        }
      }, []);
      useEffect(() => {
        if (addVideo) {
          addVideo.forEach((value) => {
            playlist = combinarConComa(value);
          });
          if (addVideo.length >0) {
            setShow(true)
          }
           
        }
      }, [addVideo]);
      console.log(show);
   return<>
   {show &&<YouTube className='playerVideo'  opts={{  playerVars: { autoplay: 0, playlist: playlist},width: 640, height: 360 }} />}
   
   
   </> //
    
}
export default VideoPlayer