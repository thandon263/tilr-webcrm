// AJAX request to the Random User Generator API.
$(function () {

    $.ajax({
      url: 'https://randomuser.me/api/?results=10',
      method: 'GET',
      data: {},
      dataType: 'json'
    }).done(function(responseData){
      console.log(responseData);
      $('tbody').html("<tr><td>" + responseData.results[0].name["first"] + "</td><td>" + responseData.results[0].name["last"] + "</td><td>" + responseData.results[0].location["street"] + "</td><td>" + responseData.results[0].dob.split('')[0] + "</td>" + responseData.results[0].location["street"] + "</tr>");
    }).success(function(){
      console.log("Request Complete!!");
    }).always(function(){
      console.log("JSON object is the best response data in Javascript. Easy to manipulate.");
    }); // End of AJAX method


});// End of document ready function
