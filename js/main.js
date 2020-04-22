$(document).ready(function() {

    $.ajax({
        url: 'server_line_chart.php',
        method: 'GET',
        success: function(data) {
            var mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
            var lineChart = new Chart($('#line-chart'), {
                type: 'line',
                data: {
                    labels: mesi,
                    datasets: [{
                        label: 'Vendite Mensili Anno 2020',
                        backgroundColor: 'rgba(255, 0, 0, 0.3)',
                        borderColor: 'rgb(255, 0, 0)',
                        data: data,
                        lineTension: 0
                    }]
                }
            });
        },
        error: function (err) {
            alert('Errore comunicazione');
        }
    });


});
