$(document).ready(function() {
  onLoadRunJSON();
});

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
