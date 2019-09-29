<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" type="image/png" href="../pages/profile/Logo.png" />

    <title>Products - Aquae</title>
    <!-- <script type="text/javascript" src="lib/bootstrap-datepicker.js"></script>
    <link rel="stylesheet" type="text/css" href="lib/bootstrap-datepicker.css" /> -->
    <script type="text/javascript" src="lib/site.js"></script>
    <link rel="stylesheet" type="text/css" href="lib/site.css" />
    <!-- Bootstrap Core CSS -->
    <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="../vendor/metisMenu/metisMenu.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="../dist/css/sb-admin-2.css" rel="stylesheet">

    <!-- Morris Charts CSS -->
    <link href="../vendor/morrisjs/morris.css" rel="stylesheet">
    <link href="style.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="..\vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
   
   <!--  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script> -->
   
    <!-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script> -->
    <!-- <script src="../vendor/jquery/jquery.min.js"></script> -->

   
    <script src="..\vendor/bootstrap/js/bootstrap.min.js"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    
    <script src="https://www.gstatic.com/firebasejs/6.1.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/6.1.0/firebase-messaging.js"></script>
    <script src="https://www.gstatic.com/firebasejs/6.1.0/firebase-database.js"></script>
    <script src="https://www.gstatic.com/firebasejs/6.2.3/firebase-storage.js"></script>
    <script src="https://js.pusher.com/4.4/pusher.min.js"></script>
    <script type="text/javascript" src="..\config.js"></script>
    <script type="text/javascript">
        if (sessionStorage.getItem("client_id") === null) {
            window.location = "../login/index.php";
        }
    </script>
    <!--  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script> -->
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
        

        



    
   <!--  <link rel="stylesheet" type="text/css" href="">
      <script type="text/javascript">
     function loadImage(){
        var loadImg = document.getElementById('preview');
        loadImg.src = URL.createObjectURL(event.target.files[0]);
    }

    function loadEditedImage(id){
        var loadImg = document.getElementById('editPreview'+id);
        loadImg.src = URL.createObjectURL(event.target.files[0]);
    }
    </script>  -->
    
     

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>

    <div id="wrapper" style="overflow-y: hidden;">

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
                    
                <!-- /.dropdown -->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-bell fa-fw"></i> <i class="fa fa-caret-down"></i>
                    </a>
                      <ul class="dropdown-menu dropdown-alerts">
                        <li>
                            <a href="tables.php">
                                <div>
                                    <i class="fa fa-shopping-cart fa-fw"></i> You have a new order
                                </div>
                            </a>
                        </li>
                        
                    </ul>
                    <!-- /.dropdown-alerts -->
                </li>
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
                        <li class="sidebar-search">
                           <!--  <h2 style=" text-align: center;" id="company_desu"></h2> -->
                            <div class="input-group custom-search-form">
                               
                            </div>
                            <!-- /input-group -->
                        </li>
                        <li>
                            <div class="panel-heading">
                            <div class="row">
                                <div class="col-xs-3">
                                   <h1 style="color: #337ab7">PHP</h1>
                                </div>
                                <div class="col-xs-9 text-right">
                                    <div class="huge" id="walletBalance" style="margin-top: 12px; color:#337ab7"></div>
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
                                    <a href="order_history.php"> Standard History</a>
                                </li>
                                <li>
                                    <a href="schedule_history.php"> Schedule History</a>
                                </li>
                            </ul>
                        </li>
                        <!-- <li>
                            <a href="order_history.php"><i class="fa fa-history fa-fw"></i> Order History</a>
                        </li> -->
                       <!--  <li>
                            <a href="wallet.php"><i class="fa fa-money"></i> Wallet</a>
                        </li> -->
                        <li>
                            <a href="morris.php"><i class="fa fa-bar-chart-o fa-fw"></i> Reports</a>
                        </li>
                        <li>
                            <a href="ratings_feedbacks.php"><i class="fa fa-star fa-fw"></i> Ratings & Feedbacks</a>
                        </li>
                        <!-- <li>
                            <a href="forms.php"><i class="fa fa-edit fa-fw"></i> Forms</a>
                        </li> -->
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
                    <h1 class="page-header">Product</h1>
                   <div class="container">
                    <span data-toggle="tooltip" data-placement="right" title="All product has been added">
                        <button id="addproduct" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Add Product</button>
                    </span>
                   
                      <div class="modal fade" id="myModal" role="dialog">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <button type="button" class="close" data-dismiss="modal">&times;</button>
                              <h4 class="modal-title">Add Product</h4>
                            </div>
                            <div class="modal-body">
                                
                                <div class="form-group">
                                    <center>
                                    <!-- <input type="file" class="btn-primary" style="width: 88%;" name="" placeholder="Price"><br> -->
                                    <div class="form-group">
                                        <label for="prod_pic" class="hover">
                                            <img src="..\images/add.png" id="preview" data-tooltip="true" title="insert" data-animation="false" width="200px;" height="200px;" >
                                            <input type="file" name="prod_pic" id="prod_pic" style="visibility: hidden;">
                                        </label>
                                    </div>

                                </center>
                                    <center>
                                       

                                        <input id="hidden" type="hidden">
                                        <select class="form-control" style="width: 88%;" name="prod_type" id="prod_type">
                                            <option selected="selected" disabled>Select Product type</option>
                                            <option value="gallon">Gallon</option>
                                            <option value="bottled">Bottled</option>
                                            <option value="container">Container</option>
                                        </select><br>
                                    </center>
                                        <strong style="margin-left: 33px; ">Choose your available service type:</strong>
                                        
                                        <div style="width: 88%; margin-top: 10px; margin-bottom: -10px; margin-left: 50px;" id="service_Type">
                                         <div class="row" id="addProductsss">

                                            <!-- <div class="col-sm-6">
                                               <h3 id="first_water">Alkaline</h3>
                                               <input type="checkbox" class="checks" value="Refill" id="test1"  name="service_Type[]" checked> &nbsp;Refill &nbsp;&nbsp;
                                                <input type="number" min="1" oninput="validity.valid||(value='');" id="refill_price"  placeholder="Price..." min="0">
                                               <br><input type="checkbox" class="checks" value="Sale" id="test2" name="service_Type[]"> &nbsp;Sale &nbsp;&nbsp;
                                                <input type="number" min="1" oninput="validity.valid||(value='');" id="sale_price" onkeyup="keywar();" min="0" placeholder="Price..." style="margin-left: 6px; margin-top: 2px;" ><br><br><br><p id="message" style="text-align: center; color: red;"></p>

                                                <h3>Alkaline</h3>
                                               <input type="checkbox" class="checks" value="Refill" id="test1"  name="service_Type[]" checked> &nbsp;Refill &nbsp;&nbsp;
                                                <input type="number" min="1" oninput="validity.valid||(value='');" id="refill_price"  placeholder="Price..." min="0">
                                               <br><input type="checkbox" class="checks" value="Sale" id="test2" name="service_Type[]"> &nbsp;Sale &nbsp;&nbsp;
                                                <input type="number" min="1" oninput="validity.valid||(value='');" id="sale_price" onkeyup="keywar();" min="0" placeholder="Price..." style="margin-left: 6px; margin-top: 2px;" ><br><br><br><p id="message" style="text-align: center; color: red;"></p>
                                            </div>
                                             <div class="col-sm-6">
                                               <h3 id="">Alkaline</h3>
                                               <input type="checkbox" class="checks" value="Refill" id="test1"  name="service_Type[]" checked> &nbsp;Refill &nbsp;&nbsp;
                                                <input type="number" min="1" oninput="validity.valid||(value='');" id="refill_price"  placeholder="Price..." min="0">
                                               <br><input type="checkbox" class="checks" value="Sale" id="test2" name="service_Type[]"> &nbsp;Sale &nbsp;&nbsp;
                                                <input type="number" min="1" oninput="validity.valid||(value='');" id="sale_price" onkeyup="keywar();" min="0" placeholder="Price..." style="margin-left: 6px; margin-top: 2px;" ><br><br><br><p id="message" style="text-align: center; color: red;"></p>

                                                <h3>Alkaline</h3>
                                               <input type="checkbox" class="checks" value="Refill" id="test1"  name="service_Type[]" checked> &nbsp;Refill &nbsp;&nbsp;
                                                <input type="number" min="1" oninput="validity.valid||(value='');" id="refill_price"  placeholder="Price..." min="0">
                                               <br><input type="checkbox" class="checks" value="Sale" id="test2" name="service_Type[]"> &nbsp;Sale &nbsp;&nbsp;
                                                <input type="number" min="1" oninput="validity.valid||(value='');" id="sale_price" onkeyup="keywar();" min="0" placeholder="Price..." style="margin-left: 6px; margin-top: 2px;" ><br><br><br><p id="message" style="text-align: center; color: red;"></p>
                                            </div> -->
                                        </div>
                                        <input style="width: 40%; margin-top: 10px; margin-bottom: -10px; margin-left: 15px;" type="number" placeholder="Minimum order.." id="minimum_order" min="1" oninput="validity.valid||(value='');" required>
                                        
                                        <input style="width: 40%; margin-top: 10px; margin-bottom: -10px; margin-left: 39px; margin-right: 15px;" type="number" placeholder="Maximum order.." id="maximum_order" min="1" oninput="validity.valid||(value='');" onkeyup="minimax();">
                                        <br><br><p id="mess" style="text-align: center; color: red;"></p>
                                       
                                </div>
                            </div>
                            <div class="modal-footer">
                                <div id="prods">
                                    

                                </div>
                                
                            </div>
                          </div>
                          
                        </div>
                      </div>
                   
                   </div>
                </div>
                
            
               
           
                </div>

                <div class="row" id="body">
                   
                </div>

                 <!-- EDIT -->
                    <script src="../vendor/jquery/jquery.min.js"></script>
                    <script src="../vendor/bootstrap/js/bootstrap.min.js"></script>
                    <script src="../vendor/metisMenu/metisMenu.min.js"></script>
                    <script src="../dist/js/sb-admin-2.js"></script>
                 
               <!--  <script>
                  $(document).ready(function(){
                    $('[data-toggle="tooltip"]').tooltip();   
                  });
                </script> -->
                <script type="text/javascript">
                //add    


                $(document).on('change','#prod_pic' , function(event){ 

                   var tmppath = URL.createObjectURL(event.target.files[0]);
                    $("#preview").fadeIn("fast").attr('src',tmppath);       
                });
                
                $(document).ready(function(){


                    $("#addproduct").on("click", function() {
                        var hid = $("#hidden").val();
                        var cars = hid.split(',');


                        for (var i = 0; i < cars.length; i++) { 
                            $("#prod_type option[value='"+cars[i]+"']").remove();
                        }
                    });
                });

                function minimax(){

                var min = document.getElementById('minimum_order').value;
                var max = document.getElementById('maximum_order').value;
                var mess = document.getElementById('mess');
                    if (min > max){
                        mess.innerHTML = "Maximum must be greater than Minimum";
                        document.getElementById('saveBtn').disabled = true;
                    }else{
                        mess.innerHTML = "";
                        document.getElementById('saveBtn').disabled = false;
                    }   

                }

                function keywar(){

                var sale = document.getElementById('sale_price').value;
                var refill = document.getElementById('refill_price').value;
                var messages = document.getElementById('message');
                    if (sale == ""){
                        messages.innerHTML = "";
                        document.getElementById('saveBtn').disabled = true;
                    }
                    else if (refill > sale){
                        messages.innerHTML = "Price of sale is greater than refill.";
                        document.getElementById('saveBtn').disabled = true;
                    }

                    else{
                        messages.innerHTML = "";
                        document.getElementById('saveBtn').disabled = false;
                    }   

                }

                $("#hide").click(function(){
                  $("p").hide();
                });

                $("#show").click(function(){
                  $("p").show();
                });

                </script>  
</body>

</html>