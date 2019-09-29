<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" type="image/png" href="../pages/profile/Logo.png" />

    <title>Customers - Aquae</title>

    <!-- Bootstrap Core CSS -->
    <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="../vendor/metisMenu/metisMenu.min.css" rel="stylesheet">

    <!-- DataTables CSS -->
    <link href="../vendor/datatables-plugins/dataTables.bootstrap.css" rel="stylesheet">

    <!-- DataTables Responsive CSS -->
    <link href="../vendor/datatables-responsive/dataTables.responsive.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="../dist/css/sb-admin-2.css" rel="stylesheet">
    <!-- Custom Fonts -->
    <link href="../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script src="https://js.pusher.com/4.4/pusher.min.js"></script>
      <script src="https://www.gstatic.com/firebasejs/6.2.3/firebase-app.js"></script>
      <script src="https://www.gstatic.com/firebasejs/6.2.3/firebase-messaging.js"></script>
      <script src="https://www.gstatic.com/firebasejs/6.2.3/firebase-database.js"></script>
      <script src="https://www.gstatic.com/firebasejs/6.2.3/firebase-storage.js"></script>

      <!-- <script src="lib/jquery/jquery.min.js"></script> -->
      <script type="text/javascript" src="..\config.js"></script>
      <!-- <script type="text/javascript" src="..\firebase-messaging-sw.js"></script> -->
      <script type="text/javascript">
        if (sessionStorage.getItem("client_id") === null) {
            window.location = "../login/index.php";
        }
    </script>
    <style type="text/css">
        
        .badge {
          position: absolute;
          top: 10px;
          right: 20px;
          padding: 1px 3px;
          border-radius: 50%;
          background-color: red;
          color: white;
        }
        #ExpressOrderShowIn 
        {
           width: 100px;
           height: 100px;
           margin:0 auto;
           display:table;
           position: absolute;
           left: 0;
           right:30%;
           top: 40%;
           -webkit-transform:translateY(-50%);
           -moz-transform:translateY(-50%);
           -ms-transform:translateY(-50%);
           -o-transform:translateY(-50%);
           transform:translateY(-50%);
          }
    </style>

    
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>

    <div id="wrapper">

        <!-- Navigation -->
        <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.php"><img src="profile/logo.png" style="width: 18%; margin-top: -11px;"></a>
            </div>
            <!-- /.navbar-header -->

            <ul class="nav navbar-top-links navbar-right">
                <li class="dropdown">
                    <!-- <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-envelope fa-fw"></i> <i class="fa fa-caret-down"></i>
                    </a> -->
                    
                <!-- /.dropdown -->
             
                <!-- /.dropdown -->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-user fa-fw"></i> <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-user">
                        <li><a href="#"><i class="fa fa-user fa-fw"></i> User Profile</a>
                        </li>
                        <li><a href="#"><i class="fa fa-gear fa-fw"></i> Settings</a>
                        </li>
                        <li class="divider"></li>
                        <li><a href="..\login\index.php" onclick="logout();"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
                        </li>
                    </ul>
                    <!-- /.dropdown-user -->
                </li>
                <!-- /.dropdown -->
            </ul>
            <!-- /.navbar-top-links -->

            <div class="navbar-default sidebar" role="navigation">
                <div class="sidebar-nav navbar-collapse">
                    <ul class="nav" id="side-menu">
                        <li>
                            <div class="panel-heading">
                            <div class="row">
                                <div class="col-xs-3">
                                   <h1 style="color: #337ab7">PHP</h1>
                                </div>
                                <div class="col-xs-9 text-right">
                                    <div class="huge" id="walletBalance" style="margin-top: 12px; color: #337ab7"></div>
                                </div>
                            </div>
                        </div>
                        </li>
                        <li>
                            <a href="index.php"><i class="fa fa-dashboard fa-fw"></i> Dashboard</a>
                        </li>
                        <li>
                            <a href="product.php"><i class="fa fa-file-text fa-fw"></i> Products</a>
                        </li>
                        
                        <li>
                            <a href="#"><i class="fa fa-shopping-cart fa-fw"></i> Orders<span class="fa arrow"></a>
                            <ul class="nav nav-second-level">
                                <li id="expressing">
                                    <a href="express_delivery.php"><i class="fa fa-send fa-fw"></i> Express Delivery</a>
                                </li>
                                <li>
                                    <a href="tables.php"><i class="fa fa-cart-plus fa-fw"></i> Standard Orders</a>
                                </li>
                                <li>
                                    <a href="accepted_orders.php"><i class="fa fa-check-circle fa-fw"></i> Processing Orders</a>
                                </li>
                                <li>
                                    <a href="cancelled_orders.php"><i class="fa fa-times fa-fw"></i> Cancelled Orders</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="scheduled_delivery.php"><i class="fa fa-calendar fa-fw"></i> Scheduled Delivery</a>
                        </li>
                        <li>
                            <a href="order_history.php"><i class="fa fa-book fa-fw"></i> History<span class="fa arrow"></a>
                            <ul class="nav nav-second-level">
                                <li id="order_express">
                                    <a href="express_history.php"> Express Order History</a>
                                </li>
                                <li>
                                    <a href="order_history.php"> Standard History</a>
                                </li>
                                <li>
                                    <a href="schedule_history.php"> Schedule History</a>
                                </li>
                            </ul>
                        </li>
                       
                        <!-- <li>
                            <a href="wallet.php"><i class="fa fa-money"></i> Wallet</a>
                        </li> -->
                        <li>
                            <a href="morris.php"><i class="fa fa-bar-chart-o fa-fw"></i> Reports</a>
                        </li>
                        <li>
                            <a href="ratings_feedbacks.php"><i class="fa fa-star fa-fw"></i> Ratings & Feedbacks</a>
                        </li>
                         <li class="active">
                            <a href="profile/blank.php"><i class="fa fa-files-o fa-fw"></i> User Profile</a>
                        </li>
                       
                       
                    </ul>
                </div>
                <!-- /.sidebar-collapse -->
            </div>
            <!-- /.navbar-static-side -->
        </nav>
        

        <div id="page-wrapper">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Orders</h1>
                </div>
                <!-- /.col-lg-12 -->
            </div>
          
             
           
            <div class="row">
           
                <div class="col-lg-12">
                    
                    <div class="panel panel-default">
                        <div class="panel-heading" id="morningOrders">
                            
                        </div>

                        <!-- /.panel-heading -->
                        
                        <div class="panel-body" id="loop">
                         
                           <table id="example" class="table table-striped table-bordered" style="width:100%" >
                              <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Order Time</th>
                                    <th>Customer Name</th>
                                    <th>Address</th>
                                    <th>Order Details</th>
                                    <th>Action</th>
                                </tr>
                              </thead>
                              <tbody id="morning_order">
                              </tbody>
                            </table>
                            <div id="acceptedOrdering"></div>

                            <div id="modalforcancel"></div>

                             <div id="address_modals"></div>
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <div class="row">
           
                <div class="col-lg-12">
                    
                    <div class="panel panel-default">
                        <div class="panel-heading" id="afternoonOrders">
                        
                        </div>

                        <div class="panel-body" id="loop">
                          
                           <table id="example" class="table table-striped table-bordered" style="width:100%" >
                              <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Order Time</th>
                                    <th>Customer Name</th>
                                    <th>Address</th>
                                    <th>Order Details</th>
                                    <th>Action</th>
                                </tr>
                              </thead>
                              <tbody id="afternoon_order">
                              </tbody>
                            </table>
                            <div id="acceptedOrderings"></div>

                            <div id="modalforcancels"></div>
                            
                        </div>
                        <!-- /.panel-body -->
                    </div>

                    <!-- /.panel -->
                </div>
                <!-- /.col-lg-12 -->
            </div>
                   </div>
                </div>

              

                 <!-- <div class="modal fade" id="ej" role="dialog">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <button type="button" class="close" data-dismiss="modal">&times;</button>
                              <h4 class="modal-title">Full Address</h4>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                   <table>
                                    <tbody>
                                        <tr class="gradeU">
                                            <input type="hidden" name="order_id" value="">
                                            Street: <h4 style="color:blue; text-align: left;">Sitio All Season Tagunol Cogon Pardo Street</h4>
                                            Add Shipping fee: <input type="number" class="form-control" name="">
                                        </tr>
                                    </tbody>
                                   </table>
                                   
                                </div>
                            </div>
                            <div class="modal-footer">
                             <input type="hidden" name="prod_id" id="prod_id">
                               
                                <button type="button" class="btn btn-primary" data-dismiss="modal">Confirm</button>
                        
                             
                            </div>
                          </div>
                          
                        </div>
                      </div>
                   
                   </div>
                </div> -->
           
            <!-- /.row -->
             
            <!-- /.row -->
            
    <!-- /#wrapper -->

    <!-- jQuery -->
     

    <script src="../vendor/jquery/jquery.min.js"></script>
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


    <!-- <script type="text/javascript" src="path_to/jquery.js"></script> -->
    <!-- <script type="text/javascript">
        $(function() {
            $(selector).pagination({
                items: 100,
                itemsOnPage: 10,
                cssStyle: 'light-theme'
            });
        });
    </script> -->
   




    <!-- Page-Level Demo Scripts - Tables - Use for reference -->
   

</body>

</html>
