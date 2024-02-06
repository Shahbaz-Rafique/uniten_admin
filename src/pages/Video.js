import React from 'react';

const VideoPlayer = ({ videoUrl }) => {
  // Extracting the video ID from the YouTube URL
  const getYouTubeId = (url) => {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return match && match[1];
  };

  // Constructing the embedded YouTube URL with autoplay, loop, and modest branding
  const embedUrl = `https://www.youtube.com/embed/${getYouTubeId(videoUrl)}?autoplay=1&loop=1&modestbranding=1&controls=0`;

  return (
    <div>
      <iframe
        title="Embedded Video"
        width="560"
        height="315"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const Video = () => {

  const videoUrl = 'https://youtu.be/LPeCkxZX4qs?feature=shared';

  return (
    <div>
      <h1>React Video Player</h1>
      <VideoPlayer videoUrl={videoUrl} />
    </div>
  );
};

export default Video;
