import React from 'react';

const VideoPlayer = ({ videoUrl }) => {
    const autoplayUrl = `${videoUrl}?autoplay=1`; // Ajoutez ?autoplay=1 à l'URL

    return (
        <div className="video-player">
            <iframe
                width="50%"
                height="315"
                src={autoplayUrl}
                title="Video Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoPlayer;
