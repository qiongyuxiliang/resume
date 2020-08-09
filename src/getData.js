
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
axios.get('./experience.json')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

