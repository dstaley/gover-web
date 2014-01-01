var base_url = "http://localhost:8080/api/%@";

function getJSON(url){
  return window.$.getJSON(base_url.fmt(url));
}

export default getJSON;