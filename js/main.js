$(document).ready(function() {

    $.ajax({
        url: 'server_line_chart.php',
        method: 'GET',
        success: function(data) {
            var arrayMesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
            createLineChart(arrayMesi, data);
        },
        error: function (err) {
            alert('Errore comunicazione');
        }
    });


    // funzione per creazione grafico Line - variabili in ingresso: labels (mesi) e dati
    function createLineChart(arrayMesi, data) {
        var lineChart = new Chart($('#line-chart'), {
            type: 'line',
            data: {
                labels: arrayMesi,
                datasets: [{
                    label: 'Vendite Mensili Anno 2020',
                    backgroundColor: 'rgba(255, 0, 0, 0.3)',
                    borderColor: 'rgb(255, 0, 0)',
                    data: data,
                    lineTension: 0
                }]
            }
        });
    }


});
