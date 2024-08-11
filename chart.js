// Function to create custom legend
function createCustomLegend(chart, legendId, labels, colors) {
    const legendContainer = document.getElementById(legendId);
    legendContainer.innerHTML = labels.map((label, index) => `
        <div class="legend-item">
            <span class="legend-color-box" style="background-color:${colors[index]};"></span>
            ${label}
        </div>
    `).join('');
}

// Event Performance Bar Chart
const ctxBar = document.getElementById('eventPerformanceChart').getContext('2d');
const eventPerformanceChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed'],
        datasets: [
            {
                label: 'Absents',
                data: [10, 5, 20],
                backgroundColor: '#ff5b5b',
                borderColor: '#ff5b5b',
                borderWidth: 1
            },
            {
                label: 'Pending',
                data: [5, 7, 13],
                backgroundColor: '#ffbf5b',
                borderColor: '#ffbf5b',
                borderWidth: 1
            },
            {
                label: 'Presents',
                data: [15, 10, 15],
                backgroundColor: '#4caf50',
                borderColor: '#4caf50',
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false, // Ensure height can be set independently
        scales: {
            x: {
                grid: { display: false },
                ticks: {
                    font: { size: 14, weight: 'bold' },
                    color: '#333'
                }
            },
            y: {
                beginAtZero: true,
                grid: { color: 'rgba(0, 0, 0, 0.1)' },
                ticks: {
                    stepSize: 10,
                    font: { size: 14, weight: 'bold' },
                    color: '#333'
                }
            }
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleFont: { size: 16, weight: 'bold' },
                bodyFont: { size: 14 },
                callbacks: {
                    label: function(tooltipItem) {
                        return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                    }
                }
            }
        }
    }
});

// Top Majors Doughnut Chart
const ctxDoughnut = document.getElementById('topMajorsChart').getContext('2d');
const topMajorsChart = new Chart(ctxDoughnut, {
    type: 'doughnut',
    data: {
        labels: ['Informatique', 'Biology', 'Medicine'],
        datasets: [{
            data: [8, 8, 8],
            backgroundColor: ['#FF92AE', '#A6B7D4', '#67E9F1'],
            hoverBackgroundColor: ['#FF92AE', '#A6B7D4', '#67E9F1']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false, // Ensure height can be set independently
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleFont: { size: 16, weight: 'bold' },
                bodyFont: { size: 14 },
                callbacks: {
                    label: function(tooltipItem) {
                        return `${tooltipItem.label}: ${tooltipItem.raw}`;
                    }
                }
            }
        },
        layout: {
            padding: {
                top: 20,
                bottom: 20
            }
        }
    }
});

// Generate custom legends
createCustomLegend(eventPerformanceChart, 'eventPerformanceLegend', ['Absents', 'Pending', 'Presents'], ['#ff5b5b', '#ffbf5b', '#4caf50']);
createCustomLegend(topMajorsChart, 'topMajorsLegend', ['Informatique', 'Biology', 'Medicine'], ['#FF92AE', '#A6B7D4', '#67E9F1']);
