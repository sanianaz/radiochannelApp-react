import React, { useEffect, useState } from "react";
import "./GetData.css";
import Logo from "./logo.png";

const GetData = () => {
  const [user, setUser] = useState([]);

  const getChannel = async () => {
    try {
      const response = await fetch(
        "https://api.sr.se/api/v2/channels?format=json&indent=true&pagination=false"
      );

      setUser(await response.json());
    } catch (error) {
      console.log("my error is " + error);
    }
  };
  console.log(user);
  console.log(user.channels);
  console.log(user.channels[0].name);
  console.log(user.channels[0].image);
  console.log(user.channels[0].tagline);
  console.log(user.channels[0].liveaudio.url);
  useEffect(() => {
    getChannel();
  }, []);

  return (
    <>
      <div>
        <img className="logo" src={Logo} alt=" channel" />
        <h1>CHANNELS</h1>
      </div>

      <div className="card-container">
        ¨
        {user.indexes(this.user.channels).map((channel, index) => {
          console.log(user.channels);
          return (
            <>
              <article key={index}>
                <img className="img" src="#" alt="Sample" />
                <div className="text">
                  <h3 className="name">{channel.name}</h3>
                  <p className="tagline">tagline</p>
                  <a
                    className="url btn btn-primary btn-block"
                    href="google.com"
                  >
                    <p className="link_name">name url</p>
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
