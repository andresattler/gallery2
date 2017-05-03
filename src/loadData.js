export default (title) => {
  return fetch(`./pics/${title}/data.json`)
    .then((resp) => resp.json())
    .then(function(data) {
      console.log("h0");
      return data;
    })
    .catch(function(error){
      console.log(error);
    })
}
