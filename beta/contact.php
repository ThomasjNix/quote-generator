<html lang="en">
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="css/contact_style.css">
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

      <div class="contact_area">
        <h2>Contact</h2>


          <form action="contact.php" method="POST">
            <label for="name">Name:</label>
            <input name="name" class="contact_input"/>

            <label for="email">Email:</label>
            <input name="email" class="contact_input"/>

            <label for="description">Description:</label>
            <textarea name="description" class="contact_input description"></textarea>


            <button type="submit">Submit</button>
          </form>

          <?php
          if (isset($_POST['name']) &&
          isset($_POST['email']) &&
          isset($_POST['description']))
          {
            $contact_name = $_POST['name'];
            $contact_email = $_POST['email'];
            $contact_desc = $_POST['description'];

            if (!empty($contact_name) && !empty($contact_email) &&
            !empty($contact_desc)){
              echo "</br><strong>Form successfully submitted<strong>";
            }else {
              echo "<p><strong>All fields required<strong></p>";
            }
          }
           ?>
      </div>


      <?php
      require('includes/footer.php')
      ?>

      <?php
      require('includes/js_includes.php')
      ?>
</body>
