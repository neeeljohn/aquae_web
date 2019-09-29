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

    <script type="text/javascript">

        window.addEventListener("load", getData(genFunction));

            function getData(callbackIN) {
              var ref = firebase.database().ref("orders").orderByChild("client_id").equalTo(sessionStorage.getItem("client_id"));

              var dataf= [];
              ref.once('value').then(function (snapshot) {
                snapshot.forEach(function(childSnapshot){
                    var childSnapshots = childSnapshot.val();  

                    if (childSnapshots.status == "confirmed") {


                    // let output = Object.keys(childSnapshots).map(function(e) {
                    //                 return childSnapshots[e];
                    //         });

                    // console.log(output[11]);


                // 
                dataf.push({
                    label: childSnapshots.order_time,
                    value: childSnapshots.total_amount
                });
                // console.log(childSnapshots);
                    // console.log(childSnapshots);
                    callbackIN(dataf);
                    }
                });
              });
            }
            function genFunction(data) {
              var cdata = [];
              var len = data.length;

              

              for(var i=0; i<len; i++) {
                cdata.push({
                  label: data[i]['label'],
                  value: data[i]['value']
                });
                // console.log(data[0]);
            }
            var firebaseChart = new FusionCharts({
        type: 'area2d',
        renderAt: 'chart-container',
        width: '650',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Line Chart Reports",
                "subCaption": "Sales{br}Aquae Inc.",
                "subCaptionFontBold": "0",
                "captionFontSize": "20",
                "subCaptionFontSize": "17",
                "captionPadding": "15",
                "captionFontColor": "#8C8C8C",
                "baseFontSize": "14",
                "baseFont": "Barlow",
                "canvasBgAlpha": "0",
                "bgColor": "#FFFFFF",
                "bgAlpha": "100",
                "showBorder": "0",
                "showCanvasBorder": "0",
                "showPlotBorder": "0",
                "showAlternateHGridColor": "0",
                "usePlotGradientColor": "0",
                "paletteColors": "#6AC1A5",
                "showValues": "0",
                "divLineAlpha": "5",
                "showAxisLines": "1",
                "drawAnchors": "0",
                "xAxisLineColor": "#8C8C8C",
                "xAxisLineThickness": "0.7",
                "xAxisLineAlpha": "50",
                "yAxisLineColor": "#8C8C8C",
                "yAxisLineThickness": "0.7",
                "yAxisLineAlpha": "50",
                "baseFontColor": "#8C8C8C",
                "toolTipBgColor": "#FA8D67",
                "toolTipPadding": "10",
                "toolTipColor": "#FFFFFF",
                "toolTipBorderRadius": "3",
                "toolTipBorderAlpha": "0",
                "drawCrossLine": "1",
                "crossLineColor": "#8C8C8C",
                "crossLineAlpha": "60",
                "crossLineThickness": "0.7",
                "alignCaptionWithCanvas": "1"
            },
            "data": cdata
        }
    });
    firebaseChart.render();
    }
        
    </script>

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
                    <h1 class="page-header">Your Sales</h1>
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <!-- /.row -->
            <div class="row">
               <!--  <div class="col-lg-6">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            Area Chart
                        </div>
                        
                        <div class="panel-body">
                            <div id="morris-area-chart"></div>
                        </div>
                        
                    </div>
                   
                </div>  -->
                <!-- /.col-lg-6 -->
                <div class="col-lg-7">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                           Sales Chart 
                        </div>
                        
                        <div class="panel-body">
                            <!-- <div id="morris-bar-chart"></div> -->
                            <div id="chart-container">
                                <svg width="90px"  height="90px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-rolling" style="background: none;">
                                    <circle cx="50" cy="50" fill="none" ng-attr-stroke="{{config.color}}" ng-attr-stroke-width="{{config.width}}" ng-attr-r="{{config.radius}}" ng-attr-stroke-dasharray="{{config.dasharray}}" stroke="#6ac1a5" stroke-width="9" r="33" stroke-dasharray="155.50883635269477 53.83627878423159" transform="rotate(324 50 50)">
                                        <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite">
                                        </animateTransform>
                                    </circle>
                                </svg>
                            </div>
                        </div>
                        
                    </div>
                   
                </div>
                
              <!--   <div class="col-lg-6"> -->
                
                <!-- /.col-lg-6 -->
              <div class="col-lg-4">
                    <div class="panel panel-default">
                       <div class="panel-heading">
                           Most Sales Products
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div id="morris-donut-chart"></div>
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div> 

                <div class="col-lg-12">
                    <div class="panel panel-default">
                       <div class="panel-heading">
                           Table Reports
                        </div>
                        
                         <select class="form-control" id="reports"  onchange="this.form.submit();" style="margin-left: 76%; margin-top: 15px; width: 20%;">
                            <option value="0">Daily Sales</option>
                            <option value="1">Monthly Sales</option>
                         </select>
                        
                        <!-- /.panel-heading -->
                        <div class="panel-body" id="div0">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Date ordered</th>
                                        <th scope="col">Details</th>
                                    </tr>
                                </thead>
                                <tbody id="reportsTable">
                                    
                                </tbody>
                                <tbody>
                                    <tr>
                                        <th scope="col">Total:</th>
                                        <th scope="col" id="totalReport"></th>
                                    </tr>
                                </tbody>
                            </table>
                            <div id="modal_of_reports">
                                
                            </div>
                           <!--  <h2 style="margin-left: 75%;">Total:</h2>
                            <h2 style="margin-left: 83%;margin-top: -42px;">P450</h2> -->
                        </div>
                        <!-- <select class="form-control" id="reports"  onchange="this.form.submit();" style="margin-left:10px;margin-top: 15px; width: 20%;">
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                         </select> -->
                        <div class="panel-body" id="div1">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Month</th>
                                        <th scope="col">Sales</th>
                                    </tr>
                                </thead>
                                <tbody id="tableReports">
                                    <tr>
                                       
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <th scope="col">Total:</th>
                                        <th scope="col" id="reportsTotal"></th>
                                    </tr>
                                </tbody>
                            </table>
                            <hr>
                            <!-- <h2 style="margin-left: 75%;">Total:</h2>
                            <h2 style="margin-left: 83%;margin-top: -42px;">P450</h2> -->
                        </div>

                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div> 


                
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
    <script type="text/javascript">


         Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Gallon",
            value: 150
        }, {
            label: "Container",
            value: 50
        }, {
            label: "Bottle",
            value: 100
        }],
        resize: true
    });
    </script>
    <script>
        for(var j = 0; j < 2; j++){
            if(j == 0){
            document.getElementById('div'+j).style.display = '';
            }else{
            document.getElementById('div'+j).style.display = 'none';
            }
        }
        var opt = document.getElementById('reports');
        opt.onchange = function(){
            //document.getElementById('div0').style.display = 'none';
            for(var i = 0; i < 2; i++){
               // alert(i);
            document.getElementById('div'+i).style.display = 'none';
            }
            document.getElementById('div'+ this.value).style.display = '';
        }
    </script>

</body>

</html>
