<!-- <?php include('server.php'); ?> -->
<!-- <?php 
 if(isset($_SESSION['id'])) {
    header('location:pages/index.php');
 }
 ?> -->
<!DOCTYPE html>
<html>
<head>
  <title>Login-Aquae</title>
 <!--  <link rel="stylesheet" type="text/css" href="css/style.css">
  <link rel="stylesheet" type="text/css" href="main"> -->
  <link rel="stylesheet" type="text/css" href="w3.css">
  <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  <link href="css/font-awesome.min.css" rel="stylesheet">
  <link href="fonts/icon-7-stroke/css/pe-icon-7-stroke.css" rel="stylesheet">
  <link href="css/animate.css" rel="stylesheet" media="screen">
  <link href="css/owl.theme.css" rel="stylesheet">
  <link href="css/owl.carousel.css" rel="stylesheet">
  <link href="css/styles.css" rel="stylesheet" media="screen">    
  <!-- Google Fonts --> 
  <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet' type='text/css'>
  <link href='http://fonts.googleapis.com/css?family=Alegreya+Sans:100,300,400,700' rel='stylesheet' type='text/css'>

 <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <script src="https://www.gstatic.com/firebasejs/6.2.3/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/6.2.3/firebase-database.js"></script>
  <script src="https://www.gstatic.com/firebasejs/6.2.3/firebase-storage.js"></script>
  <script type="text/javascript" src="config.js"></script>
  <!-- Font Awesome -->
  <!-- <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet"> -->
  
  <style type="text/css">
    .modal-content{
      background-color: #4ECDC4;
    }
    .btn-link{
      color:white;
    }
    .modal-heading h2{
      color:#ffffff;
    }
    .signup{
      color:white;
    }

  </style>
</head>
<img src="logo/withname.png" style="margin-left: 105px;">
<div id="menu">
  <nav class="navbar-wrapper navbar-default"  style="height: 50px" role="navigation">
    <div class="container">
        <div class="navbar-header">
        </div>
    </div>
  </nav>
</div>
<!--NAVBAR-->
<body>

   <!-- style="background: url() no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;" -->
  <!-- <?php
    $_SESSION['username'] = $username;
    $_SESSION['success'];
  ?> -->
  <!-- <script type="text/javascript">
    if(uname == "admin" && pwords == "12345678"){
    window.location("Dashio/basic_table.php");
  }
  </script> -->
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-heading">
        <h2 class="text-center">Login</h2>
          <!--  <?php 
             include('errors.php');
           ?> -->
      </div>
      <hr />
      <!--  <?php 
          if(isset($_POST['login'])) {

            if($_POST['username'] == "admin" && $_POST['password'] == "1234") {
              ?>
                <script>  window.location = "Dashio/basic_table.php"; </script>
              <?php
            }
          }
         ?> -->
      <form method="post" action="login.php">
      <div class="modal-body">    
        <form action="" role="form">
          <div class="form-group">    
            <div class="input-group">
              <span class="input-group-addon">
              <span class="glyphicon glyphicon-user"></span>
              </span>
              <input type="text" class="form-control" placeholder="Username" name="username" id="uname" data-toggle="tooltip"/>
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon">
              <span class="glyphicon glyphicon-lock"></span>
              </span>
              <input type="password" class="form-control" placeholder="Password" name="password" id="pwords" />

            </div>

          </div>

          <div class="form-group text-center">
            <a href="index.php"></a>
            <button type="button" onclick="acct()"  class="btn btn-primary btn-lg" name="login">Login</button>
          </div>
          <p style="margin-left: 15%">
              Not yet a member?<a href="register.php" class="signup"> Sign up</a>
          </p>

        </form>
        
       
      </div>
    </div>
  </div>

<!--   <script>
// Check browser support
if (typeof(Storage) !== "undefined") {
  // Store
  sessionStorage.setItem("lastname", "Smith");
  // Retrieve
  document.getElementById("result").innerHTML = sessionStorage.getItem("lastname");
} else {
  document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
</script> -->
<!--   <script type="text/javascript">
    if(status == "activate"){
      window.location("pages/index.php");
    }
  </script> -->

</body>
</html>