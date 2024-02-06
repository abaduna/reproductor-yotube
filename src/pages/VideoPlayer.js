
import YouTube from 'react-youtube';
import "./VideoPlayer.css"
function VideoPlayer({singerPlay}) {
    console.log(singerPlay);
    let playlist = "77oNTXqXNYE"
   
    function combinarConComa(str2) {
         playlist = playlist + ',' + str2;
        return playlist;
    }
    playlist= combinarConComa(singerPlay)
     console.log(playlist);
   return<>
   <h1>Youtuber</h1>
   <YouTube className='playerVideo'  opts={{  playerVars: { autoplay: 1, playlist: playlist},width: 640, height: 360 }} />
   </> //
    
}
export default VideoPlayer