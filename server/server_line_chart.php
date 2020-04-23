<?php

    include __DIR__ . '/../data_dir/database.php';

    header('Content-Type: application/json');

    echo json_encode($database);

?>
