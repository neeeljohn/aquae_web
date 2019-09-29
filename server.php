<?php
session_start();
// initializing variables
// $fname = "";
// $lname = "";
$username = "";
$email = "";
$addr = "";
$cont_num = "";
$Company = "";
// $company_logo = "";
$Business_permit = "";
$errors = array(); 

// connect to the database/
//
$db = mysqli_connect('localhost', 'root', '', 'aquae');

// REGISTER USER
if (isset($_POST['reg_clients'])) {
  // // receive all input values from the form
  // $fname = mysqli_real_escape_string($db, $_POST['fname']);
  // $lname = mysqli_real_escape_string($db, $_POST['lname']);
  $username = mysqli_real_escape_string($db, $_POST['username']);
  $email = mysqli_real_escape_string($db, $_POST['email']);
  $password_1 = mysqli_real_escape_string($db, $_POST['password_1']);
  $password_2 = mysqli_real_escape_string($db, $_POST['password_2']);
   $addr = mysqli_real_escape_string($db, $_POST['addr']);
   $cont_num = mysqli_real_escape_string($db, $_POST['cont_num']);
   $Company = mysqli_real_escape_string($db, $_POST['Company']);
   // $company_logo = mysqli_real_escape_string($db, implode(",", $_FILES['company_logo']['name']));
   $Business_permit = mysqli_real_escape_string($db, implode(",", $_FILES['Business_permit']['name']));

  // form validation: ensure that the form is correctly filled ...
  // by adding (array_push()) corresponding error unto $errors array
  // if (empty($fname)) { 
  //   array_push($errors, "First name is required");
  // }
  // if (empty($lname)) { 
  //   array_push($errors, "Last Name is required");
  // }
  if (empty($username)) { 
    array_push($errors, "Username is required");
  }
   if (empty($email)) { 
    array_push($errors, "Email is required"); 
  }
  if (empty($password_1)) { 
    array_push($errors, "Password is required");
  }
  if ($password_1 != $password_2) {
	array_push($errors, "The two passwords do not match");
  }
  if (empty($addr)) { 
    array_push($errors, "Address is required"); 
  }
  if (empty($cont_num)) { 
    array_push($errors, "Contact Number is required"); 
  }
  // first check the database to make sure 
  // a user does not already exist with the same username and/or email
  $user_check_query = "SELECT * FROM clients WHERE username='$username' OR email='$email' LIMIT 1";
  $result = mysqli_query($db, $user_check_query);
  $user = mysqli_fetch_assoc($result);
  
  if ($user) { // if user exists
    if ($user['username'] === $username) {
      array_push($errors, "Username already exists");
    }

    if ($user['email'] === $email) {
      array_push($errors, "email already exists");
    }
  }

  // Finally, register user if there are no errors in the form
  if (count($errors) == 0) {
  	$password = md5($password_1);//encrypt the password before saving in the database

  	$query = "INSERT INTO clients (fname, 
                                   lname, 
                                   username,
                                   email,  
                                   password, 
                                   addr, 
                                   cont_num,
                                   Company,
                                   company_logo,
                                   Business_permit,
                                   status)

  			  VALUES('".$fname."', 
                 '".$lname."',
                 '".$username."',
                 '".$email."', 
                 '".$password."',
                 '".$addr."', 
                 '".$cont_num."',
                 '".$Company."',
                 '".$company_logo."',
                 '".$Business_permit."',
                '".$status = "Deactivated"."')";

  // $name_file = $_FILES['reg_clients']['name'];
  // $tmp_name = $_FILES['reg_clients']['tmp_name'];
  // $local_image = "uploaded_files/";
  // $upload = move_uploaded_file($tmp_name, $local_image.$name_file);         

 //  $countfiles = count($_FILES['Business_permit']['name']);
 
 // // // Looping all files
 // for($i=0;$i<$countfiles;$i++){
 //   $filename = $_FILES['Business_permit']['name'][$i];
 //   $targetDir = __DIR__ . 'uploaded_files/'.$filename;
 //   // Upload file
 //   echo $_FILES['Business_permit']['tmp_name'][$i];
 //   move_uploaded_file($_FILES['Business_permit']['tmp_name'][$i],$targetDir);
 //    }
 // }
// if ($_SERVER['REQUEST_METHOD']=='POST'){
//   $i = 0;
//   while ($i<count($_FILES['reg_clients'] ['name'])) 
//   {
//     move_uploaded_file($_FILES['reg_clients']['tmp_name'][$i],$_FILES['reg_clients']['name'][$i]);
//     $i++;
//   }

// }



  	mysqli_query($db, $query);
  	 $_SESSION['username'] = $username;
  	 $_SESSION['success'];
    echo "<script>alert('Thank you for registering. Your registration must now be approved by an administrator. You will receive an email when the decision has been taken.');</script>";
    $data['message'] = "success";
    $pusher->trigger('my-channel', 'my-event', $data);
  	header('location: register.php?success'); //redirect to home pages
  }


// if(isset($_POST['save'])){


// // $query = "INSERT INTO clients (id, 
// //                                    prod_type, 
// //                                    username,
// //                                    email,  
// //                                    password, 
// //                                    addr, 
// //                                    cont_num,
// //                                    Company,
// //                                    company_logo,
// //                                    Business_permit,
// //                                    status)

// //           VALUES('".$fname."', 
// //                  '".$lname."',
// //                  '".$username."',
// //                  '".$email."', 
// //                  '".$password."',
// //                  '".$addr."', 
// //                  '".$cont_num."',
// //                  '".$Company."',
// //                  '".$company_logo."',
// //                  '".$Business_permit."',
// //                 '".$status = "Deactivated"."')";



// }
// if(isset($_POST['reg_clients'])){
//     // Include the database configuration file
//     // include_once 'dbConfig.php';
    
//     // File upload configuration
//     $targetDir = "uploaded_files/";
//     $allowTypes = array('jpg','png','jpeg','gif');
    
//     $statusMsg = $errorMsg = $insertValuesSQL = $errorUpload = $errorUploadType = '';
//     $files = implode(",", $_FILES['Business_permit']['name']);
//     $insert = $db->query("INSERT INTO clients (Business_permit) VALUES $files");
//     }
    // if(!empty(array_filter($_FILES['Business_permit']['name']))){
    //     foreach($_FILES['Business_permit']['name'] as $key=>$val){
    //         // File upload path
    //       $files = implode(",", $_FILES['Business_permit']['name']);
        //     $fileName = basename($_FILES['Business_permit']['name'][$key]);
        //     $targetFilePath = $targetDir . $fileName;
            
        //     // Check whether file type is valid
        //     $fileType = pathinfo($targetFilePath,PATHINFO_EXTENSION);
        //     if(in_array($fileType, $allowTypes)){
        //         // Upload file to server
        //         if(move_uploaded_file($_FILES["Business_permit"]["tmp_name"][$key], $targetFilePath)){
        //             // Image db insert sql
        //             $files  = implode(",", $_FILES['Business_permit']['name']);
        //             $insertValuesSQL .= "('".$fileName."',";
        //         }else{
        //             $errorUpload .= $_FILES['Business_permit']['name'][$key].', ';
        //         }
        //     }else{
        //         $errorUploadType .= $_FILES['Business_permit']['name'][$key].', ';
        //     }
        // }
        
//         if(!empty($files)){
//             // $insertValuesSQL = trim($insertValuesSQL,',');
//             // Insert image file name into database
//             $insert = $db->query("INSERT INTO clients (Business_permit) VALUES $files");
//             if($insert){
//                 $errorUpload = !empty($errorUpload)?'Upload Error: '.$errorUpload:'';
//                 $errorUploadType = !empty($errorUploadType)?'File Type Error: '.$errorUploadType:'';
//                 $errorMsg = !empty($errorUpload)?'<br/>'.$errorUpload.'<br/>'.$errorUploadType:'<br/>'.$errorUploadType;
//                 $statusMsg = "Files are uploaded successfully.".$errorMsg;
//             }else{
//                 $statusMsg = "Sorry, there was an error uploading your file.";
//             }
//         }
//     }else{
//         $statusMsg = 'Please select a file to upload.';
//     }
    
//     // Display status message
//     echo $statusMsg;
// }

// if(isset($_POST['edit'])){
//   mysqli_query($db, "UPDATE info SET fname='$fname', lname='$lname', addr=$addr, cont_num=$cont_num, email='$email', Company='$company' WHERE id=$id");

//   header('location:blank.php');

//   // $fname = mysqli_real_escape_string($_POST['fname']);
//   // $lname = mysqli_real_escape_string($_POST['fname']);
//   // $cont_num = mysqli_real_escape_string($_POST['cont_num']);
//   // $addr = mysqli_real_escape_string($_POST['addr']);
//   // $Company = mysqli_real_escape_string($_POST['Company']);
// }
//   $result = mysqli_query($db, "SELECT * FROM clients");

//login user in from login page
  }
if (isset($_POST['login'])) 
{
     $username = mysqli_real_escape_string($db, $_POST['username']);
     $password = mysqli_real_escape_string($db, $_POST['password']);

//ensure that form fields are filled properly
  if (empty($username)) { 
    array_push($errors, "Username is required");
  }
  if (empty($password)) { 
    array_push($errors, "Password is required"); 
  }





  if (count($errors) == 0 ) 
  {

    $password = md5($password); // encrpyt password with that database

    $queryClients = "SELECT * FROM clients WHERE username = '$username' AND password='$password' AND status = 'Active'";
    $resultClients = mysqli_query($db, $queryClients);

    $queryClientsErr = "SELECT * FROM clients WHERE username = '$username' AND password='$password' AND status = 'Deactivated'";
    $resultClientsErr = mysqli_query($db, $queryClientsErr);

    $queryAdmin = "SELECT * FROM admin WHERE username = '$username' AND password ='$password'";
    $resultAdmin = mysqli_query($db, $queryAdmin);

    $queryAdminErr = "SELECT * FROM admin WHERE username != '$username' AND password !='$password'";
    $resultAdminErr = mysqli_query($db, $queryAdminErr);
   

      if (mysqli_num_rows($resultClients) == 1 && mysqli_num_rows($resultAdmin) == 0) 
      {
        // echo $result;
        while($row = mysqli_fetch_assoc($resultClients)) 
        {
           $_SESSION['id'] = $row['id'];
           // echo print_r($row);
        }
        // login user 
        $_SESSION['username'] = $username;
        $_SESSION['success'];
        header('location: pages/index.php');
      }
      else if (mysqli_num_rows($resultClientsErr) == 1 && mysqli_num_rows($resultClients) == 0) 
      {
        array_push($errors, "Your account is disabled by administrator. You will receive an email when the decision has been taken.");
      }

      else if (mysqli_num_rows($resultClients) == 0 && mysqli_num_rows($resultAdmin) == 1) 
      {
          // login user 
          $_SESSION['username'] = $username;
          $_SESSION['success'];
          header('location: Dashio/index.php');
      }
      else if(mysqli_num_rows($resultAdminErr) == 1 && mysqli_num_rows($resultAdmin) == 0) 
      {
          array_push($errors, "Wrong username/password combination");
      }
      //  else if(mysqli_num_rows($resultAdminErr) == 1 || mysqli_num_rows($resultAdmin) == 0) 
      // {
      //     array_push($errors, "Wrong username/password combination");
      // }
  }
  else
  {
     array_push($errors, "Wrong username/password combination");
  }

}    
  function clients(){
    global $connection;

    $query = mysqli_query($connection, "SELECT * FROM clients");
    $clients_set = mysqli_query($connection, $query);
    confirm_query($clients_set);
    return $clients_set;
  }

//logout 
if (isset($_GET['logout'])) {
    session_destroy();
    session_unset($_SESSION);
    unset($_SESSION);
    header('location: ../login.php');
}

function conn() {
  try {
    return new PDO("mysql:host=localhost;dbname=aquae","root","");
  } catch(PDOException $e) {
    echo $e->getMessage();
  }
}

function chartData() {
  $sql = "SELECT SUM(pd.quantity) as y, DATE_FORMAT(pd.created_at, '%M') as a FROM produc_details pd  JOIN product p ON pd.prod_id = p.prod_id JOIN clients c ON c.id = pd.client_id WHERE pd.client_id = '".$_SESSION['id']."' GROUP BY  DATE_FORMAT(pd.created_at, '%M') ORDER BY DATE_FORMAT(pd.created_at, '%m')";
  $stmt = conn()->prepare($sql);
  $stmt->execute();
  $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
  return $rows;
}

function insertData($table, $data, $fields){
  $conn = conn();
  $value = array();
  foreach($data as $x) $value[] = "?";
  $fld = implode(",", $fields);
  $values = implode(",", $value);
  $sql = "INSERT INTO $table($fld) VALUES($values)";
  $stmt = $conn->prepare($sql);
  $stmt->execute($data);
  $conn = null; 
}

function selectProducts($id) {
  $conn = conn();
  $sql = "SELECT * FROM product JOIN clients ON product.id = clients.id WHERE product.id = ?";
  $stmt = $conn->prepare($sql);
  $stmt->execute(array($id));
  $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
  return $rows;
}

function getOrders() {
  $conn = conn();
  $sql = "SELECT orders.*, consumers.*, orders.water_type as orders_water_type, orders.mode_of_claiming as order_mode_of_claiming, product.* FROM orders JOIN product ON orders.prod_id = product.prod_id JOIN consumers ON orders.client_id = consumers.cons_id WHERE orders.status = 1";
  $stmt = $conn->prepare($sql);
  $stmt->execute();
  $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
  return $rows;
}

function getOrderses() {
  $conn = conn();
  $sql = "SELECT orders.*, consumers.*, orders.water_type as orders_water_type, orders.mode_of_claiming as order_mode_of_claiming, product.* FROM orders JOIN product ON orders.prod_id = product.prod_id JOIN consumers ON orders.client_id = consumers.cons_id WHERE orders.status = 2";
  $stmt = $conn->prepare($sql);
  $stmt->execute();
  $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
  return $rows;
}


// function selectProduct($id) {
//   $conn = conn();
//   $sql = "SELECT * FROM product JOIN clients ON product.id = clients.id
                                
//                                 WHERE product.prod_id = ?";
//   $stmt = $conn->prepare($sql);
//   $stmt->execute(array($id));
//   $rows = $stmt->fetch(PDO::FETCH_ASSOC);
//   return $rows;
// }

function updateProduct($table, $data, $fields, $fields_id){
  $conn = conn();
  $value = array();
  foreach($fields as $x) $value[] = $x."=?";
  $values = implode(",", $value);
  $sql = "UPDATE $table SET $values WHERE $fields_id = ?";
  $stmt = $conn->prepare($sql);
  $stmt->execute($data);
  $conn = null;
}

function deleteProduct($table, $fields_id, $id) {
  $conn = conn();
  $sql = "DELETE FROM $table WHERE $fields_id = ?";
  $stmt = $conn->prepare($sql);
  $stmt->execute($id);
  $conn = null;
}

// insert('product', array($id, $prod_price), array('id', 'prod_pic'));
// insert('clients', array(), array())

// if (isset($_POST['save']))
// {
//    $prod_pic = $_POST['prod_pic'];
//     $prod_type = $_POST['prod_type'];
//     $prod_price = $_POST['prod_price'];
//     $del_price = $_POST['del_price'];
//     $filtration = $_POST['filtration'];
//     $addr = $_POST['addr'];
//     $mop = $_POST['mop'];

//     $sql = "INSERT INTO product VALUES (?,?,?,?,?,?,?)";
//     $stmt = $pdo->prepare($sql);  
//     $stmt = execute();    

// //  }
// function addProduct($a,$b,$c,$d,$e,$f,$g){
//   $db = db();
//   $sql = "INSERT INTO product(prod_pic, prod_type, prod_price, delivery_price, mop, no_of_filter, address) VALUES(?,?,?,?,?,?,?)";
//   $stmt = $db->prepare($sql);
//   $stmt->execute(array($a,$b,$c,$d,$e,$f,$g));
//   $db = null;
//   return array($a,$b,$c,$d,$e,$f,$g);

// }


// function insertData(){
//   if (isset($_POST(['save'])))
//   {
//     $prod_pic = $_POST['prod_pic'];
//     $prod_type = $_POST['prod_type'];
//     $prod_price = $_POST['prod_price'];
//     $del_price = $_POST['del_price'];
//     $filtration = $_POST['filtration'];
//     $addr = $_POST['addr'];
//     $mop = $_POST['mopp'];

//      $sql = "INSERT INTO product (prod_pic,prod_type,prod_price,delivery_price,mop,no_of_filter,address)
//              VALUES ('".$prod_pic."','".$prod_type."','".$prod_price."','".$del_price."','".$filtration."','".$addr."','".$mop."')"

//   }

 
// }


// extract($_POST);
//     $error=array();
//     $extension=array("jpeg","jpg","png","gif");
//     foreach($_FILES["Business_permit"]["tmp_name"] as $key=>$tmp_name)
//             {
//                 $file_name=$_FILES["Business_permit"]["name"][$key];
//                 $file_tmp=$_FILES["Business_permit"]["tmp_name"][$key];
//                 $ext=pathinfo($file_name,PATHINFO_EXTENSION);
//                 if(in_array($ext,$extension))
//                 {
//                     if(!file_exists("photo_gallery/".$txtGalleryName."/".$file_name))
//                     {
//                         move_uploaded_file($file_tmp=$_FILES["files"]["tmp_name"][$key],"photo_gallery/".$txtGalleryName."/".$file_name);
//                     }
//                     else
//                     {
//                         $filename=basename($file_name,$ext);
//                         $newFileName=$filename.time().".".$ext;
//                         move_uploaded_file($file_tmp=$_FILES["files"]["tmp_name"][$key],"photo_gallery/".$txtGalleryName."/".$newFileName);
//                     }
//                 }
//                 else
//                 {
//                     array_push($error,"$file_name, ");
//                 }
//             }
// if(isset($_POST['reg_clients'])){
//  // Count total files
 
// } 
