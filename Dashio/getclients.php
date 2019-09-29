<?php include('../server.php'); 

 $sql = "SELECT * FROM clients";

 $result = $db->query($sql);

$i = 0;
$data = array();
foreach ($result as $key) {
	$data[$i] = $key;
	$i++;
}

echo json_encode($data);