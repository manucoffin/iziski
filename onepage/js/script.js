$(document).ready(function(){
    $("section").css("display", "");
    $('ul.tabs').on('click', function(ev){
        $("section").css("display", "");
        $('html, body').animate({
            scrollTop: $(ev.target.getAttribute("href")).offset().top - 50
        }, 500);
    });


    $('.carousel-artisanat').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        adaptiveHeight: true,
        asNavFor: '.carousel-artisanat-preview'
    });
    $('.carousel-artisanat-preview').slick({
        slidesToShow: 3,
        slidesToScroll:1,
        asNavFor: '.carousel-artisanat',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        arrows:true,
        variableWidth:true
    });

    $('.event-carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
    
    
    $(window).on("scroll", function(e) {
        if ($(this).scrollTop() > $(window).height()) 
        {
            $("#nav").addClass("sticky-nav");
            $('body').offset({ top: 50, left: 0 });
        } else {
            $("#nav").removeClass("sticky-nav");
            $('body').offset({ top: 0, left: 0 });
        }
    });

});

$('.carousel.carousel-slider').carousel({full_width: true});

var datas = {
    labels: ["Stabilité", "Glisse", "Solidité", "Braquage", "Vitesse"],
    datasets: [
        {
            label: "Iziski",
            backgroundColor: "rgba(244,172,69,0.2)",
            borderColor: "rgba(255,127,53,1)",
            pointBackgroundColor: "rgba(255,127,53,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,127,53,1)",
            data: [75, 59, 90, 81, 56]
        },
        {
            label: "Conccurent",
            backgroundColor: "rgba(0, 196, 216,0.2)",
            borderColor: "rgba(0, 166, 255,1)",
            pointBackgroundColor: "rgba(0, 166, 255,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(0, 166, 255,1)",
            data: [63, 39, 70, 71, 66]
        }
    ]
};

var ctx = document.getElementById("chart");
var chart = new Chart(ctx, {
    type: 'radar',
    data: datas,
    options: {
        scale: {
            reverse: false,
            ticks: {
                beginAtZero: true
            }
        }
    }
});

function initMap() {
    var pos1 = {lat: 44.5669665, lng: 6.0769235};
    var pos2 = {lat: 45.5669665, lng: 6.0769235};
    var pos3 = {lat: 44.5669665, lng: 7.0769235};
    var pos4 = {lat: 44.6669665, lng: 6.3769235};
    var pos5 = {lat: 44.2669665, lng: 6.1769235};
    var pos6 = {lat: 44.2669665, lng: 6.9769235};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: pos1
    });
    var marker = new google.maps.Marker({
      position: pos1,
      map: map
    });
    var marker = new google.maps.Marker({
      position: pos2,
      map: map
    });
    var marker = new google.maps.Marker({
      position: pos3,
      map: map
    });
    var marker = new google.maps.Marker({
      position: pos4,
      map: map
    });
    var marker = new google.maps.Marker({
      position: pos5,
      map: map
    });
    var marker = new google.maps.Marker({
      position: pos6,
      map: map
    });
  }