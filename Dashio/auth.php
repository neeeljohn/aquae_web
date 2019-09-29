<?php
require 'vendor/autoload.php';

$pusher = new Pusher\Pusher("4de9228ab3e254f06ee8",'db69ad6c420384787c61', '854516');

$socket_id = $_POST['socket_id'];
$channel_name = $_POST['channel_name'];

$auth = $pusher->socket_auth($channel_name, $socket_id);

echo ($auth);
?>	