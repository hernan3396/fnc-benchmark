import api from "../../app/api";
import * as constants from "../../app/constants";

import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function PostHome({ data }) {
  const [thumbnail, setThumbnail] = useState("");

  const fetchThumbnail = async () => {
    api
      .get(`${data.ad_id}?fields=creative&access_token=${constants.token}`)
      .then((response) => {
        api
          .get(
            `${response.data.creative.id}?fields=thumbnail_url&thumbnail_height=150&thumbnail_width=150&access_token=${constants.token}`
          )
          .then((response) => {
            setThumbnail(response.data.thumbnail_url);
          });
      });
  };

  useEffect(() => {
    fetchThumbnail();
  }, []);

  return (
    <li>
      <img src={thumbnail} alt="" />
      Impresiones: {data.impressions} / Clicks : {data.clicks} / Importe gastado
      : ${data.spend}
    </li>
  );
}
