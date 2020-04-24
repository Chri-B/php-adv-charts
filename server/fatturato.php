<?php

    include __DIR__ . '/../data_dir/data.php';

    $fatturato = $graphs['fatturato'];
    $processed_data = [];
    $processed_data['tipo_grafico'] = $fatturato['type'];
    $processed_data['vendite'] = $fatturato['data'];

    header('Content-Type: application/json');
    echo json_encode($processed_data);

?>
