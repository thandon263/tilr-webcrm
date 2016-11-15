// AJAX request to the Random User Generator API.
$(function () {

  // Initializing side bar open to false
  var sideBarOpen = false;
  $('body').bind('keyup', activated);
  $('.tab').bind('click', activated);

  function activated (event) {
    $('.label').text("KEY PRESSED = " + String.fromCharCode(event.keyCode));

    if(event.keyCode == 77 || event.type == "click") {
      $('.menu').toggleClass('open');
      sideBarOpen=!sideBarOpen;
    }
    if(sideBarOpen){
      $('.tab').html('&laquo;');
    };

    $('.label2').text('MENU OPEN: ' + sideBarOpen.toString());
  };

// End of function for menu open (sideBarOpen)

// Search Bar Javascript

          // $('.search-panel .dropdown-menu').find('a').click(function(e) {
          //   e.preventDefault();
          //   var param = $(this).attr("href").replace("#","");
          //   var concept = $(this).text();
          //   $('.search-panel span#search_concept').text(concept);
          //   $('.input-group #search_param').val(param);
          // });

// End of Search Bar

   $.ajax({
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
        console.log(responseData.results[i].picture['thumbnail']);
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
