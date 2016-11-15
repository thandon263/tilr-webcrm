// AJAX request to the Random User Generator API.
$(function () {

  var refresh = $.ajax({
                    url: 'https://randomuser.me/api/?results=10',
                    method: 'GET',
                    data: {},
                    dataType: 'json'
                  }).done(function(responseData){
                    // Variable to stored data after looping through responseData
                    var contact_details = '';
                    // log results on the console
                    console.log(responseData);
                    // Loop through responseData and push into contact_details
                    $.each(responseData.results, function(i, item) {

                      contact_details += "<tr><td>" + responseData.results[i].name["first"] + "</td><td>" + responseData.results[i].name["last"] + "</td><td>" + responseData.results[i].location["street"] + "</td><td>" + responseData.results[i].gender + "</td></tr>";

                    });

                    $('tbody').append(contact_details);

                  }).success(function(){
                    console.log("Request Complete!!");
                  }).always(function(){
                    console.log("JSON object is the best response data in Javascript. Easy to manipulate.");
                  }).error(function() {

                    console.alert("Request Failed!!")

            }); // End of AJAX method

});// End of document ready function
