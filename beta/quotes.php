<html lang="en">
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="css/quotes_style.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <title>Quote Generator</title>
</head>

<body>
  <header>
      <?php
        require('includes/navbar.php');
        ?>
  </header>

    <div class="main_site_back">

      <h1 class="quote_intro">Below you will find a complete list of all
      quotes for this site.</h1>

      <div class="scroll_quotes">

      </div>

      <?php
      require('includes/footer.php')
      ?>

      <script type="text/javascript" src="js/jquery-2.2.2.min.js"></script>
      <script type="text/javascript" src="js/func.js"></script>
      <script type="text/javascript" src="json/quotes.JSON"></script>
</body>
