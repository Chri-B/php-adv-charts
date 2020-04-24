<?php

    include __DIR__ . '/../data_dir/data.php';

    $fatturato = $graphs['fatturato_by_agent'];

    $processed_data = [];
    $processed_data['tipo_grafico'] = $fatturato['type'];
    foreach ($fatturato['data'] as $agents_name => $vendite_agent) {
        $processed_data['nomi'][] = $agents_name;
        $processed_data['vendite'][] = $vendite_agent;
    }

    header('Content-Type: application/json');
    echo json_encode($processed_data);

?>
