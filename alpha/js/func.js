/*
  This JS/jQuery code will be responsible for all functionality regarding
  the .JSON list of quotes and sources in the page, including the random quote
  of the day and the quote generator.
*/

//This function is responsible for all of the .JSON functionality.
function onLoadRunJSON(){
  $.getJSON('json/quotes.json', function(data){
    //This part creates the random quote of the day
    var nowDate = new Date();
    var yearStart = new Date(nowDate.getFullYear(), 0, 0);
    var currentDay = Math.round((nowDate-yearStart)/86400000);
    var dateQuoteNum;
    if(currentDay<=data.quotes.length){
      dateQuoteNum = currentDay;
    }else {
      dateQuoteNum = currentDay;
      while(dateQuoteNum > data.quotes.length){
        dateQuoteNum = currentDay-data.quote.length;
      }
    }
      $('.inputQoD').text(data.quotes[dateQuoteNum].quote);
      $('.inputQoDSource').text('Source: ' + data.quotes[dateQuoteNum].source);

    //This part is responsible for populating the select dropdown with
    //possible sources
    var arrayOfSources = [];
    var arrayOfQuotes = [];
    $.each(data.quotes, function(index, value){
      if (!$.inArray(value.source), arrayOfSources){
        arrayOfSources.push(value.source);
      }
    });

    var listOptions = "<option>Any</option>";
    var quote_items = "";
    for (var listLoopCounter = 0; listLoopCounter < arrayOfSources.length; listLoopCounter++){
      if (listOptions.indexOf("<option>" + arrayOfSources[listLoopCounter] + "</option>")===-1){
        listOptions+= "<option>" + arrayOfSources[listLoopCounter] + "</option>";
      }
    }
    $.each(data.quotes, function(index, value){
      if (!$.inArray(value.quote), arrayOfQuotes){
        arrayOfQuotes.push(value.quote);
        quote_items+= "<span>" + value.quote + "  -" + value.source + "</span>";
      }
    });
    $('select').html(listOptions);
    $(".scroll_quotes").append(quote_items);
  });
}

$(document).ready(function() {
  //Button action for selected option
  $('button').on("click", function(){
    $.getJSON('json/quotes.json', function(data){
      SV = $('select :selected').text();
      var selectedArray = [];
      $.each(data.quotes, function(index, value){
          if (!$.inArray(value.quote), selectedArray){
            if(SV!="Any"){
              if (value.source==SV){
                selectedArray.push(value.quote);
              }
            }
            else {
              selectedArray.push(value.quote);
            }
          }
      });
      randomSVSelector = Math.floor(Math.random()*(selectedArray.length));
      var currentQuote = selectedArray[randomSVSelector];
      $(".genQuote").text(currentQuote);
      if(SV==="Any"){
        $.each(data.quotes, function(index, value){
          if (value.quote===currentQuote){
            $(".quoteSource").text(value.source);
              console.log(currentQuote + ":" + value.source);
          }
        });
      }
      else{
        $(".quoteSource").text(SV);
      }
    });
  });

  //This just makes the message from the creator look pretty... :)
    $('.col-3-12').on("mouseenter", function(){
        $(this).css('text-shadow', '0 1em 1.5em lightblue');
    }).on("mouseleave", function(){
        $(this).css('text-shadow', 'none');
  });
  onLoadRunJSON();
});
