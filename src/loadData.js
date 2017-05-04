export default (title) => {
  return fetch(`./pics/${title}/data.json`)
    .then((resp) => resp.json())
    .then(function(data) {
      return data;
    })
    .catch(function(error){
      console.log(error);
    })
}
