
import { useEffect, useState } from 'react';
import './App.css';
import VideoCard from './VideoCard';
import db from "./firebase";
function App() {
  const [reels, setReels] = useState([]);

  useEffect(()=>{
    db.collection('reels').onSnapshot(snapshot => (
      setReels(snapshot.docs.map(doc => doc.data()))
      
      ))
  },[])

  return (
    <div className="app">
      <h1>Hey lets program an IG reels clone</h1>

      <div className="app__top">
            {/* image */}
          <img src="https://imgs.search.brave.com/c4g6-eXJbAgOSVYiUGLILCGQOj87zB5Sj1TqvvcIRR8/rs:fit:1024:1024:1/g:ce/aHR0cDovL3dvcmtp/bmd3aXRoZG9nLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ni8wNS9uZXdfaW5z/dGFncmFtX2xvZ28t/MTAyNHgxMDI0Lmpw/Zw" alt="" className="app__logo" />
                  {/* reels text */}
            <h1>Reels</h1>
      </div>

     <div className="app__videos">
        {/* container of app videos --scrolling container*/}
       {reels.map(({url, channel, description, song, likes, messages, shares}) => (
          <VideoCard
          channel ={channel}
           avatarScr = {avatarSrc}
           song = {song}
           url ={url}
           likes ={likes}
           shares ={shares}
          />
        ))}

      
       
    

     </div>

    
     
    </div>
  );
}

export default App;
