$(document).ready(function() {
  $(document).on('click', '.submitbuttonSpan', function(){
    SV = $('select :selected').text();
    alert('Selected item: ' + SV);
    });

    alert("Thank you for visiting! Please note this site is still under development and may" +
        " have some bugs. Rest assured a lot of coffee is going in to fixing those bugs! I hope you enjoy" +
        " the site and look forward to future development.");

      $('.col-3-12').on("mouseenter", function(){
          $(this).css('text-shadow', '0 1em 1.5em lightblue');
      }).on("mouseleave", function(){
          $(this).css('text-shadow', 'none');
    });

    $.getJSON('json/quotes.json', function(data){
        var randomNum = Math.floor(Math.random()*(data.quotes.length));
        console.log(randomNum);
        console.log(data.quotes[randomNum].quote + " source: " + data.quotes[randomNum].source);
        $('.inputQoD').text(data.quotes[randomNum].quote);
        $('.inputQoDSource').text('Source: ' + data.quotes[randomNum].source);

        $('select option').each(function(index){
          $(this).text(data.quotes[index].source);
        });
    });
});

$(document).load(function(){});
