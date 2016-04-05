/*
  This JS/jQuery code will be responsible for all functionality regarding
  the .JSON list of quotes and sources in the page, including the random quote
  of the day and the quote generator.
*/

$(document).ready(function() {
  //Button action for selected option
  $(document).on('click', '.submitbuttonSpan', function(){
    SV = $('select :selected').text();
    alert('Selected item: ' + SV);
    });

    //Alert the user of site in development
    alert("Thank you for visiting! Please note this site is still under development and may" +
        " have some bugs. Rest assured a lot of coffee is going in to fixing those bugs! I hope you enjoy" +
        " the site and look forward to future development.");

    //This just makes the message from the creator look pretty... :)
      $('.col-3-12').on("mouseenter", function(){
          $(this).css('text-shadow', '0 1em 1.5em lightblue');
      }).on("mouseleave", function(){
          $(this).css('text-shadow', 'none');
    });

    onLoadRunJSON();
});

/*
  This function is responsible for all of the .JSON functionality.
*/
function onLoadRunJSON(){
  $.getJSON('json/quotes.json', function(data){
    //This part creates the random quote of the day
      var randomNum = Math.floor(Math.random()*(data.quotes.length));
      console.log(data.quotes.length);
      console.log(data.quotes[randomNum].quote + " source: " + data.quotes[randomNum].source);
      $('.inputQoD').text(data.quotes[randomNum].quote);
      $('.inputQoDSource').text('Source: ' + data.quotes[randomNum].source);

    //This part is responsible for populating the select dropdown with
    //possible sources
    var arrayOfSources = [];
    $.each(data.quotes, function(index, value){
      if (!$.inArray(value.source), arrayOfSources){
        arrayOfSources.push(value.source);
      }
    });

    var listOptions = "<option>Any</option>";
    for (var i = 0; i < arrayOfSources.length; i++){
      if (listOptions.indexOf("<option>" + arrayOfSources[i] + "</option>")===-1){
        listOptions+= "<option>" + arrayOfSources[i] + "</option>";
      }
    }
    $('select').html(listOptions);
  });
}
