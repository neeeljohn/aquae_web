<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Aquae - Product</title>


   
    <!-- <script type="text/javascript" src="lib/bootstrap-datepicker.js"></script>
    <link rel="stylesheet" type="text/css" href="lib/bootstrap-datepicker.css" /> -->
    <script type="text/javascript" src="lib/site.js"></script>
    <link rel="stylesheet" type="text/css" href="lib/site.css" />
    <!-- Bootstrap Core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="vendor/metisMenu/metisMenu.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="dist/css/sb-admin-2.css" rel="stylesheet">

    <!-- Morris Charts CSS -->
    <link href="vendor/morrisjs/morris.css" rel="stylesheet">
    <link href="style.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <!-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script> -->
    <script src="vendor/jquery/jquery.min.js"></script>

   
    <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    
    <script src="https://www.gstatic.com/firebasejs/6.1.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/6.1.0/firebase-database.js"></script>
    <script type="text/javascript" src="config.js"></script>

    
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
                <a class="navbar-brand" href="index.php"><img src="..\logo/withname.png" style="width: 50%; margin-top: -15px;"></a>
            </div>
            <!-- /.navbar-header -->

            <ul class="nav navbar-top-links navbar-right">
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
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
                    <!-- /.dropdown-messages -->
                </li>
                <!-- /.dropdown -->
                <li class="dropdown">
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
                    <!-- /.dropdown-tasks -->
                </li>
                <!-- /.dropdown -->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-bell fa-fw"></i> <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-alerts">
                        <li>
                            <a href="#">
                                <div>
                                    <i class="fa fa-comment fa-fw"></i> New Comment
                                    <span class="pull-right text-muted small">4 minutes ago</span>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i class="fa fa-twitter fa-fw"></i> 3 New Followers
                                    <span class="pull-right text-muted small">12 minutes ago</span>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i class="fa fa-envelope fa-fw"></i> Message Sent
                                    <span class="pull-right text-muted small">4 minutes ago</span>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i class="fa fa-tasks fa-fw"></i> New Task
                                    <span class="pull-right text-muted small">4 minutes ago</span>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i class="fa fa-upload fa-fw"></i> Server Rebooted
                                    <span class="pull-right text-muted small">4 minutes ago</span>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a class="text-center" href="#">
                                <strong>See All Alerts</strong>
                                <i class="fa fa-angle-right"></i>
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
                        <li><a href="..\login.php"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
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
                            <div class="input-group custom-search-form">
                                <input type="text" class="form-control" placeholder="Search...">
                                <span class="input-group-btn">
                                <button class="btn btn-default" type="button">
                                    <i class="fa fa-search"></i>
                                </button>
                            </span>
                            </div>
                            <!-- /input-group -->
                        </li>
                        <li>
                            <a href="index.php"><i class="fa fa-dashboard fa-fw"></i> Dashboard</a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-bar-chart-o fa-fw"></i> Sales Chart<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                
                                <li>
                                    <a href="morris.php">Morris.js Charts</a>
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        <li>
                            <a href="tables.php"><i class="fa fa-table fa-fw"></i> Orders</a>
                        </li>
                        <li>
                            <a href="accepted_orders.php"><i class="fa fa-table fa-fw"></i> Accepted Orders</a>
                        </li>
                         <li>
                            <a href="order_history.php"><i class="fa fa-table fa-fw"></i> Order History</a>
                        </li>
                         <li>
                            <a href="product.php"><i class="fa fa-file-text fa-fw"></i> Products</a>
                        </li>
                        <!-- <li>
                            <a href="forms.php"><i class="fa fa-edit fa-fw"></i> Forms</a>
                        </li> -->
                        <li>
                            <a href="blank.php"><i class="fa fa-files-o fa-fw"></i> User Profile<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a href="blank.php">Profile</a>
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
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
                    <button class="btn btn-primary" data-toggle="modal" data-target="#myModal">Add Product</button>
                    <form  method="POST" enctype="multipart/form-data">
                      <div class="modal fade" id="myModal" role="dialog">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <button type="button" class="close" data-dismiss="modal">&times;</button>
                              <h4 class="modal-title">Add Product</h4>
                            </div>
                            <div class="modal-body">
                                 <form method="POST" enctype="multipart/form-data">
                                <div class="form-group">
                                    <center>
                                    <!-- <input type="file" class="btn-primary" style="width: 88%;" name="" placeholder="Price"><br> -->
                                 <!--    <div class="form-group">
                                        <label for="image" class="hover">
                                            <img src="..\images/add.png" id="preview" data-tooltip="true" title="insert" data-animation="false" width="200px;" height="200px;" >
                                            <input type="file" name="prod_pic" onchange="loadImage(event)" style="visibility: hidden;" id="image">
                                        </label>
                                    </div> -->
                                   <!--  <select class="form-control" style="width: 88%;" name="prod_type">
                                        <option selected="selected" disabled>Select Product type</option>
                                        <option value="Gallon Size">Gallon Size</option>
                                        <option value="Bottled Size">Bottled Size</option>
                                        <option value="Round Container Size">Round Container Size</option>
                                    </select><br> -->
                                    <!-- <div class="form-control" style="width: 60%;">
                                       <input type="checkbox" value="Alkaline"  name="water_type[]">Alkaline
                                       <input type="checkbox" value="Distilled"  name="water_type[]">Distilled
                                       <input type="checkbox" value="Mineral"  name="water_type[]">Mineral
                                       <input type="checkbox" value="Purified"  name="water_type[]">Purified
                                    </div><br> -->
                                    
                                   <input type="text" class="form-control" id="prod_price" style="width: 88%;" name="prod_price" placeholder="Price"><br>
                                   <input type="text" class="form-control" id="express_price" style="width: 88%;" name="express_price" placeholder="Express Delivery Price"><br>
                                   <input type="text" class="form-control" id="delivery_price" style="width: 88%;" name="delivery_price" placeholder="Delivery Price"><br>
                                  <!--  Available time for same day delivery(hh:mm)<input type="time" class="form-control" style="width: 50%;" name="same_day"><br> -->
                                   <!-- <input type="text" class="form-control" style="width: 88%;" name="no_of_filter" placeholder="No. of Filtration"><br>

                                   <input type="text" class="form-control" style="width: 88%;" name="address" placeholder="Complete Address"><br> -->
                                   <!-- <h4>Mode of payment</h4>
                                   <div class="form-control" style="width: 50%; ">

                                    Paypal &nbsp;<input type="checkbox" value="Paypal"  name="mop[]" style="transform: scale(2);">
                                    &nbsp;&nbsp;Cash on delivery &nbsp;<input type="checkbox" value="COD" name="mop[]" style="transform: scale(2);">
                                   </div> -->
                                   </center>
                                </div>
                            </div>
                            <div class="modal-footer">
                             
                                <button type="submit" class="btn btn-primary" name="save_product" onclick="product()">Save</button>
                                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                              </form>
                             
                            </div>
                          </div>
                          
                        </div>
                      </div>
                    </form>
                   </div>
                </div>
            
                <!-- EDIT -->
            <form  method="POST" enctype="multipart/form-data">
                      <div class="modal fade" id="editModal" role="dialog">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <button type="button" class="close" data-dismiss="modal">&times;</button>
                              <h4 class="modal-title">Edit Product</h4>
                            </div>
                            <div class="modal-body">
                                 <form method="POST" enctype="multipart/form-data">
                                <div class="form-group">
                                    <center>
                                    <!-- <input type="file" class="btn-primary" style="width: 88%;" name="" placeholder="Price"><br> -->
                                    <div class="form-group">
                                        <label for="image" class="hover">
                                            <img src="..\images/add.png" id="editPreview" data-tooltip="true" title="insert" data-animation="false" >
                                            <input type="file" name="prod_pic" onchange="loadImage(event)" style="visibility: hidden;" id="image">
                                        </label>
                                    </div>
                                    <select class="form-control" id="prod_type" style="width: 88%;" name="prod_type">
                                        <option selected="selected" disabled>Select Product type</option>
                                        <option value="Gallon Size">Gallon Size</option>
                                        <option value="Bottled Size">Bottled Size</option>
                                        <option value="Round Container Size">Round Container Size</option>
                                    </select><br>
                                    <div class="form-control" style="width: 88%;">
                                         <input type="checkbox" value="Alkaline" class="water_type" name="water_type[]">Alkaline
                                   <input type="checkbox" value="Distilled" class="water_type"  name="water_type[]">Distilled
                                   <input type="checkbox" value="Mineral" class="water_type" name="water_type[]">Mineral
                                   <input type="checkbox" value="Purified" class="water_type" name="water_type[]">Purified
                                    </div><br>
                                  
                                   <input type="text" class="form-control" style="width: 88%;" id="prod_price" name="prod_price" placeholder="Price"><br>
                                   <input type="text" class="form-control" style="width: 88%;" id="express_price" name="express_price" placeholder="Express Delivery Price"><br>
                                   <input type="text" class="form-control" style="width: 88%;" id="delivery_price" name="delivery_price" placeholder="Delivery Price"><br>
                                   <input type="text" class="form-control" style="width: 88%;" id="no_of_filter" name="no_of_filter" placeholder="No. of Filtration"><br>
                                   <input type="text" class="form-control" style="width: 88%;" id="address" name="address" placeholder="Complete Address"><br>
                                    <select class="form-control" style="width: 88%;" id="mop" name="mop">
                                        <option selected="selected" disabled>Mode of payment</option>
                                        <option value="Paypal">Paypal</option>
                                        <option value="Cash on delivery">Cash on delivery</option>
                                    </select>
                                   </center>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <input type="hidden" name="prod_id" id="prod_id">
                                <button type="submit" class="btn btn-primary" name="update">Save</button>
                                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                              </form>
                             
                            </div>
                          </div>
                          

                   

            </div> 
        </div>

       
    </div>

    <script type="text/javascript">


        
            // var frst = document.querySelector("#min_value");
            // var secnd = document.querySelector("#max_value");
            // var para = document.createElement("p");
            // function blr(){
            //   var ab = frst.value;
            //   var vc = secnd.value;
            //   if(ab == "" && vc == ""){
            //   para.textContent = "Please enter value in both.";
            //   document.body.appendChild(para);
            //   }
            //   else if(ab >= vc){
            //   para.textContent = "Value present in first input is greater then second.";
            //   document.body.appendChild(para);
            //   }
            //   else if(vc >= ab){
            //     para.textContent = "Value present in Second input is greater then First.";
            //   document.body.appendChild(para);
            //   }
            // }
            // secnd.addEventListener("blur",blr);
    </script>

    <!-- 


        </div>

    </div> -->

    <!-- jQuery -->
   

    <!-- Metis Menu Plugin JavaScript -->
    <!-- <script src="../vendor/metisMenu/metisMenu.min.js"></script> -->

    <!-- Morris Charts JavaScript -->
    <!-- <script src="../vendor/raphael/raphael.min.js"></script>
    <script src="../vendor/morrisjs/morris.min.js"></script>
    <script src="../data/morris-data.js"></script> -->

    <!-- Custom Theme JavaScript -->
    <!-- <script src="../dist/js/sb-admin-2.js"></script>
    <script type="text/javascript" src="..\config.js"> -->

         

       <!--  // function editProduct(id){
        //     $.ajax({
        //         url: 'http://localhost/aquae4/pages/product.php',
        //         type: 'get',
        //         dataType: 'json',
        //         data: {
        //             'getProductQuery' : id,
        //         },
        //         cache:false,
        //         success: function(res) {
        //             $('#editPreview').attr('src', '../../'+res.prod_pic);
        //             $('#prod_type').val(res.prod_type);
        //             var water_type = res.water_type.split(",");
        //             $('.water_type').each(function() {
        //                     var water_value = $(this).val();
        //                     var checkbox = $(this);
        //                 $.each(water_type, function(i) {
        //                     if (water_value == water_type[i]) {
        //                         checkbox.prop('checked', true);
        //                     }
        //                 });
        //             });

        //             $('#mop').val(res.mop);
        //             $('#prod_price').val(res.prod_price);
        //             $('#express_price').val(res.express_price);
        //             $('#delivery_price').val(res.delivery_price);
        //             $('#no_of_filter').val(res.no_of_filter);
        //             $('#address').val(res.address);
        //             $('#prod_id').val(res.prod_id);

        //             
        //         }
        //     });
        // // }
        // $('#editModal').modal('show');

        //   function deleteProduct(id, table, field_id){
        //     $.ajax({
        //         url: 'http://localhost/aquae4/pages/product.php',
        //         type: 'get',
        //         data: {
        //              'getDeleteQuery': id,
        //              'tableFieldId': field_id,
        //              'deleteTable': table
        //         },
        //         cache:false,
        //         success: function(res) {
        //             console.log(res);
        //         swal({
        //           title: "Deleted",
        //           text: "You've deleted this product!",
        //           icon: "warning",
        //           button: false,
        //           timer: 1000
        //         }).then(function(){
        //             location.reload();
        //         });
        //         }
        //     });
        // } -->
    <!-- </script> -->
    
     
    
</body>

</html>