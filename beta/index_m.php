<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/style_mobile.css">
    <link rel="stylesheet" type="text/css" href="css/index_m_style.css">
    <title>Quote Generator</title>
</head>

<body>
  <header>
      <?php
      require('includes/navbar_m.php')
       ?>
  </header>
    <div class="message">
      <h2>A message from the creator</h2>
      <p>This site was created by an aspiring web designer. This is the alpha version of my first real site.
      Surely there will be some kinks to work out, but thus far I am proud of my product and I hope you enjoy it too :)
      A mobile version of the site is under development.</p>
    </div>

  <div class="quote_items">
    <span>Select an option:</span>
    <!--A dropdown list will go here-->
    <select name="select">
        <option></option>
        <option></option>
        <option></option>
        <option></option>
    </select>
    <button class="submitbutton" type="submit"><span class="submitbuttonSpan">Submit</span></button>

    <span class="quote_span">Quote:</span>
    <blockquote class="genQuote"></blockquote>
    <span class="quoteSourceSpan">Source of quote:</span>
    <span class="quoteSource" id="quoter"></span>
  </div>

    <?php
    require('includes/footer.php')
     ?>

   <?php
   require('includes/js_includes.php')
    ?>
</body>
</html>
