<?php
  require __DIR__ . '/vendor/autoload.php';

  $options = array(
    'cluster' => 'ap1',
    'useTLS' => true
  );
  $pusher = new Pusher\Pusher(
    '958b012de13be1b3e1a7',
    '77a46ee459228c7e0152',
    '707634',
    $options
  );