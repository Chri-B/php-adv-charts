<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>php-adv-charts</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
        <link rel="stylesheet" href="css/master.css">
    </head>
    <body>
        <?php
            $level = $_GET['level'];
        ?>
        <div class="container">
            <?php if ($level == '' || $level == 'guest') {; ?>
                <canvas id="line-chart"></canvas>
            <?php } elseif ($level == 'employee') {; ?>
                <canvas id="line-chart"></canvas>
                <canvas id="pie-chart"></canvas>
            <?php } elseif ($level == 'clevel') {; ?>
                <canvas id="line-chart"></canvas>
                <canvas id="pie-chart"></canvas>
                <canvas id="team-line-chart"></canvas>
            <?php }; ?>
        </div>

        <script src="js/main.js" charset="utf-8"></script>
    </body>
</html>
