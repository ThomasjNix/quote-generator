<html lang="en">
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="css/about_style.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <title>Quote Generator</title>
</head>

<body>
    <header>
        <?php
        require('includes/navbar.php')
         ?>
    </header>

    <div class="main_site_back">
      <div class="about_box">
        <h1 class="about_title">About this site</h1>
        <p>This is a basic site for generating quotes from some famous minds.
          This site is a project by an aspiring web developer based out of North Carolina.
          Although this is a simple site, it is the first to come out of this
          early developer. I hope you enjoy the quotes you find on this site
          and I will continue to update it regularly.</p>
          <span>Find me on</span>
          <div class="connect_buttons">
            <a href="https://github.com/ThomasjNix" target="_blank"><img src="img/github_logo.png" alt="github_button"/></a>
            <a href="https://www.linkedin.com/in/thomasjnix" target="_blank"><img src="img/linkedin_logo.png" alt="github_button"/></a>
          </div>
      </div>

      <?php
      require('includes/footer.php')
      ?>

    <script type="text/javascript" src="js/jquery-2.2.2.min.js"></script>
    <script type="text/javascript" src="js/func.js"></script>
    <script type="text/javascript" src="json/quotes.JSON"></script>

</body>
