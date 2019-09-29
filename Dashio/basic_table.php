  <!-- <?php 

        require 'Phpmailer/PHPMailerAutoload.php';


          $mail = new PHPMailer();

          $mail->isSMTP();

          $mail->Host = 'smtp.gmail.com';
          $mail->Port = 587;
          $mail->SMTPAuth = true;
          $mail->SMTPSecure = 'tls';


          
          $mail->Username = 'neljohnbayalas18@gmail.com';
          $mail->Password = 'bayalasneljohn18';
            

          $mail->setFrom('neljohnbayalas18@gmail.com', 'Aquae');
          $mail->addAddress('rosenbauer_9@yahoo.com');
          $mail->addReplyTo('neljohnbayalas18@gmail.com');

          $mail->isHTML(true);
          $mail->Subject = 'Aquae: A Mobile App for Water Refilling & Delivery Services';
          $mail->Body = 'chingchong';
        
          $mail->send();
            
      ?> -->
      

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="">
  <meta name="author" content="Dashboard">
  <meta name="keyword" content="Dashboard, Bootstrap, Admin, Template, Theme, Responsive, Fluid, Retina">
  <title>Clients - Aquae</title>

  <!-- Favicons -->
  <link href="img/favicon.png" rel="icon">
  <link href="img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Bootstrap core CSS -->
  <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <!--external css-->
  <link href="lib/font-awesome/css/font-awesome.css" rel="stylesheet" />
  <!-- Custom styles for this template -->
  <link href="css/style.css" rel="stylesheet">
  <link href="css/style-responsive.css" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="../image.css">
  <link href="css/bootstraps.css" rel="stylesheet" id="bootstrap-css">
  <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

  
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

 <!--  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script> -->

  <script src="https://www.gstatic.com/firebasejs/6.2.3/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/6.2.3/firebase-database.js"></script>
  <script src="https://www.gstatic.com/firebasejs/6.2.3/firebase-storage.js"></script>
  <script src="lib/jquery/jquery.min.js"></script>
  <script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="..\config.js"></script>


  
  <style type="text/css">

    .checked {
      color: orange;
    }
         input[type=checkbox] {
        display: none;
      }

      input[type=checkbox] + label {
        display: inline-block;
        background-color: #DB574D;
        color: white;
        font-family: sans-serif;
        font-size: 14px;
        font-weight: bold;
        height: 20px;
        line-height: 20px;
        position: relative;
        text-transform: uppercase;
        width: 230px;
      }

      input[type=checkbox] + label,
      input[type=checkbox] + label i {
        -webkit-transition: all 200ms ease;
        -moz-transition: all 200ms ease;
        -o-transition: all 200ms ease;
        transition: all 200ms ease;
      }

      input[type=checkbox]:checked + label {
        background-color: #4ECDC4;
      }

      input[type=checkbox] + label:before,
      input[type=checkbox] + label:after,
      input[type=checkbox] + label i {
        width: 50%;
        display: inline-block;
        height: 100%;
        text-align: center;
      }

      input[type=checkbox] + label:before {
        content: attr(data-text-true);
      }

      input[type=checkbox] + label:after {
        content: attr(data-text-false);
      }

      input[type=checkbox] + label i {
        top: 10%;
        background-color: white;
        height: 80%;
        left: 5%;
        position: absolute;
        width: 45%;
      }

      input[type=checkbox]:checked + label i {
        left: 50%;
      }

      
  </style>
  <!-- =======================================================
    Template Name: Dashio
    Template URL: https://templatemag.com/dashio-bootstrap-admin-template/
    Author: TemplateMag.com
    License: https://templatemag.com/license/
  ======================================================= -->
</head>

<body>
  <section id="container">
    <!-- **********************************************************************************************************************************************************
        TOP BAR CONTENT & NOTIFICATIONS
        *********************************************************************************************************************************************************** -->
    <!--header start-->
    <header class="header black-bg">
      <div class="sidebar-toggle-box">
        <div class="fa fa-bars tooltips" data-placement="right" data-original-title="Toggle Navigation"></div>
      </div>
      <!--logo start-->
      <a href="basic_table.php" class="logo"><b>AQU<span>AE</span></b></a>
      <!--logo end-->



      
      <div class="top-menu">
        <ul class="nav pull-right top-menu">
          <li>
            <a class="logout" href="..\login\index.php">Logout</a>
          </li>
        </ul>
      </div>
      <div class="top-menu">
        <ul class="nav pull-right top-menu">
          <li>
            <a class="logout" href="#"><i class="fa fa-bell" ><span class="badge" id="notifAdmin"></span></i></a>
          </li>
        </ul>
      </div>
      
    </header>

    <!--header end-->
    <!-- **********************************************************************************************************************************************************
        MAIN SIDEBAR MENU
        *********************************************************************************************************************************************************** -->
    <!--sidebar start-->
    <aside>
      <div id="sidebar" class="nav-collapse ">
        <!-- sidebar menu start-->
        <ul class="sidebar-menu" id="nav-accordion">
          <p class="centered">
            <a href="profile.php"><img src="img/logo.png"  width="80"></a>
          </p>
          <h5 class="centered"></h5><br><br>
         <!--  <li class="mt">
            <a href="index.php">
              <i class="fa fa-dashboard"></i>
              <span>Dashboard</span>
              </a>
          </li> -->
           <li class="sub-menu">
            <a href="basic_table.php" class="active">
              <i class="fa fa-home"></i>
              <span>Clients</span>
              </a>
           <!--  <ul class="sub">
              <li class="active">
                <a href="basic_table.php">Registered Clients</a>
              </li>
            </ul> -->
          </li>
          <li class="sub-menu">
            <a href="clients_product.php">
              <i class="fa fa-male"></i>
              <span>Clients Product</span>
              </a>
          </li>
          <li class="sub-menu">
            <a  href="..\blank.php">
              <i class="fa fa-user"></i>
              <span>Customer's Request</span>
            </a>
          </li>
          <li class="sub-menu">
              <a href="#"><i class="fa fa-shopping-cart fa-fw"></i><span>History</span> <span class="fa arrow"></a>
              <ul class="nav nav-second-level">
                  <li>
                      <a href="history.php"><i class="fa fa-check fa-fw"></i> Verified Request</a>
                  </li>
                  <li>
                      <a href="cancelled_request.php"><i class="fa fa-times-circle fa-fw"></i> Cancelled Request</a>
                  </li>
                   <li>
                      <a href="subscription_history.php"><i class="fa fa-history fa-fw"></i> Transaction History</a>
                  </li>
              </ul>
          </li>
          <!-- <li class="sub-menu">
            <a href="javascript:;">
              <i class="fa fa-desktop"></i>
              <span>UI Elements</span>
              </a>
            <ul class="sub">
              </li>
              <li>
                <a href="font_awesome.php">Font Awesome</a>
              </li>
            </ul>
          </li>
          <li class="sub-menu">
            <a href="javascript:;">
              <i class="fa fa-cogs"></i>
              <span>Components</span>
              </a>
            <ul class="sub">
              <li>
                <a href="grids.php">Grids</a>
              </li>
              <li>
                <a href="calendar.php">Calendar</a>
              </li>
              <li>
                <a href="gallery.php">Gallery</a>
              </li>
              <li>
                <a href="file_upload.php">Multiple File Upload</a>
              </li>
            </ul>
          </li>
          <li class="sub-menu">
            <a href="javascript:;">
              <i class="fa fa-book"></i>
              <span>Extra Pages</span>
              </a>
            <ul class="sub">
              <li>
                <a href="blank.php">Blank Page</a>
              </li>
              <li>
                <a href="profile.php">Profile</a>
              </li>
              <li>
                <a href="invoice.php">Invoice</a>
              </li>
              <li>
                <a href="pricing_table.php">Pricing Table</a>
              </li>
            </ul>
          </li>
          <li class="sub-menu">
            <a href="javascript:;">
              <i class="fa fa-tasks"></i>
              <span>Forms</span>
              </a>
            <ul class="sub">
              <li>
                <a href="contactform.php">Contact Form</a>
              </li>
            </ul>
          </li> -->
        </ul>
        <!-- sidebar menu end-->
      </div>
    </aside>
    <!--sidebar end-->
    <!-- **********************************************************************************************************************************************************
        MAIN CONTENT
        *********************************************************************************************************************************************************** -->
    <!--main content start-->
    <br>
    <section id="main-content">
      <section class="wrapper">
        <div class="row">
          
          <!-- /col-md-12 -->
          <div class="col-lg-12 ">
            <div class="panel panel-default">
              <div class="panel-heading">
                Clients
              </div>

              <!--   <h4><i class="fa fa-angle-right"></i> Clients</h4> -->
                <div class="panel-body">
                <table width="100%" class="table table-striped table-bordered table-hover" id="data-example">
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Contact Number</th>
                    <th>Details</th>
                    <th>Business Permit</th>
                    <th>Current Status</th>
                  </tr>
                </thead>
                <tbody id="bod">
                </tbody>
              </table>
              <div id="modal_of_details">
                
              </div>
              
              <div class="modal fade" id="modalNotif" role="dialog" style="margin-bottom:10px;">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header" style="background-color: #337ab7;">
                  </div>
                  <div class="modal-body">
                      <div class="form-group">
                        You have a new Applicant!
                      </div>
                  </div>
                  <div class="modal-footer">
                      <button  class="btn btn-default" data-dismiss="modal">Ok</button>
                  </div>
                </div>
             </div>

              </div>
           
          </div>
          <!-- /col-md-12 -->
        </div>
        <!-- row -->
      
        <!-- /row -->
      </section>
    </section>
    <!-- /MAIN CONTENT -->
    <!--main content end-->
    <!--footer start-->
   
    <!--footer end-->
  </section>
  <!-- js placed at the end of the document so the pages load faster -->
  <script src="lib/jquery/jquery.min.js"></script>
  <script src="lib/bootstrap/js/bootstrap.min.js"></script>
  <script class="include" type="text/javascript" src="lib/jquery.dcjqaccordion.2.7.js"></script>
  <script src="lib/jquery.scrollTo.min.js"></script>
  <script src="lib/jquery.nicescroll.js" type="text/javascript"></script>
  <!--common script for all pages-->
  <script src="lib/common-scripts.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="../vendor/bootstrap/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="../vendor/metisMenu/metisMenu.min.js"></script>

    <!-- DataTables JavaScript -->
    <script src="../vendor/datatables/js/jquery.dataTables.min.js"></script>
    <script src="../vendor/datatables-plugins/dataTables.bootstrap.min.js"></script>
    <script src="../vendor/datatables-responsive/dataTables.responsive.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="../dist/js/sb-admin-2.js"></script>

    <!-- Page-Level Demo Scripts - Tables - Use for reference -->
    <!-- <script>
    $(document).ready(function() {
        $('#data-example').DataTable({
            responsive: true
                    });
    });
    </script> -->
 
     

  </script>

   
  
</body>
<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script> -->
<!-- <script type="text/javascript">
  function active_deactive_user(val, id){
    $.ajax({
      type:'post',
      url:'change.php',
      data:{val:val,id:id},
      success: function(result){
        if(result==1){
          $('#str'+id).html('Active');
        }
        else
        {
           $('#str'+id).html('Deactivate');
        }
      }


    })

  }

</script> -->

</html>
