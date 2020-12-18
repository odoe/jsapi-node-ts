import esriConfig from "@arcgis/core/config";
import esriRequest from "@arcgis/core/request";

esriConfig.request.useIdentity = false;

const url = "https://www.arcgis.com/sharing/rest";

esriRequest(url, {
  query: {
    f: "json",
  },
})
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
