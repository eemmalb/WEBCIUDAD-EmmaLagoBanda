/**
 * Función para generar el gráfico de tarta
 */
function cargaGraficoTarta() {
    var datos = {
        labels: ["Ovejas", "Humanos"],
        datasets: [{
            label: "Islandia",
            backgroundColor: ["rgba(83, 180, 210, 0.5)", "#12111b"],
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
                    text: "Las ovejas forman parte esencial del paisaje islandés: por cada persona, hay más de dos ovejas.",
                    color: "#ffffff",
                    font: {
                        family: "Mulish, sans-serif",
                        size: 14,
                    },
                    padding: {
                        top: 12,
                        bottom: 16
                    },
                    align: "center"
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
