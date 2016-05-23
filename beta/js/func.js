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

//This function will switch displays if the screen width is under 800 pixels
//It successfully navigates to the correct page
function verifyDisplay(){
  var path = window.location.pathname;
  var pathShortened = path.substring(path.indexOf("/")+1, path.lastIndexOf("."));
  console.log(pathShortened);
  console.log(path);
  console.log(path.substring(path.indexOf("/")+1, path.lastIndexOf(".")));

  if (screen.width>=768 && pathShortened.substring(pathShortened.length-2, pathShortened.length)=="_m"){
    window.location=pathShortened.substring(0,pathShortened.length-2)+".php";
  }
  if (screen.width<768 && pathShortened.substring(pathShortened.length-2, pathShortened.length)!="_m"){
    var currentPath=window.location.pathname;
    window.location=pathShortened +"_m.php";
  }
}

//Highlights the current page in the navigation bar by checking the
//pathname and adding a class within a switch statement as well as
//removing the class from all other elements (for page changing)
function highlight_header(){
  path = window.location.pathname;
  current_page = window.location.pathname.substr(path.lastIndexOf('/')+1, path.length);
  current_page = current_page.replace('.php','');
  console.log(current_page);

  nav_items = document.getElementsByClassName('nav_li');
  switch(current_page){
    case('index'):
      $(nav_items).removeClass('nav_selected');
      $(nav_items[0]).addClass('nav_selected');
      break;
    case('about'):
      $(nav_items).removeClass('nav_selected');
      $(nav_items[1]).addClass('nav_selected');
      break;
    case('quotes'):
      $(nav_items).removeClass('nav_selected');
      $(nav_items[2]).addClass('nav_selected');
      break;
    case('contact'):
      $(nav_items).removeClass('nav_selected');
      ($nav_items[3]).addClass('nav_selected');
      break;
  }
}

$(document).ready(function() {
  //Verifies screen display
  verifyDisplay();

  //highlights selected page in navigation bar
  highlight_header();

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
      //Quote of the day generator
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
  onLoadRunJSON();
});
