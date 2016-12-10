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
