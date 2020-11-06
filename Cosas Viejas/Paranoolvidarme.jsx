const test = await Axios.get(
  "https://graph.facebook.com/v8.0/23845572657640668?fields=creative&access_token=EAAKoCACPb94BALeSYxtkspQi6OiTtzWI3LL6ZAbVrrFv0OZAtkhFja7c2UZCX1lH2tmfu7LWcdslndMWEek9y1HdpSrFHIZCrL2FIzYXDlB7SkqaMyML6xYWz843oRYqtbwHSM2dly2Id4Uyizdejn7aTHWW2NZAeWuLrDUzHWtnLwsOZAIXDONj2ZAL6TiIxZBPSJUHvckuZCQZDZD"
);

const imagenTest = await Axios.get(
  "https://graph.facebook.com/v8.0/23845572686630668/previews?ad_format=DESKTOP_FEED_STANDARD&access_token=EAAKoCACPb94BALeSYxtkspQi6OiTtzWI3LL6ZAbVrrFv0OZAtkhFja7c2UZCX1lH2tmfu7LWcdslndMWEek9y1HdpSrFHIZCrL2FIzYXDlB7SkqaMyML6xYWz843oRYqtbwHSM2dly2Id4Uyizdejn7aTHWW2NZAeWuLrDUzHWtnLwsOZAIXDONj2ZAL6TiIxZBPSJUHvckuZCQZDZD"
);

setPrueba(imagenTest.data.data[0].body);

const [actData, setActData] = useState([]);
const fetchData = async () => {
  const response = await Axios.get(
    /* Esta es la consulta que necesitamos para el chequeo, cambiale los valores a fields por los de https://developers.facebook.com/docs/marketing-api/reference/ad-account y una vez tengas todos los conjuntos tenes que hacer una consulta para cada uno :C  y despues de eso es como vimos por teams*/
    `https://graph.facebook.com/v8.0/act_350247045784407?fields=name%2Cads&access_token=${constants.token}`
  );

  setActData(response.data.ads.data);
};
