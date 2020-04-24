<?php

    include __DIR__ . '/../data_dir/data.php';

    $fatturato = $graphs['team_efficiency'];

    $processed_data = [];
    $processed_data['tipo_grafico'] = $fatturato['type'];
    foreach ($fatturato['data'] as $team_name => $vendite_team) {
        $processed_data['team'][] = $team_name;
        $processed_data['vendite'][] = $vendite_team;
    }

    header('Content-Type: application/json');
    echo json_encode($processed_data);

?>
