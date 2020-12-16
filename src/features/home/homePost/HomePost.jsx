import React from "react";
import styles from "./HomePost.module.css";

export default function PostHome({ ad }) {
  /* Esto esta por si me tengo que acordar de algo 
   const fetchThumbnail = async () => {
    const token = constants.brands.find(
      (brand) => brand.id === ad.account_id
    );

    api
      .get(`${ad.ad_id}?fields=creative&access_token=${token.token}`)
      .then((response) => {
        api
          .get(
            `${response.ad.creative.id}?fields=thumbnail_url&thumbnail_height=150&thumbnail_width=150&access_token=${token.token}`
          )
          .then((response) => {
            setThumbnail(response.ad.thumbnail_url);
          });
      });
  };

  useEffect(() => {
    fetchThumbnail();
  }, []);
*/

  return (
    <li className={styles.postPreview}>
      <img src={ad.thumbnail} alt="" />
      <span className={styles.postPreviewText}>
        Impresiones: {ad.impressions} / Clicks : {ad.clicks} / Objetivo :{" "}
        {ad.objective}
      </span>
    </li>
  );
}
