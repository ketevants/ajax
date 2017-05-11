
function createDays(num){
$.ajax({
  method: 'POST',
  url: '/api/days',
  data: {
    number: num
  }
})
.then(function (responseData) {
  console.log(responseData)
})
.catch(function (errorObj) {
  // some code to run if the request errors out
});

}



// $('button.addDay').click(
//     evt => {
//       // Deselect all days


//       // Add a new day


//       // $(`<ol class="current day"><h3><span class=day-head></span><button class=delDay>x</button></h3></ol>`)



//     }
//   )
