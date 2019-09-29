<?php 

require('server.php');
$query=mysqli_query($db,"UPDATE acc_activation set status='".$_POST['val']."' where id='".$_POST['id']."'");

if($query)
{
	$q=mysqli_query($conn, "Select * from acc_activation where id='".$_POST['id']."'");
	$data=mysqli_fetch_assoc($query);
	echo $data['$status'];
}

?>