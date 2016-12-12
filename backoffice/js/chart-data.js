//GRAPHIQUE DES VENTES / VISITES
function creatDashSiteData(){
    
    setTimeout(function(){
        var ctx = byId("chartActiviteSite").getContext("2d");

        var myLineChart = new Chart(ctx, {
            type: 'line',
            data: dashsiteData,
            options: {responsive: true}
        });
    },300);
}

var dashsiteData = {
    labels: ["Samedi", "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Aujourd'hui"],
    datasets: [
        {
            label: "Vistes sur 7 jours",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [50, 62, 75, 42, 56, 40, 35],
            spanGaps: false,
        },
        {
            label: "Ventes sur 7 jours",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(255,127,42,0.4)",
            borderColor: "rgba(255,127,42,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(255,127,42,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(255,127,42,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [2, 3, 20, 11, 3, 5, 6],
            spanGaps: false,
        }
    ]
};


//GRAPHIQUE DES PAGE
function creatChartPage(){
    setTimeout(function(){
        var ctx = byId("chartPage").getContext("2d");

        var myLineChart = new Chart(ctx, {
            type: 'radar',
            data: chartPage,
            options: {responsive: true}
        });
    },300);
}

var chartPage = {
    labels: ["One-Page", "Shop", "Blog", "Contact"],
    datasets: [
        {
            label: "Les pages visités",
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "rgba(75,192,192,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(75,192,192,1)",
            data: [125, 105, 80, 50]
        }
    ]
};


//NAVIGATEUR
function creatChartNavigateur(){
    setTimeout(function(){
        var ctx = byId("chartNavigateur").getContext("2d");

        var myLineChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: navigateur,
            options: {responsive: true}
        });
    },300);
}

var navigateur = {
    labels: ["Chrome", "Firefox", "Inernet Explorer", "Safarie", "Opera"],
    datasets: [
        {
            label: "Les navigateurs utilisés",
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            data: [40, 20, 15, 10, 5]
        }
    ]
};


//TPYE DE SUPPORT (MOBILE / DESKTOP)
function creatChartSupport(){
    setTimeout(function(){
        var ctx = byId("chartSupport").getContext("2d");

        var myDoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: chartSupport,
            options: {responsive: true}
        });
    },300);
}

var chartSupport = {
    labels: [
        "Desktop",
        "Mobile",
        "Tablette"
    ],
    datasets: [
        {
            data: [55, 30, 15],
            backgroundColor: [
                "rgb(75,192,192)",
                "rgb(255,127,42)",
                "rgb(33, 150, 222)"
            ],
            hoverBackgroundColor: [
                "rgb(75,192,192)",
                "rgb(255,127,42)",
                "rgb(33, 150, 222)"
            ]
        }]
};

//GRAPHIQUE DES VISITES
function creatChartVisite(){
    
    setTimeout(function(){
        var ctx = byId("chartVistiteSite").getContext("2d");

        var myLineChart = new Chart(ctx, {
            type: 'line',
            data: charteVisites,
            options: {responsive: true}
        });
    },300);
}

var charteVisites = {
    labels: [
        "17/11", "18/11", "19/11", "20/11", "21/11", "22/11", "23/11", "24/11", "25/11", "26/11", "27/11", "28/11", "29/11", "30/11",
        "01/12", "02/12", "03/12", "04/12", "05/12", "06/12", "07/12", "08/12", "09/12", "10/12", "11/12", "12/12", "13/12", "14/12", "15/12", "16/12", "17/12"
    ],
    datasets: [
        {
            label: "Visites sur la période",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [50, 62, 75, 42, 56, 40, 35, 45, 65, 55, 50, 62, 75, 42, 56, 40, 35, 45, 65, 70, 50, 62, 75, 42, 56, 40, 35, 45, 65, 89, 105],
            spanGaps: false,
        }
    ]
};

//GRAPHIQUE DES VENTES
function creatChartVente(){
    
    setTimeout(function(){
        var ctx = byId("chartVenteSite").getContext("2d");

        var myLineChart = new Chart(ctx, {
            type: 'line',
            data: charteVente,
            options: {responsive: true}
        });
    },300);
}

var charteVente = {
    labels: [
        "17/11", "18/11", "19/11", "20/11", "21/11", "22/11", "23/11", "24/11", "25/11", "26/11", "27/11", "28/11", "29/11", "30/11",
        "01/12", "02/12", "03/12", "04/12", "05/12", "06/12", "07/12", "08/12", "09/12", "10/12", "11/12", "12/12", "13/12", "14/12", "15/12", "16/12", "17/12"
    ],
    datasets: [
        {
            label: "Ventes sur la période",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(255,127,42,0.4)",
            borderColor: "rgba(255,127,42,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(255,127,42,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(255,127,42,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [5, 2, 1, 3, 2, 7, 5, 2, 0, 0, 1, 5, 8, 12, 2, 11, 0, 5, 2, 3, 5, 7, 8, 9, 5, 3, 5, 0, 7, 8, 15],
            spanGaps: false,
        }
    ]
};