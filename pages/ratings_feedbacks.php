<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" type="image/png" href="../pages/profile/Logo.png" />

    <title>Chart - Aquae</title>

    <!-- Bootstrap Core CSS -->
    <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="../vendor/metisMenu/metisMenu.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="../dist/css/sb-admin-2.css" rel="stylesheet">

    <!-- Morris Charts CSS -->
    <!-- <link href="../morrisjs/morris.css" rel="stylesheet"> -->

    <!-- Custom Fonts -->
    <link href="../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <script src="https://static.fusioncharts.com/code/latest/fusioncharts.js"></script>
    <!-- <link rel="stylesheet" href="morris.css"> -->
    <script src="https://www.gstatic.com/firebasejs/6.2.3/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/6.2.3/firebase-messaging.js"></script>
    <script src="https://www.gstatic.com/firebasejs/6.2.3/firebase-database.js"></script>
    <script src="https://www.gstatic.com/firebasejs/6.2.3/firebase-storage.js"></script>
    <script type="text/javascript" src="..\config.js"></script>

    <style>
        
        .card {
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
          transition: 0.3s;
          width: 48%;
        }

        .card:hover {
          box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        }

        .container {
          padding: 2px 16px;
        }
        #rates{
            font-size: 200px;
            text-align: center;
        }
        #star{
            font-size: 22px;
            color: orange;
            margin-top: 50px;
        }

        *{
          margin:0;
          padding:0;
        }
        /*body{
          font-family:arial,sans-serif;
          font-size:100%;
          margin:3em;
          background:#666;
          color:#fff;
        }*/
        h2,p{
          font-size:100%;
          font-weight:normal;
        }
        #s, #t{
          list-style:none;
        }
        #s{
          overflow:hidden;
          padding:3em;
        }
        #s #t a{
          text-decoration:none;
          color:#000;
          background:#ffc;
          display:block;
          height:10em;
          width:10em;
          padding:1em;
        }
        #s #t{
          margin:1em;
          float:left;
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
                            <a href="tables.php"><i class="fa fa-shopping-cart fa-fw"></i> Orders<span class="fa arrow"></a>
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
                                    <a href="order_history.php"> Order History</a>
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
                        <li>
                            <a href="profile/blank.php"><i class="fa fa-files-o fa-fw"></i> User Profile</a>
                        </li>
                        <!-- <li>
                            <a href="forms.php"><i class="fa fa-edit fa-fw"></i> Forms</a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-wrench fa-fw"></i> UI Elements<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a href="panels-wells.php">Panels and Wells</a>
                                </li>
                                <li>
                                    <a href="buttons.php">Buttons</a>
                                </li>
                                <li>
                                    <a href="notifications.php">Notifications</a>
                                </li>
                                <li>
                                    <a href="typography.php">Typography</a>
                                </li>
                                <li>
                                    <a href="icons.php"> Icons</a>
                                </li>
                                <li>
                                    <a href="grid.php">Grid</a>
                                </li>
                          
                        </li> 
                       
                        <li>
                            <a href="#"><i class="fa fa-files-o fa-fw"></i> User Profile<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                
                                <li>
                                    <a href="login.php">Login Page</a>
                                </li>
                            </ul>
                             /.nav-second-level -->
                       <!--  </li> -->
                    </ul>
                </div>
                <!-- /.sidebar-collapse -->
            </div>
            <!-- /.navbar-static-side -->
        </nav>

        <div id="page-wrapper">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Ratings & Feedbacks</h1>
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <!-- /.row -->
           <table id="example" class="table table-striped table-bordered" style="width:100%" >
              <thead>
                <tr>
                    <th>Rate</th>
                    <th>Feedbacks</th>
                </tr>
              </thead>
              <tbody id="ratingfeeds">

              </tbody>
            </table>


        </div>
        <!-- /#page-wrapper -->


    </div>

    
    <!-- /#wrapper -->

    <!-- jQuery -->
    <script src="../vendor/jquery/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="../vendor/bootstrap/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="../vendor/metisMenu/metisMenu.min.js"></script>


    <script type="text/javascript" src="../morrisjs/bstransition.js"></script>
    <script type="text/javascript" src="../morrisjs/collapse.js"></script>

    <!-- Morris Charts JavaScript -->
    <script src="../vendor/raphael/raphael.min.js"></script>
    <script src="../morris.js/morris.min.js"></script>
    <!-- <script src="../data/morris-data.js"></script> -->


    <script type="text/javascript" src="../morrisjs/plugins.js"></script>
    <script type="text/javascript" src="../morrisjs/collapse.js"></script>


    <!-- Custom Theme JavaScript -->
    <script src="../dist/js/sb-admin-2.js"></script>

    <!-- <script type="text/javascript">
        $(function() {

            $.ajax({
                url: 'http://localhost:/aquae4/morrisData.php',
                dataType: 'json',
                cache: false,
                success: function(data) {
                    var chartData = [];
                    for(var i = 0; i < data.length; i++) {
                        chartData.push(data[i]);
                        // chartData[i] = data[i].totalQuantity;
                    }

                    console.log(chartData);
                      Morris.Bar({
                        element: 'morris-bar-chart',
                        data: chartData,
                        xkey: 'a',
                        ykeys: ['y'],
                        labels: ['Series A'],
                        parseTime: false
    });
                }   
            })
        });
       
    </script> -->
<!--     <script type="text/javascript">
         Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Gallon",
            value: 12
        }, {
            label: "Container",
            value: 30
        }, {
            label: "Bottle",
            value: 20
        }],
        resize: true
    });
    </script>
    <script>
        for(var j = 0; j < 3; j++){
            if(j == 0){
            document.getElementById('div'+j).style.display = '';
            }else{
            document.getElementById('div'+j).style.display = 'none';
            }
        }
        var opt = document.getElementById('reports');
        opt.onchange = function(){
            //document.getElementById('div0').style.display = 'none';
            for(var i = 0; i < 3; i++){
               // alert(i);
            document.getElementById('div'+i).style.display = 'none';
            }
            document.getElementById('div'+ this.value).style.display = '';
        }
    </script>
 -->
</body>

</html>
