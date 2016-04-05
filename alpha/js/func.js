/*
Notes about jQuery:

$ is shorthand for jQuery (ex: $('#id') = jQuery('#id')
document ready statement: $(document).ready() ---> everything inside this is acted upon when the document is loaded

Basic selectors: $('p').css('border', '4px solid red');

Parent-child selector $('div p').whatever

.animate(any css attribute)
    ex: .animate({height: '200px'}, 500);

    ///////////
    index filters
    ==============
    :first :last :gt(2), etc.

    ////////////
    relationship filters
    ====================
    :has(span) <- only selects elements with a child of span

    /////////////
    attribute filters
    =================
    p[class='whatver']
    name^="wha"" <--- all with name starting with wha
    name$= is string that ends with

 */

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
});
