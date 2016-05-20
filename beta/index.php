<html lang="en">
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="css/index_style.css">
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
        <div class="col-3-12">
            <h2>A message from the creator</h2>
            <p>This site was created by an aspiring web designer. This is the alpha version of my first real site.
            Surely there will be some kinks to work out, but thus far I am proud of my product and I hope you enjoy it too :)
            A mobile version of the site is under development.</p>
        </div>

        <div class="col-6-12">
            <div class="row-1-2">
                <span>Select an option:</span>
                <!--A dropdown list will go here-->
                <select name="select">
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
                <button class="cd" type="submit"><span class="submitbuttonSpan">Submit</span></button>
            </div>

            <div class="row-2-2">
                <span>Quote:</span>
                <blockquote class="genQuote"></blockquote>
                <span class="quoteSourceTitle">Source of quote:</span>
                <span class="quoteSource" id="quoter"></span>

            </div>
        </div>

        <div class="col-3-12">
            <!--This area will have something in it probably-->
        </div>

        <?php
        require('includes/footer.php')
        ?>

    </div>
    <script type="text/javascript" src="js/jquery-2.2.2.min.js"></script>
    <script type="text/javascript" src="js/func.js"></script>
    <script type="text/javascript" src="json/quotes.JSON"></script>
</body>
</html>
