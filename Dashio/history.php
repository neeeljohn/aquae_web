<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="">
  <meta name="author" content="Dashboard">
  <meta name="keyword" content="Dashboard, Bootstrap, Admin, Template, Theme, Responsive, Fluid, Retina">
  <title>Verified Wallets</title>

  <!-- Favicons -->


  <!-- Bootstrap core CSS -->
  <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <!--external css-->
  <link href="lib/font-awesome/css/font-awesome.css" rel="stylesheet" />
  <!-- Custom styles for this template -->
  <link href="css/style.css" rel="stylesheet">
  <link href="css/style-responsive.css" rel="stylesheet">
  <link href="../vendor/datatables-plugins/dataTables.bootstrap.css" rel="stylesheet">

    <!-- DataTables Responsive CSS -->
    <link href="../vendor/datatables-responsive/dataTables.responsive.css" rel="stylesheet">
  <script src="https://www.gstatic.com/firebasejs/6.2.3/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/6.2.3/firebase-database.js"></script>
  <script src="https://www.gstatic.com/firebasejs/6.2.3/firebase-messaging.js"></script>
  <script src="https://www.gstatic.com/firebasejs/6.2.3/firebase-storage.js"></script>
  <!-- <script src="lib/jquery/jquery.min.js"></script> -->
  <script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="..\config.js"></script>

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
      <a href="index.php" class="logo"><b>AQU<span>AE</span></b></a>
      <!--logo end-->
    
      <div class="top-menu">
        <ul class="nav pull-right top-menu">
          <li><a class="logout" href="..\login\index.php">Logout</a></li>
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
          <p class="centered"><a href="profile.php"> <a href="profile.php"><img src="img/logo.png"  width="80"></a></p>
          <h5 class="centered"></h5><br><br>
         <li class="sub-menu">
            <a href="phpmailer/basic_table.php">
              <i class="fa fa-male"></i>
              <span>Clients</span>
              </a>
          </li>
          <li class="sub-menu">
            <a href="clients_product.php">
              <i class="fa fa-male"></i>
              <span>Clients Product</span>
              </a>
          </li>
          <li class="sub-menu">
            <a href="blank.php">
              <i class="fa fa-user"></i>
              <span>Customer's Request</span>
            </a>
          </li>
    <!--       <li>
              <a href="#"><i class="fa fa-shopping-cart fa-fw"></i> History<span class="fa arrow"></span></a>
              <ul class="nav nav-second-level">
                  <li>
                      <a href="tables.php"><i class="fa fa-cart-plus fa-fw"></i> Verified Request</a>
                  </li>
                  <li>
                      <a href="accepted_orders.php"><i class="fa fa-check-circle fa-fw"></i> Cancelled Request</a>
                  </li>
              </ul>
          </li> -->

          <li class="sub-menu">
            <a class="active" href="history.php">
              <i class="fa fa-history"></i>
              <span>History</span>
            </a>
            <ul class="nav nav-second-level">
              <li>
                      <a href="history.php"><i class="fa fa-check-circle fa-fw"></i> Verified Request</a>
                  </li>
                  <li>
                      <a href="cancelled_request.php"><i class="fa fa-times-circle fa-fw"></i> Cancelled Request</a>
                  </li>
                  <li>
                      <a href="subscription_history.php"><i class="fa fa-history fa-fw"></i> Subscription History</a>
                  </li>
            </ul>
          </li>
        <!-- sidebar menu end-->
      </ul>
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
                Verified Wallets
              </div>

              <!--   <h4><i class="fa fa-angle-right"></i> Clients</h4> -->
                <div class="panel-body">
                <table width="100%" class="table table-striped table-bordered table-hover" id="customer_history">
                <thead>
                  <tr>
                    <th>Cash-in ID</th>
                    <th>Transaction Code</th>
                    <th>Name</th>
                    <th>Date Verified</th>
                    <th>Amount Requested</th>

                  </tr>
                </thead>
                <tbody>
                  
                </tbody>
                <tfoot>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>Total:</th>
                    <th id="totalAmount"></th>
                  </tr>
                  
                </tfoot>
              
              </table>

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
    
 
  <!-- js placed at the end of the document so the pages load faster -->
  <script src="lib/jquery/jquery.min.js"></script>
  <script src="lib/bootstrap/js/bootstrap.min.js"></script>
  <script src="lib/jquery-ui-1.9.2.custom.min.js"></script>
  <script src="lib/jquery.ui.touch-punch.min.js"></script>
  <script class="include" type="text/javascript" src="lib/jquery.dcjqaccordion.2.7.js"></script>
  <script src="lib/jquery.scrollTo.min.js"></script>
  <script src="lib/jquery.nicescroll.js" type="text/javascript"></script>
  <!--common script for all pages-->
  <script src="lib/common-scripts.js"></script>
  <script src="../vendor/datatables/js/jquery.dataTables.min.js"></script>
  <script src="../vendor/datatables-plugins/dataTables.bootstrap.min.js"></script>
  <script src="../vendor/datatables-responsive/dataTables.responsive.js"></script>
  <!--script for this page-->

</body>

</html>
