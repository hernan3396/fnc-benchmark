import api from "../../app/api";
import * as constants from "../../app/constants";

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./HomePost.module.css";

export default function PostHome({ data }) {
  /*  const fetchThumbnail = async () => {
    const token = constants.brands.find(
      (brand) => brand.id === data.account_id
    );

    api
      .get(`${data.ad_id}?fields=creative&access_token=${token.token}`)
      .then((response) => {
        api
          .get(
            `${response.data.creative.id}?fields=thumbnail_url&thumbnail_height=150&thumbnail_width=150&access_token=${token.token}`
          )
          .then((response) => {
            setThumbnail(response.data.thumbnail_url);
          });
      });
  };

  useEffect(() => {
    fetchThumbnail();
  }, []);
*/

  return (
    <li className={styles.postPreview}>
      <img src={data.thumbnail} alt="" />
      <span className={styles.postPreviewText}>
        Impresiones: {data.impressions} / Clicks : {data.clicks} / Objetivo :{" "}
        {data.objective}
      </span>
    </li>
  );
}
