
function createDay(num) {
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
    throw new Error();
  });
}

function updateDay(dayIdx, dataId, dataType) {
  $.ajax({
    method: 'POST',
    url: `/api/days/${dayIdx}/${dataType}`,
    data: {
      dataId: dataId
    }
  })
  .then(function(responseData) {
    console.log('UPDATED', responseData);
  })
  .catch(function(errorObj) {
    throw new Error('Could not update day');
  })
}

function numberDays() {
    $('.day').each((index, day) =>
      $(day).find('.day-head').text(`day ${index + 1}`)
    )
  }

function populateDays(){
   $('.day.current').removeClass('current')
   // Add a new day
      $('.addDay').before(
        $(`<ol class="current day"><h3><span class=day-head></span><button class=delDay>x</button></h3></ol>`))
      numberDays()
      lastDay++
      currentDay = lastDay;
     }



function getDays(){
  $.ajax({
    method: 'GET',
    url: '/api/days'
  })
  .then(function(days){
    console.log('days ',days)
    days.forEach(function(){
 populateDays()

  console.log(lastDay)
  })
 })
  .catch(function(err){
    throw new Error ("did not get days!!")
  });
}

function deleteDay(dayIdx){
  $.ajax({
    method: 'DELETE',
    url: `/api/days/${dayIdx}`
  })
  .then(function(){
    console.log(`deleted  ${dayIdx}`)
  })
  .catch(function(err){
    throw new Error("could not delete")
  })
}

// $('button.addDay').click(
//     evt => {
//       // Deselect all days


//       // Add a new day


//       // $(`<ol class="current day"><h3><span class=day-head></span><button class=delDay>x</button></h3></ol>`)



//     }
//   )
