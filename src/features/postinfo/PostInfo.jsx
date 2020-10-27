import Axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Iframe from "react-iframe";

import { useParams } from "react-router-dom";
import { token } from "../../app/constants";

function PostInfo() {
  const creativeId = useParams().creativeId;

  const [iframeArray, setIframeArray] = useState([]);

  const fetchPostData = async () => {
    //fetch post iframe
    const response = await Axios.get(
      `https://graph.facebook.com/v8.0/${creativeId}/previews?ad_format=DESKTOP_FEED_STANDARD&access_token=${token}`
    );

    //split ifrme url from the whole string
    const iframeBody = response.data.data[0].body;
    const iframeString = iframeBody.split(`"`);
    const iframeArray = iframeString[1].split(`&amp;t=`);
    setIframeArray(iframeArray);

    //"https://www.facebook.com/ads/api/preview_iframe.php?d=AQKoXwyrw7nXPp0Je-_zfl19231-6iLGGhMXhhUPEPcjgk0F1HwKF_h13LnevXy49OQM7IXtJMU5DnmtrA4HR-NI32VFW034S26kA_mwE9lQ_5V6tnDI9_ngHnTkcK5aXqN9Z9sTNmQsIUbMQ6BJfeQdrKgMIDpV4l0sh-FlHKmGneCHhKi0ocjZlypip0pXOXM3J_V3JL-b9eMh0fjfOu1-32NJ0xEUTsp7IehgEuyl9RkcMd_pqrqXGARKY-SFanI30Yo_RafpvNKv4djHQmnu2_DSl3lcJHKKQdX0vT3wEMyPhmjbA_RiHEM0dFL0uMSnWn47bCt-WpkI_hpgfcwt&amp;t=AQLyT_lrZg4rXNiFB3M"
    //"https://www.facebook.com/ads/api/preview_iframe.php?d=AQK8HK-EE4BM83fQNzMk5uUqP2ryisnfF9R6kkpURBxfYlnA0HghSEAeZ2pYI8vMItRy7_Cc7DKPRkqoEiuq_KI4lnUDM8V0qCCbhDQuoPRTy5B9or6WMguV8jSg14_LB5fSSg6ci0PW8MFlmhonAaWswwuSIPOecVNQy_MyPqhb_UlePSTv8GJp_cKvcKISWyj1iOsYTUuBzu2cpQw9u7jiaSmf8sI9W_6LvbfjXAK-5ZuEAvLfuLxfisYlWGA1SVy5EDmD3Yc7faBRUQIg6DcOsU2QjWqr53s4WCJjRX1WwajRFzXX-sdfXqYeAXA7UHk5IaEE4fIDjUjqCGPQTlxY"
  };

  useEffect(() => {
    fetchPostData();
  }, []);

  console.log(`${iframeArray[0]}&amp;t=${iframeArray[1]}`);
  //el problema es que react no renderiza el &amp y se caga todo cuando lo pones entre {}

  return (
    <>
      <iframe
        src="https://www.facebook.com/ads/api/preview_iframe.php?d=AQIJLENpBCivF0ZJXtr6OyfihSoiklZcqf9CuVFmH9erMVZ_15PsJkqsUu4hwRQTvg6dlFEux0eIgXdwecX5cf-0ZVLEj3l5QImX1Zn0mMDVLIjiRHWkO2n5MjjFavtEDAYm4sDhpHTKDNRYhInIT4eF_4gOyVydFYNZ5wbeECSJIPvTAxVzTJPnpPCX-vjruUmtC3tcHOD5rzp6SBod_3pQwKRjguWqlka6OiAs0CJb-IwjwGmOHK_IGFa0J4DMP3jcv0H1nSPABSAiXwmRmqab8WBXUgDrs3IyOA_6HjhSsbBx1v28cSHefOsldHZ6_thWL8uRSVvByrk9l_1S2L5-&amp;t=AQKAGDjy2RFjZ_ZYLAg"
        width="540"
        height="690"
        scrolling="yes"
      ></iframe>
    </>
  );
}

export default PostInfo;
