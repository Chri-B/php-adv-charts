<?php

    include __DIR__ . '/../data_dir/data.php';

    header('Content-Type: application/json');

    echo json_encode($graphs);

?>
