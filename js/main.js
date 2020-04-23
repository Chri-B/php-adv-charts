
var arrayMesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];

// ------------- STEP 1 -------------
// $.ajax({
//     url: 'server/server_line_chart.php',
//     method: 'GET',
//     success: function(data) {
//         createLineChart('#line-chart-primo', arrayMesi, data);
//     },
//     error: function (err) {
//         alert('Errore comunicazione');
//     }
// });
// ------------- FINE STEP 1 -------------


// ------------- STEP 2 -------------
$.ajax({
    url: 'server/server_graphs.php',
    method: 'GET',
    success: function (data) {
        for (var graph in data) {
            var singleObject = data[graph];
            if (singleObject['type'] == 'line') {
                var venditeAnno = singleObject['data'];
                createLineChart('#line-chart', arrayMesi, venditeAnno);
            } else if (singleObject['type'] == 'pie') {
                var agents = [];
                var venditeAgents = [];
                for (var agent in singleObject['data']) {
                    agents.push(agent);
                    venditeAgents.push(singleObject['data'][agent]);
                }
                createPieChart('#pie-chart', agents, venditeAgents);
            }
        }
    },
    error: function (err) {
        alert('Errore comunicazione');
    }
});
// ------------- FINE STEP 2 -------------


// funzione per creazione grafico Line
function createLineChart(selettoreCanvas, arrayMes, data) {
    var lineChart = new Chart($(selettoreCanvas), {
        type: 'line',
        data: {
            labels: arrayMes,
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

// funzione per creazione grafico Pie
function createPieChart(selettoreCanvas, labels, dati) {
    var pieChart = new Chart($(selettoreCanvas), {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Vendite Mensili',
                data: dati,
                backgroundColor: ['lightgreen', 'lightblue', 'lightcoral', 'yellow']
            }]
        },
    });
}
