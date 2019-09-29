<?php

	include 'server.php';

	$data = chartData();

	echo json_encode($data);