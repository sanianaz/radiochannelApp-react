import React, { useEffect, useState } from "react";
import "./GetData.css";
import Logo from "./logo.png";

const GetData = () => {
  const [channels, setChannels] = useState();
  const [fetchcomplete, setFetchcomplete] = useState(false);

  const getChannel = async () => {
    try {
      const response = await fetch(
        "https://api.sr.se/api/v2/channels?format=json&indent=true&pagination=false"
      );

      const data = await response.json();
      console.log("fetch", data.channels);

      setChannels(data.channels);
      setFetchcomplete(true);
    } catch (error) {
      console.log("my error is " + error);
    }
  };

  useEffect(() => {
    getChannel();
  }, []);

  if (!fetchcomplete) return <p>loading </p>;

  return (
    <>
      <div>
        <img className="logo" src={Logo} alt=" channel" />
        <div class="video__icon">
          <div class="circle--outer"></div>
          <div class="circle--inner"></div>
        </div>
        <h1>Channels Playlist</h1>
      </div>

      <div className="card-container">
        {channels.map((channel, index) => {
          console.log("map", channels);
          const { image, tagline, name, liveaudio } = channel;
          return (
            <>
              <article key={index}>
                <img className="img" src={image} alt="Sample" />
                <div className="text">
                  <h3 className="name">{name}</h3>
                  <p className="tagline">{tagline}</p>
                  <a
                    className="url btn btn-primary btn-block"
                    href={liveaudio.url}
                  >
                    <p className="link_name">Live streaming</p>
                  </a>
                </div>
              </article>
            </>
          );
        })}
      </div>
    </>
  );
};

export default GetData;
