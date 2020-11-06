import Axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { token } from "../../app/constants";

export default function Thumbnail({ adId }) {
  const [thumbnail, setThumbnail] = useState("");

  const fetchCreativeId = async () => {
    const response = await Axios.get(
      //get creative id
      `https://graph.facebook.com/v8.0/${adId}?fields=creative&access_token=${token}`
    );

    const fetchThumbnail = await Axios.get(
      //get thumbnail
      `https://graph.facebook.com/v8.0/${response.data.creative.id}?fields=thumbnail_url&access_token=${token}`
    );

    setThumbnail(fetchThumbnail.data.thumbnail_url);
  };

  useEffect(() => {
    fetchCreativeId();
  }, []);

  return (
    <div>
      {adId}
      <img src={thumbnail} alt={adId}></img>
    </div>
  );
}

//23845605704220770?fields=body,thumbnail_url
