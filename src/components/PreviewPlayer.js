import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';

import vid1 from '../assets/file_example_MOV_1280_1_4MB.mov';
import vid2 from '../assets/mixkit-countryside-meadow-4075-medium.mp4';
import img1 from '../assets/no_groups.png';
import img2 from '../assets/photo-1606914469633-bd39206ea739 (1).jpg';

const playlist = [
  {
    id: "1",
    type: "image",
    duration: 5,
    link: img1,
  },
  {
    id: "2",
    type: "video",
    duration: 10,
    link:'https://www.youtube.com/watch?v=xuP4g7IDgDM',
  },
  {
    id: "4",
    type: "image",
    duration: 5,
    link: img2,
  },
  {
    id: "6",
    type: "video",
    duration: 30,
    link: vid1,
  },
];

const PreviewPlayer = () => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const playerRefs = useRef([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentMediaIndex(prevIndex =>
        prevIndex < playlist.length - 1 ? prevIndex + 1 : 0
      );
    }, playlist[currentMediaIndex].duration * 1000); 

    return () => clearTimeout(timer);
  }, [currentMediaIndex]);

  useEffect(() => {
    playerRefs.current.forEach((playerRef, index) => {
      if (index === currentMediaIndex && playerRef) {
        playerRef.seekTo(0);
      }
    });
  }, [currentMediaIndex]);

  return (
    <div className="preview-player w-full h-full">
      {playlist.map((media, index) => (
        <div className='bg-black w-full h-full flex items-center justify-center' key={media.id} style={{ display: index === currentMediaIndex ? 'block' : 'none' }}>
          {media.type === 'video' ? (
            <ReactPlayer
              ref={ref => (playerRefs.current[index] = ref)}
              url={media.link}
              controls={false}
              playing
              width="100%"
              height="100%"
              volume={0}
              muted
              loop={false}
            />
          ) : (
              <img className='object-contain w-full h-full' src={media.link} alt={`Media ${index}`} />
          )}
        </div>
      ))}
    </div>
  );
};

export default PreviewPlayer;
