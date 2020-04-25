
var arrayMesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];

// ------------- STEP 3 -------------
$.ajax({
    url: 'server/fatturato.php',
    method: 'GET',
    success: function (data) {
        createChart('#line-chart', data.tipo_grafico, arrayMesi, data.vendite, 'rgba(255, 0, 0, 0.3)');
    },
    error: function (err) {
        alert('Errore Comunicazione');
    }
});

$.ajax({
    url: 'server/fatturato_by_agent.php',
    method: 'GET',
    success: function (data) {
        createChart('#pie-chart', data.tipo_grafico, data.nomi, data.vendite, ['yellow', 'green', 'blue', 'red']);
    },
    error: function (err) {
        alert('Errore Comunicazione');
    }
});

$.ajax({
    url: 'server/team_efficiency.php',
    method: 'GET',
    success: function (data) {
        createChartTriplo('#team-line-chart', data.tipo_grafico, arrayMesi, data.vendite[0], data.team[0], data.vendite[1], data.team[1], data.vendite[2], data.team[2], ['yellow', 'green', 'blue', 'red']);
    },
    error: function (err) {
        alert('Errore Comunicazione');
    }
});

// ------------- FINE STEP 3 -------------


// funzione per creazione grafici
function createChart(selettoreCanvas, tipoGrafico, labels, data, colore_sfondo) {
    var lineChart = new Chart($(selettoreCanvas), {
        type: tipoGrafico,
        data: {
            labels: labels,
            datasets: [{
                label: 'Vendite Mensili Anno 2020',
                data: data,
                backgroundColor: colore_sfondo
            }]
        }
    });
}

// funzione per creazione grafico line con 3 dataset
function createChartTriplo(selettoreCanvas, tipoGrafico, labels, dataPrimo, nomePrimo, dataSecondo, nomeSecondo, dataTerzo, nomeTerzo) {
    var lineChart = new Chart($(selettoreCanvas), {
        type: tipoGrafico,
        data: {
            labels: labels,
            datasets: [{
                label: nomePrimo,
                data: dataPrimo,
                backgroundColor: 'rgba(110, 110, 110, 0.3)',
                borderColor: 'blue'
            },
            {
                label: nomeSecondo,
                data: dataSecondo,
                backgroundColor: 'rgba(110, 110, 110, 0.3)',
                borderColor: 'red'
            },
            {
                label: nomeTerzo,
                data: dataTerzo,
                backgroundColor: 'rgba(110, 110, 110, 0.3)',
                borderColor: 'green'
            }]
        }
    });
}
