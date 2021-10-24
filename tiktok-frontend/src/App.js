import axios from './axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Video from './Video';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get('/v2/posts');
      setVideos(response.data);
      return response;
    }

    fetchPosts();
  }, []);

  console.log(videos);

  return (
    // BEM naming convention
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({
            _id: key,
            url,
            channel,
            description,
            song,
            likes,
            messages,
            shares,
          }) => (
            <Video
              key={key}
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
      </div>
      {/* {app container} */}
      {/* videos */}
      {/* {<Video/>} */}
      {/* {<Video/>} */}
      {/* {<Video/>} */}
      {/* {<Video/>} */}
      {/* {<Video/>} */}
      {/* {<Video/>} */}
    </div>
  );
}

export default App;
