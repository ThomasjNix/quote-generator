<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/style_mobile.css">
    <link rel="stylesheet" type="text/css" href="css/contact_m_style.css">
    <title>Quote Generator</title>
</head>

<body>
  <header>
      <?php
      require('includes/navbar_m.php')
       ?>
  </header>

  <div class="contact_area">
    <h2>Contact</h2>
      <div class="forms">
      <label for="name">Name:</label>
      <input name="name" class="contact_input"/>

      <label for="email">Email:</label>
      <input name="email" class="contact_input"/>

      <label for="description">Description:</label>
      <textarea name="description" class="contact_input description"></textarea>
      </div>

      <button type="submit">Submit</button>
  </div>

  <?php
    require('includes/footer.php');
   ?>

   <?php
     require('includes/js_includes.php');
    ?>
</body>

</html>
