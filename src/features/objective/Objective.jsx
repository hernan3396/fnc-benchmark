import Axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { objectives, brands, token } from "../../app/constants";
import Thumbnail from "./Thumbnail";

export default function Objective() {
  const [adsData, setAdsData] = useState([]);

  const brandName = useParams().brandName;
  const objectiveName = useParams().objectiveName;

  const objectiveFilter = objectives.filter(
    (objective) => objective.name === objectiveName
  );

  const brandFilter = brands.filter((brand) => brand.name === brandName);

  const fetchAdsData = async () => {
    const response = await Axios.get(
      //get ads by id
      `https://graph.facebook.com/v8.0/act_${brandFilter[0].id}/insights?level=ad&fields=ad_id&filtering=%5B%7Bfield%3A%22objective%22%2C%20operator%3A%22CONTAIN%22%2C%20value%3A%22${objectiveFilter[0].fb_name}%22%7D%5D&time_range=%7B%22since%22%3A%222020-08-01%22%2C%22until%22%3A%222020-09-22%22%7D&access_token=${token}`
    );
    setAdsData(response.data.data);
  };

  useEffect(() => {
    fetchAdsData();
  }, []);

  return (
    <div>
      <ul>
        {adsData.map((ad) => (
          <Thumbnail key={ad.ad_id} adId={ad.ad_id} />
        ))}
      </ul>
    </div>
  );
}
