
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

// $('button.addDay').click(
//     evt => {
//       // Deselect all days


//       // Add a new day


//       // $(`<ol class="current day"><h3><span class=day-head></span><button class=delDay>x</button></h3></ol>`)



//     }
//   )
