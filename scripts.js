document.addEventListener('DOMContentLoaded', function() {
    // Data for education marks
    const btechData = {
        labels: ['CGPA', 'Remaining'],
        datasets: [{
            data: [8.54, 10 - 8.54],
            backgroundColor: ['#36A2EB', '#FFCE56'],
        }]
    };

    const xiiData = {
        labels: ['CGPA', 'Remaining'],
        datasets: [{
            data: [9.37, 10 - 9.37],
            backgroundColor: ['#FF6384', '#4BC0C0'],
        }]
    };

    const xData = {
        labels: ['Percentage', 'Remaining'],
        datasets: [{
            data: [99.40, 100 - 99.40],
            backgroundColor: ['#FFCE56', '#36A2EB'],
        }]
    };

    // Data for certifications
    const certificationsData = {
        labels: [
            'YBI Foundation Certification 2023',
            'Data Structures & Algorithms by Accenture 2023',
            'Managing Emotions - Coursera',
            'Accenture Forage 2024',
            'Indian Institute of Placement',
            'GMRIT Workshop'
        ],
        datasets: [{
            label: 'Certifications',
            backgroundColor: '#36A2EB',
            borderColor: '#36A2EB',
            borderWidth: 1,
            data: [1, 1, 1, 1, 1, 1], // Example: Each certification represented as 1 (can represent count or weight)
        }]
    };

    // Data for skills (percentage out of 100)
    const skillsData = {
        labels: ['C Programming', 'Python', 'Java', 'JavaScript'],
        datasets: [{
            label: 'Skill Level (%)',
            backgroundColor: ['#FFCE56', '#4BC0C0', '#FF6384', '#36A2EB'],
            data: [90, 80, 85, 75], // Example skill levels (out of 100)
        }]
    };

    // Render charts using Chart.js
    renderPieChart('btechChart', btechData);
    renderPieChart('xiiChart', xiiData);
    renderPieChart('xChart', xData);
    renderBarChart('certificationsChart', certificationsData);
    renderSkillsChart('skillsChart', skillsData); // New: Render skills chart

    function renderPieChart(canvasId, data) {
        const ctx = document.getElementById(canvasId).getContext('2d');
        new Chart(ctx, {
            type: 'pie',
            data: data,
            options: {
                responsive: true,
                legend: {
                    position: 'top',
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        });
    }

    function renderBarChart(canvasId, data) {
        const ctx = document.getElementById(canvasId).getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
                responsive: true,
                legend: {
                    display: false,
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            max: 100 // Adjust max value as needed
                        }
                    }]
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        });
    }

    function renderSkillsChart(canvasId, data) {
        const ctx = document.getElementById(canvasId).getContext('2d');
        new Chart(ctx, {
            type: 'horizontalBar',
            data: data,
            options: {
                responsive: true,
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero: true,
                            max: 100 // Adjust max value as needed
                        }
                    }]
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        });
    }
});
