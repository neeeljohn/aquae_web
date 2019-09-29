<?php 
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" type="image/png" href="../pages/profile/Logo.png" />
    <title>Login Form</title>

    <!-- Font Icon -->
    <link rel="stylesheet" href="fonts/material-icon/css/material-design-iconic-font.min.css">


    <!-- Main css -->
    <link rel="stylesheet" href="css/style.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script src="https://www.gstatic.com/firebasejs/6.2.3/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/6.2.3/firebase-database.js"></script>
    <script src="https://www.gstatic.com/firebasejs/6.2.3/firebase-storage.js"></script>
    <script type="text/javascript" src="..\config.js"></script>
     <script type="text/javascript">
        if (sessionStorage.getItem("client_id") !== null) {
            window.location = "../pages/index.php";
        }
    </script>

   <!--  <script type="text/javascript" src="..\jquery.session.js"></script>
 -->

</head>
<body>

    <div class="main">

        <section class="signup">
            <!-- <img src="images/signup-bg.jpg" alt=""> -->
            <div class="container">
                <div class="signup-content">
                    
                        <h2 class="form-title" id="login">LOGIN</h2>
                        <div class="form-group">
                            <input type="text" class="form-input" name="name" id="uname" placeholder="Email"/>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-input" name="password" id="pwords" placeholder="Password"/>
                            <span toggle="#password"></span>
                        </div>
                       <!--  <div class="form-group">
                            <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                            <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                        </div> -->
                        <div class="form-group">
                            <button type="submit" onclick="acct()" name="submit" id="submit" class="form-submit" value="Login">Login</button> 
                        </div>
                    
                    <p class="loginhere">
                        Don't have an account ? <a href="..\register.php" class="loginhere-link">Sign Up</a>
                    </p>
                </div>
            </div>
        </section>

    </div>

    <!-- JS -->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="js/main.js"></script>
   
</body><!-- This templates was made by Colorlib (https://colorlib.com) -->
</html>