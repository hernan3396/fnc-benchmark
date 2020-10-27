import Axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { token } from "../../app/constants";

export default function Thumbnail({ adId }) {
  const objectiveName = useParams().objectiveName;

  const [thumbnail, setThumbnail] = useState("");
  const [creativeId, setCreativeId] = useState("");

  const fetchCreativeId = async () => {
    const response = await Axios.get(
      //get creative id
      `https://graph.facebook.com/v8.0/${adId}?fields=creative&access_token=${token}`
    );

    const fetchThumbnail = await Axios.get(
      //get thumbnail
      `https://graph.facebook.com/v8.0/${response.data.creative.id}?fields=thumbnail_url&access_token=${token}`
    );

    setCreativeId(response.data.creative.id);
    setThumbnail(fetchThumbnail.data.thumbnail_url);
  };

  useEffect(() => {
    fetchCreativeId();
  }, []);

  return (
    <div>
      <Link to={`${objectiveName}/${adId}/${creativeId}`}>
        ID del anuncio - {adId}
        <img src={thumbnail} alt={adId}></img>
      </Link>
    </div>
  );
}

//23845605704220770?fields=body,thumbnail_url
