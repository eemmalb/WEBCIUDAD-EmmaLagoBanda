/**
 * Función para generar el gráfico de tarta
 */
function cargaGraficoTarta() {
    var datos = {
        labels: ["323.000", "800.000"],
        datasets: [{
            label: "Islandia",
            backgroundColor: ["#D81E5B", "#F76C9A", "#F52268", "#C21B53"],
            data: [800.000, 323.000]
        }]
    };

    var config = {
        type: "pie",
        data: datos,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: "Las ovejas forman parte esencial del paisaje islandés: por cada persona, más de dos ovejas."
                }
            }
        }
    };
    var grafico = $("#tarta")[0].getContext("2d");
    new Chart(grafico, config);
}


$(document).ready(function () {
    cargaGraficoTarta();
});
