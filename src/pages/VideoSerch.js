import React, { useState } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';
import VideoPlayer from './VideoPlayer';
import "../App.css"
import Form from 'react-bootstrap/Form';
import {Button} from "react-bootstrap"
function VideoSerch(params) {
    const [searchTerm, setSearchTerm] = useState('');
    const [videos, setVideos] = useState([]);   
    const [addVideo,setAddVideo]=useState([]) 
    
    const handleSearch = async () => {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            q: searchTerm,
            part: 'snippet',
            maxResults: 10,
            type: 'video',
            key: 'AIzaSyCNBAGQbfsVw17DRXx_EuMB3JzZ4FMlNFY',
          },
          
        }
);
setVideos(response.data.items);}
const sendVideo =(video)=>{
    console.log(`send video`);
console.log(video);
setAddVideo([...addVideo,video])
}

    return(
        <div>
            <h1 className='title'>Reproductor de musica</h1>
      <Form.Control className='inputVS' type="text" value={searchTerm} placeholder='buscador'  onChange={(e) => setSearchTerm(e.target.value)} />
     <div className='d-grid gap-2 pt-4'>
      <Button  variant="danger" onClick={handleSearch}>Search</Button>  
     </div>
      
      {videos?.map((video) => (
        <div>
         <YouTube videoId={video.id.videoId} > </YouTube>
        <button onClick={()=>sendVideo(video.id.videoId)}>Agregar a la lista</button>   
        </div>
        
      ))}
      
      <VideoPlayer addVideo={addVideo} ></VideoPlayer>
    </div>
    )
}
export default VideoSerch