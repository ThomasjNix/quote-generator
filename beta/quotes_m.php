<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/style_mobile.css">
    <link rel="stylesheet" type="text/css" href="css/quotes_m_style.css">
    <title>Quote Generator</title>
</head>

<body>
  <header>
      <?php
      require('includes/navbar_m.php')
       ?>
  </header>

  <h1 class="quote_intro">Below you will find a complete list of all
  quotes for this site.</h1>

  <div class="scroll_quotes">

  </div>

  <?php
  require('includes/footer.php')
   ?>

   <?php
   require('includes/js_includes.php')
    ?>
</body>

</html>
