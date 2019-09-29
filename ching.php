<!DOCTYPE html>
<html>
  <head>
  <title>Registration Form - Aquae</title>
  <link rel="stylesheet" type="text/css" href="css/styles.css">
  <link rel="stylesheet" href="bootstrap.min.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  <link href="css/font-awesome.min.css" rel="stylesheet">
  <link href="fonts/icon-7-stroke/css/pe-icon-7-stroke.css" rel="stylesheet">
  <link href="css/animate.css" rel="stylesheet" media="screen">
  <link href="css/owl.theme.css" rel="stylesheet">
  <link href="css/owl.carousel.css" rel="stylesheet">
  <link href="css/styles.css" rel="stylesheet" media="screen">   
  
  <!-- Google Fonts --> 
  <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet' type='text/css'>
  <link href='http://fonts.googleapis.com/css?family=Alegreya+Sans:100,300,400,700' rel='stylesheet' type='text/css'>
  <!-- Font Awesome -->
  <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">

  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

  <script src="https://www.gstatic.com/firebasejs/6.2.3/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/6.2.3/firebase-database.js"></script>
  <script src="https://www.gstatic.com/firebasejs/6.2.3/firebase-storage.js"></script>
  <script type="text/javascript" src="config.js"></script>
 
<style type="text/css">
  .required-field::after{
    content:"*";
    color: red;
  }
</style>
</head>
<a href="register.php">
<img src="logo/withname.png" style="margin-left: 105px;">
</a>
<div id="menu">
  <nav class="navbar-wrapper navbar-default w3-blue"  style="height: 50px" role="navigation">
    <div class="container">
        <div class="navbar-header">
        </div>
    </div>
  </nav>
</div>
<body>
  <?php 
    //if(isset($_GET["success"])) 
    //{
    ?>
      <!-- <script type="text/javascript">
        swal({
            title: "Registered Successfuly!",
            text: "redirecting to login...",
            icon: "success",
            timer: 4000,
          }).then(function(){
            window.location = "login.php";
          });
      </script> -->
    <?php
    //}
  ?>
  <div class="container" style="margin-top: 50px">
      <form method="post"  action="register.php" name="myform" class="form-group" enctype="multipart/form-data">
       
    <!-- display validation errors here-->
      
          <?php 
           //include('errors.php');
          ?>
          

        <div style="opacity: 1">   
         <div>
            <h2>Create an Account &nbsp; <small style="color:skyblue">(Create account in seconds...)</small></h2>
          </div>   
  	     <div class="row">
           <div class="col">
                    <label for="cname" class="required-field"><b>Company Name</b></label>
                    <input type="text" id="cname" class="form-control" name="company" style="height: 40px;" value="">
                    <span id="errCompanyName" style="font-size: 12px; font-weight: bold; color: red;"></span>
            </div>
          </div>

          <div class="row">
              <div class="col">
                <label for="email" class="required-field"><b>Email</b></label>
                <input type="email" id="email" class="form-control" name="email" style="height: 40px" value="">
                <span id="errEmail" style="font-size: 12px; font-weight: bold; color: red;"></span>
             </div>
            </div>              
              <div class="row">

             <!-- <div class="col-md-6"> 
      	       <label for="username" class="required-field"><b>Username</b></label>
      	       <input type="text" id="uname" class="form-control" name="username" style="height: 40px" value="">
             </div>	 --> 


        	   <div class="col-md-6">
        	     <label for="pwd" class="required-field"><b>Password</b></label>
        	     <input type="password" id="pword" class="form-control" name="password_1" style="height: 40px">
               <span id="errPass1" style="font-size: 12px; font-weight: bold; color: red;"></span>
        	   </div>
        	   <div class="col-md-6">
        	     <label for="confirmpwd" class="required-field"><b>Confirm password</b></label>
        	     <input type="password" id="cpword" class="form-control" name="password_2" style="height: 40px" >
               <span id="errPass2" style="font-size: 12px; font-weight: bold; color: red;"></span>
        	   </div> 
             </div>
           </div>

             <div class="row">
              <div class="col">
               <label for="address" class="required-field"><b>Address</b><small> (Please specify full address)</small></label>
               <input type="text" id="addr" class="form-control"  name="addr" style="height: 40px" value="">
               <span id="errAddress" style="font-size: 12px; font-weight: bold; color: red;"></span>
              </div>
            </div>
             <div class="row">
              <div class="col-md-6">
               <label for="contact" class="required-field"><b>Contact No.</b></label>
               <input type="text" id="cnum" class="form-control"  style="height: 40px" name="cont_num" value="">
               <span id="errContact" style="font-size: 12px; font-weight: bold; color: red;"></span>
              </div>

              <div class="col-md-6">
               <label for="contact" class="required-field"><b>Business Permit, H2O Accredited, Store</b></label>
               <input type="file" id="files" accept='image/*' name="files[]" multiple>
               <span id="errBP" style="font-size: 12px; font-weight: bold; color: red;"></span>
              </div>

             <!--   <div class="col-4">
                <input type="file" class="custom-file-input" id="customFile" name="filename">
                <label class="custom-file-label" for="customFile" style="width: 50%;">Choose file</label>
              </div> -->

              <div class="col-md-12" style="text-align: center; margin-top: 5px; margin-bottom: 50px;">
               <button type="button" id="submit" class="btn btn-primary" style="height: 55px; width: 100%" name="reg_clients" onclick="createAccount()"><b>Create Account</b></button>
              
                Already a member? <a href="login.php"> Sign in</a>
                
            </div>
        </div>
      </div> 
  </form>
  </div>

  
<!-- <script>
  $("#submit").click(function() {

    // if($("#fname").val() == "" || $("#lname").val() == "" || $("#uname").val() == "" || $("#pword").val() == "" || $("#cpword").val() == "" || $("#email").val() == "" || $("#cname").val() == "" || $("#addr").val() == "" || $("#cnum").val() == "") {

    //   swal({
    //       title: "Something is missing!",
    //       text: "Please don't leave it blank",
    //       icon: "warning",
    //       button: "Okay"
    //     });
    // }

  });

  // var btn = document.getElementById('myBtn');
  // btn.addEventListener('click', function() {
  // document.location.href = 'login.php';
// });
</script> -->

  </body>
</html>