<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Profile</title>

    <!-- Bootstrap Core CSS -->
    <link href="../../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="../../vendor/metisMenu/metisMenu.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="../../dist/css/sb-admin-2.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="../../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <link rel="stylesheet" type="text/css" href="../../profile.css">
    <script src="..\..\vendor/jquery/jquery.min.js"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://www.gstatic.com/firebasejs/6.2.3/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/6.2.3/firebase-messaging.js"></script>
    <script src="https://www.gstatic.com/firebasejs/6.2.3/firebase-database.js"></script>
    <script src="https://www.gstatic.com/firebasejs/6.2.3/firebase-storage.js"></script>
    <script type="text/javascript" src="../../config.js"></script>
    <script type="text/javascript">
        if (sessionStorage.getItem("client_id") === null) {
            window.location = "../../login/index.php";
        }
    </script>
    <style>

        .modal{
            z-index: 20 !important;   
        }
        .modal-backdrop{
            background-color: transparent;
            z-index: 10;        
        }​
        .footer {
           position: fixed;
           left: 0;
           bottom: 0;
           width: 100%;
           background-color: red;
           color: white;
           text-align: center;
        }
        .gradeU td:first-child, td:last-child {
            text-align: center;
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
          height: 30px;
          line-height: 30px;
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
              <a class="navbar-brand" href="index.php"><img src="../profile/logo.png" style="width: 18%; margin-top: -11px;"></a>
            </div>
            <!-- /.navbar-header -->

            <ul class="nav navbar-top-links navbar-right">
                <li class="dropdown">
                   <!--  <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-envelope fa-fw"></i> <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-messages">
                        <li>
                            <a href="#">
                                <div>
                                    <strong>John Smith</strong>
                                    <span class="pull-right text-muted">
                                        <em>Yesterday</em>
                                    </span>
                                </div>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <strong>John Smith</strong>
                                    <span class="pull-right text-muted">
                                        <em>Yesterday</em>
                                    </span>
                                </div>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <strong>John Smith</strong>
                                    <span class="pull-right text-muted">
                                        <em>Yesterday</em>
                                    </span>
                                </div>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a class="text-center" href="#">
                                <strong>Read All Messages</strong>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                 -- /.dropdown-messages -->
                <!-- </li> -->
                <!-- /.dropdown -->
               <!--  <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-tasks fa-fw"></i> <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-tasks">
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>Task 1</strong>
                                        <span class="pull-right text-muted">40% Complete</span>
                                    </p>
                                    <div class="progress progress-striped active">
                                        <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                                            <span class="sr-only">40% Complete (success)</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>Task 2</strong>
                                        <span class="pull-right text-muted">20% Complete</span>
                                    </p>
                                    <div class="progress progress-striped active">
                                        <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
                                            <span class="sr-only">20% Complete</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>Task 3</strong>
                                        <span class="pull-right text-muted">60% Complete</span>
                                    </p>
                                    <div class="progress progress-striped active">
                                        <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
                                            <span class="sr-only">60% Complete (warning)</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>Task 4</strong>
                                        <span class="pull-right text-muted">80% Complete</span>
                                    </p>
                                    <div class="progress progress-striped active">
                                        <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
                                            <span class="sr-only">80% Complete (danger)</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a class="text-center" href="#">
                                <strong>See All Tasks</strong>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                    
                </li> -->
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
                        <li><a href="..\..\login\index.php" onclick="logout();"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
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
                            <a href="..\index.php"><i class="fa fa-dashboard fa-fw"></i> Dashboard</a>
                        </li>
                        <li>
                            <a href="..\product.php"><i class="fa fa-file-text fa-fw"></i> Products</a>
                        </li>
                        
                         <li>
                            <a href="#"><i class="fa fa-shopping-cart fa-fw"></i> Orders<span class="fa arrow"></a>
                            <ul class="nav nav-second-level">
                                <li id="expressing">
                                    <a href="..\express_delivery.php"><i class="fa fa-send fa-fw"></i> Express Delivery</a>
                                </li>
                                <li>
                                    <a href="..\tables.php"><i class="fa fa-cart-plus fa-fw"></i> Standard Orders</a>
                                </li>
                                <li>
                                    <a href="..\accepted_orders.php"><i class="fa fa-check-circle fa-fw"></i> Processing Orders</a>
                                </li>
                                <li>
                                    <a href="..\cancelled_orders.php"><i class="fa fa-times fa-fw"></i> Cancelled Orders</a>
                                </li>
                            </ul>
                        </li>
                         <li>
                            <a href="..\scheduled_delivery.php"><i class="fa fa-calendar fa-fw"></i> Scheduled Delivery</a>
                        </li>
                         <li>
                            <a href="..\order_history.php"><i class="fa fa-book fa-fw"></i> History<span class="fa arrow"></a>
                            <ul class="nav nav-second-level">
                                <li id="order_express">
                                    <a href="..\express_history.php"> Express Order History</a>
                                </li>
                                <li>
                                    <a href="..\order_history.php"> Standard History</a>
                                </li>
                                <li>
                                    <a href="..\schedule_history.php"> Schedule History</a>
                                </li>
                            </ul>
                        </li>
                       <!--  <li>
                            <a href="..\order_history.php"><i class="fa fa-history fa-fw"></i> Order History</a>
                        </li> -->
                        <!-- <li>
                            <a href="wallet.php"><i class="fa fa-money"></i> Wallet</a>
                        </li> -->
                        <li>
                            <a href="..\morris.php"><i class="fa fa-bar-chart-o fa-fw"></i> Reports</a>
                        </li>
                        <li>
                            <a href="..\ratings_feedbacks.php"><i class="fa fa-star fa-fw"></i> Ratings & Feedbacks</a>
                        </li>
                        <li class="active">
                            <a href="blank.php"><i class="fa fa-files-o fa-fw"></i> User Profile</a>
                        </li>
                    </ul>
                </div>
                <!-- /.sidebar-collapse -->
            </div>
            <!-- /.navbar-static-side -->
        </nav>
        <!-- Page Content -->
        <div id="page-wrapper">
            <div class="container-fluid">
                        <h1 class="page-header">Account Information</h1>
                        
                                 <div class="col-sm-2" >
                                                        <img class="profile-pic" id="prof_pic" height="150" width="150">
                                </div>  
                                 <div class="row">
                                            <h2>
                                            <i class="fa fa-building">
                                            <input type="text" data-toggle="tooltip"  data-placement="top" title="Company name" id="company" style="border:0px;">
                                            </i><br>
                                            </h2>
                                        <div class="col-sm-4">
                                            <i class="fa fa-envelope">
                                            <input type="text" data-toggle="tooltip"  data-placement="top" title="Email" id="email" style="border:0px;" >
                                            </i><br>
                                            <i class="fa fa-phone-square">
                                            <input type="text" data-toggle="tooltip"  data-placement="top" title="Contact Number" id="contact" style="border:0px;">
                                            </i><br>
                                            <i class="fa fa-home">
                                            <input type="text" data-toggle="tooltip"  data-placement="top" title="Address" id="address" style="border:0px;" >
                                            </i><br>
                                            
                                            
                                        </div> 
                                        <div class="col-sm-3">
                                            <i class="fa fa-filter" style="margin-left: 50px">
                                            <input type="text" data-toggle="tooltip"  data-placement="top" title="No. of filter" id="no_of_filter" style="border:0px;">
                                            </i><br>
                                            <div class="w-100"></div>
                                            <i class="fa fa-tint" style="margin-left: 50px">
                                            <input type="text" data-toggle="tooltip"  data-placement="top" title="Water" id="water_type" style="border:0px;">
                                            </i><br>
                                            <i class="fa fa-truck" style="margin-left: 50px">
                                            <input type="text" data-toggle="tooltip"  data-placement="top" title="Shipping Fee" id="shipping_fee" style="border:0px;">
                                            </i><br>
                                        
                                        </div> 
                                        <div class="col-sm-2">
                                           
                                         <!--    <button class="btn btn-primary" ><i class="fa fa-edit"> Edit</i></button> -->
                                       <!--  <div id="editAcct"> -->
                                          <button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#editAccts" onclick="loadAcctDetails()"><i class="fa fa-edit"> Edit</i></button>

                                              <div class="modal fade" id="editAccts" role="dialog" style="margin-bottom:10px;">
                                                  <div class="modal-dialog">
                                                    <div class="modal-content">
                                                            <input type="hidden" name="station" id="station">
                                                      <div class="modal-header" style="background-color: #337ab7;">
                                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                                        <h4 class="modal-title">Edit Profile</h4>
                                                      </div>
                                                      <div class="modal-body">
                                                          <div class="form-group">
                                                            <center>
                                                            <label for="client_pic" class="hover">
                                                            <img src="..\..\images/add.png" id="preview1" data-tooltip="true" title="insert" data-animation="false" width="200px;" height="200px;" >
                                                            <input type="file" name="per_pic" id="client_pic" style="visibility: hidden;">
                                                            </label><br>

                                                            </center>
                                                             Company: <input type="text" name="name" class="form-control" placeholder="Company name" id="comp_names" autofocus></input><br>
                                                             Contact #: <input type="text" name="username" class="form-control" placeholder="Contact #" id="comp_contacts"></input><br>
                                                             Address: <input type="text" name="password" class="form-control" placeholder="Address" id="comp_addresss"></input><br>
                                                             Stages: <input type="text" name="name" class="form-control" placeholder="No. of filter" id="comp_filters"></input><br>
                                                             Shipping Fee per km: <input type="text" name="username" class="form-control" placeholder="Shipping-fee" id="comp_fees"></input><br>
                                                          </div>
                                                      </div>
                                                      <div class="modal-footer">
                                                         <br> <button class="btn btn-primary" onclick="editCompAcct()">Confirm</button>
                                                          <button  class="btn btn-default" data-dismiss="modal">Cancel</button>
                                                          
                                                      </div>
                                                    </div>
                                                </div>
                                           </div>



                                       <!--  </div> -->
                                            
                                          <!-- Modal -->
                                          
                                        
                                </div>
                            </div>
                            <hr>  
                            <button class="btn btn-primary" data-toggle="modal" data-target="#addBoy" value="Add">+ Add Delivery Personnel</button><br><br>
                            <table id="sample" class="table table-striped table-bordered" style="width:100%">
                              <tr>
                                  <thead>
                                        <th>Profile</th>
                                        <th>Name</th>
                                        <th>Address assigned</th>
                                        <th>Contact Number</th>
                                        <th>Username</th>
                                        <th>Password</th>
                                        <th>Action</th>
                                  </thead>
                                </tr>
                                <tr>  
                                  <tbody id="personels">

                                  </tbody>
                                </tr>
                            </table>

                        <div class="modal fade" id="addBoy" role="dialog" style="margin-bottom:10px;">
                          <div class="modal-dialog">
                            <div class="modal-content">
                                    <input type="hidden" name="station" id="station">
                              <div class="modal-header" style="background-color: #337ab7;">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title">Add Personnel</h4>
                              </div>
                              <div class="modal-body">
                                  <div class="form-group" style="text-align: center;">
                                            <label for="per_pic" class="hover">
                                            <img src="..\..\images/add.png" id="preview" data-tooltip="true" title="insert" data-animation="false" width="200px;" height="200px;" >
                                            <input type="file" name="per_pic" id="per_pic" style="visibility: hidden;">
                                        </label>
                                     <input type="text" name="name" class="form-control" placeholder="Name" id="per_name"></input><br>
                                     <input type="text" name="addr" placeholder="Address assigned" class="form-control" id="per_addr"></input><br>
                                     <input type="number" name="number" class="form-control" placeholder="Contact" pattern="\d*" maxlength="11" min="0" oninput="validity.valid||(value='');" id="per_contact"></input><br>
                                     <input type="text" name="username" class="form-control" placeholder="Username" id="per_username"></input><br>
                                     <input type="text" name="password" class="form-control" placeholder="Password" id="per_pass"></input><br>
                                  </div>
                              </div>
                              <div class="modal-footer">
                                
                                  <button name="confirm" class="btn btn-primary" onclick="addPersonnel()">Confirm</button>
                                  <button  class="btn btn-default" data-dismiss="modal">Cancel</button>
                                  
                              </div>
                             
                            </div>
                        </div>

                    </div>
                   
                   
                 
        <!-- /#page-wrapper -->

    </div>
</div>
    <!-- /#wrapper -->

    <!-- jQuery -->
    <script src="../../vendor/jquery/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="../../vendor/bootstrap/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="../../vendor/metisMenu/metisMenu.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="../../dist/js/sb-admin-2.js"></script>

    <script>
        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();   
        });
    </script>
    <script type="text/javascript">
        document.getElementById("station").value = sessionStorage.getItem("company");
        document.getElementById("company").value = sessionStorage.getItem("company");
        document.getElementById("contact").value = sessionStorage.getItem("contact");
        document.getElementById("no_of_filter").value = sessionStorage.getItem("no_of_filter");
        document.getElementById("address").value = sessionStorage.getItem("address");
        document.getElementById("email").value = sessionStorage.getItem("email");
        document.getElementById("shipping_fee").value = sessionStorage.getItem("shipping_fee");
        document.getElementById("water_type").value = sessionStorage.getItem("water_type");
        document.getElementById("prof_pic").src = sessionStorage.getItem("filesss");
        // console.log(prof_pic);
        var el = document.getElementById("prof_pic");
        el.innerHTML="<img src='=`+store+`' height='150' width='150'>";
    </script>
   <!--  <script>
          $(document).ready(function() {
            $('#sample').DataTable();
        } );          
    </script> -->
    <script type="text/javascript">
        $(document).on('change','#per_pic' , function(event){ 

           var tmppath = URL.createObjectURL(event.target.files[0]);
            $("#preview").fadeIn("fast").attr('src',tmppath);       
        });
        $(document).on('change','#client_pic' , function(event){ 

           var tmppath = URL.createObjectURL(event.target.files[0]);
            $("#preview1").fadeIn("fast").attr('src',tmppath);       
        });
    </script> 
    <div id="maps"></div>
    <script>
      // This example adds a search box to a map, using the Google Place Autocomplete
      // feature. People can enter geographical searches. The search box will return a
      // pick list containing a mix of places and predicted search terms.

      // This example requires the Places library. Include the libraries=places
      // parameter when you first load the API. For example:
      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

      function initAutocomplete() {
        var map = new google.maps.Map(document.getElementById('maps'), {
          center: {lat: -33.8688, lng: 151.2195},
          zoom: 13,
          mapTypeId: 'roadmap'
        });

        // Create the search box and link it to the UI element.
        var inputs = document.getElementById('per_addr');
        var searchBox = new google.maps.places.SearchBox(inputs);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(inputs);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
      }

    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAuXUoYwfNp7P41GYhP3OShn3MAFd0s_CY&libraries=places&callback=initAutocomplete" async defer></script>

   <!--  <?php 

        require_once "vendor/autoload.php";

        if (isset($_GET['confirm'])) {

            $basic  = new \Nexmo\Client\Credentials\Basic('f363d4fe', '9sXIs7IVx5JhBe4s');
            $client = new \Nexmo\Client($basic);

            $message = $client->message()->send([
                'to' => '+63'.$_GET['number'],
                'from' => 'AQUAE',
                'text' => strtoupper($_GET['station'])." DRIVER\n\nName: ".$_GET['name']."\nUsername: ".$_GET['username']."\nPassword: ".$_GET['password']."\n\n\nAQUAE -"
            ]);

            $response = $message->getResponseData();

            if($response['messages'][0]['status'] == 0) {
               
    ?>

                <script type="text/javascript">
                    window.location = "blank.php";
                </script>

    <?php

            } 

        }

    ?>  -->

     

</body>

</html>
