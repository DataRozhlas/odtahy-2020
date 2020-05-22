import "./byeie"; // loučíme se s IE

var colors = ["#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477", "#66aa00", "#b82e2e", "#316395", "#994499", "#22aa99", "#aaaa11", "#6633cc", "#e67300", "#8b0707", "#651067", "#329262", "#5574a6", "#3b3eac"];

var kontrast = ['#0099c6', '#dd4477', '#333'];

var celkemkat = ["Celkem","Přestoupení dopravní signalizace/značení","Stání na chodníku","Poškození/zábor veřejného prostranství","Stání v křižovatce","Nezůstal volný třímetrový pruh v každém směru","Stání v pěší zóně mimo parkoviště","Překročení rychlosti do 20 km/h","Stání na přechodu","Stání na vyhrazeném parkovacím místě","Stání před vjezdem","Překročení rychlosti o 20 až 40 km/h","Jiné porušení pravidel v pěší zóně","Vedle kolejí nezůstal volný tříapůlmetrový pruh","Stání na místě pro zdravotně postižené","Vedle plné čáry nezůstal volný třímetrový pruh","Stání na silniční vegetaci","Ostatní"];

var celkemprestupky = [
{"y":104760,"podil":2.57,"detail":"", color: kontrast[0]},
{"y":49609,"podil":0.04,"detail":""},
{"y":16460,"podil":0.02,"detail":""},
{"y":6062,"podil":0.00,"detail":""},
{"y":5851,"podil":3.61,"detail":""},
{"y":4195,"podil":5.13,"detail":""},
{"y":3855,"podil":0.03,"detail":""},
{"y":3108,"podil":0,"detail":""},
{"y":2755,"podil":12.60,"detail":""},
{"y":1983,"podil":30.31,"detail":""},
{"y":1924,"podil":26.46,"detail":""},
{"y":1880,"podil":0,"detail":""},
{"y":1691,"podil":0,"detail":""},
{"y":1261,"podil":33.31,"detail":""},
{"y":711,"podil":12.38,"detail":""},
{"y":444,"podil":38.96,"detail":""},
{"y":440,"podil":0,"detail":""},
{"y":2531,"podil":4.07,"detail":""}
];

var celkemodtahy = [
{"y":2692,"podil":0.02,"detail":"", color: kontrast[1]},
{"y":20,"podil":0.04,"detail":"Jakékoliv neuposlechnutí dopravního značení nebo signalizace. V drtivé většině zákazy zastavení/stání na základě dopravní značky. Většina jde na vrub řidičům, přechody na červenou jsou spíš ve stovkách."},
{"y":4,"podil":0.02,"detail":""},
{"y":0,"podil":0.00,"detail":"Typicky případy, kdy řidič odstaví automobil na uježděné hlíně u silnice nebo na trávníku, který neodpovídá definici silniční vegetace."},
{"y":211,"podil":3.61,"detail":""},
{"y":215,"podil":5.13,"detail":""},
{"y":1,"podil":0.03,"detail":"V pěší zóně je přestupkem stání kdekoliv mimo vymezená parkoviště. V historickém centru je to běžné – a za poslední měsíce přestupků narostlo."},
{"y":0,"podil":0,"detail":""},
{"y":347,"podil":12.60,"detail":""},
{"y":601,"podil":30.31,"detail":""},
{"y":509,"podil":26.46,"detail":""},
{"y":0,"podil":0,"detail":""},
{"y":0,"podil":0,"detail":"Jedná se o neoprávněné vjezdy."},
{"y":420,"podil":33.31,"detail":""},
{"y":88,"podil":12.38,"detail":""},
{"y":173,"podil":38.96,"detail":""},
{"y":0,"podil":0,"detail":"Dřív to byl trávník mezi dvěmi komunikacemi. Dnes je silniční vegetace to, co určí správní orgán."},
{"y":103,"podil":4.07,"detail":""}
];

var centrumkat = ["Celkem", "Stání v pěší zóně mimo parkoviště","Přestoupení dopravní signalizace/značení","Jiné porušení pravidel v pěší zóně","Stání na vyhrazeném parkovacím místě","Stání na chodníku","Stání v křižovatce","Stání na místě pro zdravotně postižené","Stání před vjezdem","Musí zůstat volný 3 metry široký pruh v každém směru","Ostatní"];

var centrumprestupky = [
{"y":7736,"podil":5.05,"detail":"", color: kontrast[0]},
{"y":3162,"podil":0.03,"detail":""},
{"y":2387,"podil":0.04,"detail":""},
{"y":1131,"podil":0.00,"detail":""},
{"y":655,"podil":52.82,"detail":""},
{"y":247,"podil":0.00,"detail":""},
{"y":41,"podil":4.88,"detail":""},
{"y":32,"podil":53.13,"detail":""},
{"y":25,"podil":40.00,"detail":""},
{"y":17,"podil":47.06,"detail":""},
{"y":39,"podil":15.38,"detail":""}
];

var centrumodtahy = [
{"y":391,"podil":5.05,"detail":"", color: kontrast[1]},
{"y":1,"podil":0.03,"detail":"V pěší zóně je přestupkem stání kdekoliv mimo vymezená parkoviště. V historickém centru je to běžné – a za poslední měsíce přestupků narostlo."},
{"y":1,"podil":0.04,"detail":"Jakékoliv neuposlechnutí dopravního značení nebo signalizace. V drtivé většině zákazy zastavení/stání na základě dopravní značky. Většina jde na vrub řidičům, přechody na červenou jsou spíš ve stovkách."},
{"y":0,"podil":0.00,"detail":"Jedná se o neoprávněné vjezdy."},
{"y":346,"podil":52.82,"detail":""},
{"y":0,"podil":0.00,"detail":""},
{"y":2,"podil":4.88,"detail":""},
{"y":17,"podil":53.13,"detail":""},
{"y":10,"podil":40.00,"detail":""},
{"y":8,"podil":47.06,"detail":""},
{"y":6,"podil":15.38,"detail":""}
];

var podilkat = ["Vedle plné čáry nezůstal volný třímetrový pruh","Vedle kolejí nezůstal volný tříapůlmetrový pruh","Stání na vyhrazeném parkovacím místě","Ohrožení bezpečnosti provozu","Stání před vjezdem","Stání na přechodu","Stání na místě pro zdravotně postižené","Stání ve druhé řadě","Nezůstal volný třímetrový pruh v každém směru","Stání na zastávce","Stání v křižovatce","Celkem","Stání na dopravním okruhu","Přestoupení dopravní signalizace/značení","Stání v pěší zóně mimo parkoviště","Stání na chodníku","Poškození/zábor veřejného prostranství","Stání na silniční vegetaci","Stání jinde než při pravém okraji"];

var podildata = [
{"y":38.96,"prestupky":444,"odtahy":173},
{"y":33.31,"prestupky":1261,"odtahy":420},
{"y":30.31,"prestupky":1983,"odtahy":601},
{"y":30.14,"prestupky":219,"odtahy":66},
{"y":26.46,"prestupky":1924,"odtahy":509},
{"y":12.60,"prestupky":2755,"odtahy":347},
{"y":12.38,"prestupky":711,"odtahy":88},
{"y":5.98,"prestupky":234,"odtahy":14},
{"y":5.13,"prestupky":4195,"odtahy":215},
{"y":4.76,"prestupky":168,"odtahy":8},
{"y":3.61,"prestupky":5851,"odtahy":211},
{"y":2.57,"prestupky":104760,"odtahy":2692, color: kontrast[0]},
{"y":0.83,"prestupky":121,"odtahy":1},
{"y":0.04,"prestupky":49609,"odtahy":20},
{"y":0.03,"prestupky":3855,"odtahy":1},
{"y":0.02,"prestupky":16460,"odtahy":4},
{"y":0.00,"prestupky":6062,"odtahy":0},
{"y":0.00,"prestupky":440,"odtahy":0},
{"y":0.00,"prestupky":305,"odtahy":0}
];

var resenikat = ["Správní řízení","Bloková pokuta","Domluva","Společné řízení","Ostatní"];

var reseniprestupky = ["Všechny přestupky","Přestoupení dopravní signalizace/značení","Stání na chodníku","Poškození/zábor veřejného prostranství","Stání v křižovatce","Nezůstal volný třímetrový pruh v každém směru","Stání v pěší zóně mimo parkoviště","Stání na přechodu","Stání na vyhrazeném parkovacím místě","Stání před vjezdem","Jiné porušení pravidel v pěší zóně","Vedle kolejí nezůstal volný tříapůlmetrový pruh","Stání na místě pro zdravotně postižené","Vedle plné čáry nezůstal volný třímetrový pruh","Stání na silniční vegetaci","Ostatní"];

var resenidata = [
  [26.9,60.4,8.2,3.1,1.4],
  [24.3,61.7,9.9,2.9,1.2],
  [28.6,57.2,7.9,4.9,1.4],
  [19.0,66.9,10.9,1.4,1.8],
  [23.3,67.4,5.0,3.0,1.3],
  [20.7,66.5,8.6,3.2,1.0],
  [40.6,42.9,7.3,7.6,1.6],
  [21.1,71.2,3.7,2.9,1.1],
  [26.8,63.3,6.8,1.4,1.8],
  [22.5,67.5,7.7,1.4,0.9],
  [93.4,0.1,0.0,0.0,6.6],
  [20.9,71.8,3.8,2.0,1.4],
  [35.9,53.9,6.6,0.8,2.8],
  [19.1,74.5,2.7,2.9,0.7],
  [24.1,57.0,5.9,10.9,2.0],
  [37.6,42.4,9.0,2.6,2.0]
];

var prestupkyrokykat = ["Celkem","Přestoupení dopravní signalizace/značení","Stání na chodníku","Poškození/zábor veřejného prostranství","Stání v křižovatce","Nezůstal volný třímetrový pruh v každém směru","Stání na přechodu","Stání na vyhrazeném parkovacím místě","Stání před vjezdem","Vedle kolejí nezůstal volný tříapůlmetrový pruh","Stání na místě pro zdravotně postižené","Vedle plné čáry nezůstal volný třímetrový pruh","Stání na silniční vegetaci","Stání jinde než při pravém okraji","Stání ve druhé řadě"];

var prestupkyrokyprestupky = [
  [93253,104760],
  [27213,49609],
  [15396,16460],
  [6380,6062],
  [6154,5851],
  [4771,4195],
  [4234,2755],
  [2433,1983],
  [1496,1924],
  [3879,1261],
  [310,711],
  [398,444],
  [16,440],
  [794,305],
  [444,234]
];

var prestupkyrokyodtahy = [
  [5179,2692],
  [9,20],
  [4,4],
  [0,0],
  [478,211],
  [540,215],
  [1085,347],
  [777,601],
  [449,509],
  [1408,420],
  [72,88],
  [246,173],
  [0,0],
  [1,0],
  [10,14]
];

Highcharts.chart('celkem', {
    chart: {
        type: 'bar'
    },

    title: {
        text: 'Přestupky vs. odtahy'
    },

    subtitle: {
        text: 'Brno, 2019, bez blokového čištění'
    },

    xAxis: {
        categories: celkemkat
    },

    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function () {
                return this.value + '';
            }
        }
    },

    tooltip: {
        formatter: function () {
            return this.points.reduce(function (s, point) {
                var detail = point.point.detail;
                if (detail.length > 0) {
                    detail = '„' + detail + '“'
                };
                var color = point.point.color;
                return s +
                       '<span style="font-size: 12px; font-weight: bold; color:' + color + ';"> ▪ </span>' + '<span style="font-size: 12px;">' + point.series.name + ': ' + point.y + '</span>' +
                       '<br/><span style="font-size: 12px; font-style: italic">' + detail + '</span>';
            }, '<span style="font-size: 10px;"><b>' + this.x + '</b></span><br/>');
        },
        shared: true,
        useHTML: true

    },

    exporting: {
        enabled: false
    },

    credits: {
        href: '',
        text: 'Zdroj: Městská policie Brno'
    },

    series: [{
        name: 'přestupky',
        data: celkemprestupky,
        color: colors[9]
    }, {
        name: 'odtahy',
        data: celkemodtahy,
        color: colors[8]
    }]
});

Highcharts.chart('centrum', {
    chart: {
        type: 'bar'
    },

    title: {
        text: 'Přestupky vs. odtahy na pěší zóně'
    },

    subtitle: {
        text: 'Brno, 2019, bez blokového čištění'
    },

    xAxis: {
        categories: centrumkat
    },

    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function () {
                return this.value + '';
            }
        }
    },

    tooltip: {
        formatter: function () {
            return this.points.reduce(function (s, point) {
                var detail = point.point.detail;
                if (detail.length > 0) {
                    detail = '„' + detail + '“'
                };
                var color = point.point.color;
                return s +
                       '<span style="font-size: 12px; font-weight: bold; color:' + color + ';"> ▪ </span>' + '<span style="font-size: 12px;">' + point.series.name + ': ' + point.y + '</span>' +
                       '<br/><span style="font-size: 12px; font-style: italic">' + detail + '</span>';
            }, '<span style="font-size: 10px;"><b>' + this.x + '</b></span><br/>');
        },
        shared: true,
        useHTML: true

    },

    exporting: {
        enabled: false
    },

    credits: {
        href: '',
        text: 'Zdroj: Městská policie Brno'
    },

    series: [{
        name: 'přestupky',
        data: centrumprestupky,
        color: colors[9]
    }, {
        name: 'odtahy',
        data: centrumodtahy,
        color: colors[8]
    }]
});

Highcharts.chart('podil', {
    chart: {
        type: 'bar'
    },

    title: {
        text: 'Přestupky, nejčastěji řešené odtahem'
    },

    subtitle: {
        text: 'Brno, 2019, bez blokového čištění'
    },

    xAxis: {
        categories: podilkat
    },

    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function () {
                return this.value + ' %';
            }
        }
    },

    tooltip: {
        formatter: function () {
            return '<span style="font-size: 10px">' + this.x + '</span><br/>' +
                   '<b>' + this.y + ' % odtahů</b><br/>' +
                   '<span style="font-size: 12px; font-weight: bold; color:' + colors[9] + ';"> ▪ </span>' + this.point.prestupky + ' přestupků<br/>' +
                   '<span style="font-size: 12px; font-weight: bold; color:' + colors[8] + ';"> ▪ </span>' + this.point.odtahy + ' odtahů'
        }
    },

    legend: {
        enabled: false
    },

    exporting: {
        enabled: false
    },

    credits: {
        href: '',
        text: 'Zdroj: Městská policie Brno'
    },

    series: [{
        name: 'podíl odtahů',
        data: podildata,
        color: colors[9]
    }]
});

Highcharts.chart('reseni', {
    chart: {
        type: 'column'
    },

    title: {
        text: 'Řešení přestupků'
    },

    subtitle: {
        text: 'Brno, 2019, bez blokového čištění'
    },

    xAxis: {
        categories: resenikat
    },

    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function () {
                return this.value + ' %';
            }
        }
    },

    tooltip: {
        valueSuffix: ' %',
        shared: true
    },

    exporting: {
        enabled: false
    },

    credits: {
        href: '',
        text: 'Zdroj: Městská policie Brno'
    },

    series: [{
        name: reseniprestupky[0],
        data: resenidata[0],
        color: kontrast[2],
        type: 'line',
        dashStyle: 'LongDash',
        zIndex: 7
    }, {
        name: reseniprestupky[1],
        data: resenidata[1],
        color: colors[0],
        visible: false
    }, {
        name: reseniprestupky[2],
        data: resenidata[2],
        color: colors[1],
        visible: false
    }, {
        name: reseniprestupky[3],
        data: resenidata[3],
        color: colors[2],
        visible: false
    }, {
        name: reseniprestupky[4],
        data: resenidata[4],
        color: colors[3],
        visible: false
    }, {
        name: reseniprestupky[5],
        data: resenidata[5],
        color: colors[4],
        visible: false
    }, {
        name: reseniprestupky[6],
        data: resenidata[6],
        color: colors[8]
    }, {
        name: reseniprestupky[7],
        data: resenidata[7],
        color: colors[5],
        visible: false
    }, {
        name: reseniprestupky[8],
        data: resenidata[8],
        color: colors[6],
        visible: false
    }, {
        name: reseniprestupky[9],
        data: resenidata[9],
        color: colors[7],
        visible: false
    }, {
        name: reseniprestupky[10],
        data: resenidata[10],
        color: colors[9],
        visible: false
    }, {
        name: reseniprestupky[11],
        data: resenidata[11],
        color: colors[10],
        visible: false
    }, {
        name: reseniprestupky[12],
        data: resenidata[12],
        color: colors[11],
        visible: false
    }, {
        name: reseniprestupky[13],
        data: resenidata[13],
        color: colors[12],
        visible: false
    }, {
        name: reseniprestupky[14],
        data: resenidata[14],
        color: colors[13],
        visible: false
    }, {
        name: reseniprestupky[15],
        data: resenidata[15],
        color: colors[14],
        visible: false
    }]
});

$(function() {

$('#prestupkyroky').highcharts({

    title: {
        text: 'Přestupky 2015 × 2019'
    },

    xAxis: {
        categories: ['2015', '2019']
    },

    yAxis: {
        title: {
            text: ''
        },
        min: 0
    },

    exporting: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    legend: {
      enabled: false
    },

    plotOptions: {
        line: {
            marker: {
                symbol: 'circle'
            }
        }
    },

    series: [{
        id: prestupkyrokykat[0],
        name: prestupkyrokykat[0],
        data: prestupkyrokyprestupky[0],
        color: kontrast[2],
        dashStyle: 'LongDash'
    }, {
        id: prestupkyrokykat[1],
        name: prestupkyrokykat[1],
        data: prestupkyrokyprestupky[1],
        color: colors[0],
        visible: false
    }, {
        id: prestupkyrokykat[2],
        name: prestupkyrokykat[2],
        data: prestupkyrokyprestupky[2],
        color: colors[1],
        visible: false
    }, {
        id: prestupkyrokykat[3],
        name: prestupkyrokykat[3],
        data: prestupkyrokyprestupky[3],
        color: colors[2],
        visible: false
    }, {
        id: prestupkyrokykat[4],
        name: prestupkyrokykat[4],
        data: prestupkyrokyprestupky[4],
        color: colors[3],
        visible: false
    }, {
        id: prestupkyrokykat[5],
        name: prestupkyrokykat[5],
        data: prestupkyrokyprestupky[5],
        color: colors[4],
        visible: false
    }, {
        id: prestupkyrokykat[6],
        name: prestupkyrokykat[6],
        data: prestupkyrokyprestupky[6],
        color: colors[5],
        visible: false
    }, {
        id: prestupkyrokykat[7],
        name: prestupkyrokykat[7],
        data: prestupkyrokyprestupky[7],
        color: colors[6],
        visible: false
    }, {
        id: prestupkyrokykat[8],
        name: prestupkyrokykat[8],
        data: prestupkyrokyprestupky[8],
        color: colors[7],
        visible: false
    }, {
        id: prestupkyrokykat[9],
        name: prestupkyrokykat[9],
        data: prestupkyrokyprestupky[9],
        color: colors[8],
        visible: false
    }, {
        id: prestupkyrokykat[10],
        name: prestupkyrokykat[10],
        data: prestupkyrokyprestupky[10],
        color: colors[9],
        visible: false
    }, {
        id: prestupkyrokykat[11],
        name: prestupkyrokykat[11],
        data: prestupkyrokyprestupky[11],
        color: colors[10],
        visible: false
    }, {
        id: prestupkyrokykat[12],
        name: prestupkyrokykat[12],
        data: prestupkyrokyprestupky[12],
        color: colors[11],
        visible: false
    }, {
        id: prestupkyrokykat[13],
        name: prestupkyrokykat[13],
        data: prestupkyrokyprestupky[13],
        color: colors[12],
        visible: false
    }, {
        id: prestupkyrokykat[14],
        name: prestupkyrokykat[14],
        data: prestupkyrokyprestupky[14],
        color: colors[13],
        visible: false
    }]
});

$('#odtahyroky').highcharts({

    title: {
        text: 'Odtahy 2015 × 2019'
    },

    xAxis: {
        categories: ['2015', '2019']
    },

    yAxis: {
        title: {
            text: ''
        },
        min: 0
    },

    exporting: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    plotOptions: {
        line: {
            marker: {
                symbol: 'circle'
            }
        }
    },

    legend: {
      enabled: false
    },

    series: [{
        id: prestupkyrokykat[0],
        name: prestupkyrokykat[0],
        data: prestupkyrokyodtahy[0],
        color: kontrast[2],
        dashStyle: 'LongDash'
    }, {
        id: prestupkyrokykat[1],
        name: prestupkyrokykat[1],
        data: prestupkyrokyodtahy[1],
        color: colors[0],
        visible: false
    }, {
        id: prestupkyrokykat[2],
        name: prestupkyrokykat[2],
        data: prestupkyrokyodtahy[2],
        color: colors[1],
        visible: false
    }, {
        id: prestupkyrokykat[3],
        name: prestupkyrokykat[3],
        data: prestupkyrokyodtahy[3],
        color: colors[2],
        visible: false
    }, {
        id: prestupkyrokykat[4],
        name: prestupkyrokykat[4],
        data: prestupkyrokyodtahy[4],
        color: colors[3],
        visible: false
    }, {
        id: prestupkyrokykat[5],
        name: prestupkyrokykat[5],
        data: prestupkyrokyodtahy[5],
        color: colors[4],
        visible: false
    }, {
        id: prestupkyrokykat[6],
        name: prestupkyrokykat[6],
        data: prestupkyrokyodtahy[6],
        color: colors[5],
        visible: false
    }, {
        id: prestupkyrokykat[7],
        name: prestupkyrokykat[7],
        data: prestupkyrokyodtahy[7],
        color: colors[6],
        visible: false
    }, {
        id: prestupkyrokykat[8],
        name: prestupkyrokykat[8],
        data: prestupkyrokyodtahy[8],
        color: colors[7],
        visible: false
    }, {
        id: prestupkyrokykat[9],
        name: prestupkyrokykat[9],
        data: prestupkyrokyodtahy[9],
        color: colors[8],
        visible: false
    }, {
        id: prestupkyrokykat[10],
        name: prestupkyrokykat[10],
        data: prestupkyrokyodtahy[10],
        color: colors[9],
        visible: false
    }, {
        id: prestupkyrokykat[11],
        name: prestupkyrokykat[11],
        data: prestupkyrokyodtahy[11],
        color: colors[10],
        visible: false
    }, {
        id: prestupkyrokykat[12],
        name: prestupkyrokykat[12],
        data: prestupkyrokyodtahy[12],
        color: colors[11],
        visible: false
    }, {
        id: prestupkyrokykat[13],
        name: prestupkyrokykat[13],
        data: prestupkyrokyodtahy[13],
        color: colors[12],
        visible: false
    }, {
        id: prestupkyrokykat[14],
        name: prestupkyrokykat[14],
        data: prestupkyrokyodtahy[14],
        color: colors[13],
        visible: false
    }]
});

$('#legendaroky').highcharts({

    title: {
        text: ''
    },

    xAxis: {
        title: {
            text: ''
        },
        max: -1
    },

    yAxis: {
        title: {
            text: ''
        },
        max: -1
    },

    exporting: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    legend: {
        layout: 'vertical'
    },

    plotOptions: {
        line: {
            marker: {
                symbol: 'circle'
            }
        },
        series: {
            events: {
                legendItemClick: function(event) {
                    var x = $('#prestupkyroky').highcharts(),
                    series = x.get(this.options.id);
                    if (series) {
                        if (this.visible) {
                            series.hide();
                        } else {
                            series.show();
                        }
                    };
                    var y = $('#odtahyroky').highcharts(),
                    series = y.get(this.options.id);
                    if (series) {
                        if (this.visible) {
                            series.hide();
                        } else {
                            series.show();
                        }
                    }
                }
            }
        }
    },

    series: [{
        id: prestupkyrokykat[0],
        name: prestupkyrokykat[0],
        data: prestupkyrokyprestupky[0],
        color: kontrast[2]
    }, {
        id: prestupkyrokykat[1],
        name: prestupkyrokykat[1],
        data: prestupkyrokyprestupky[1],
        color: colors[0],
        visible: false
    }, {
        id: prestupkyrokykat[2],
        name: prestupkyrokykat[2],
        data: prestupkyrokyprestupky[2],
        color: colors[1],
        visible: false
    }, {
        id: prestupkyrokykat[3],
        name: prestupkyrokykat[3],
        data: prestupkyrokyprestupky[3],
        color: colors[2],
        visible: false
    }, {
        id: prestupkyrokykat[4],
        name: prestupkyrokykat[4],
        data: prestupkyrokyprestupky[4],
        color: colors[3],
        visible: false
    }, {
        id: prestupkyrokykat[5],
        name: prestupkyrokykat[5],
        data: prestupkyrokyprestupky[5],
        color: colors[4],
        visible: false
    }, {
        id: prestupkyrokykat[6],
        name: prestupkyrokykat[6],
        data: prestupkyrokyprestupky[6],
        color: colors[5],
        visible: false
    }, {
        id: prestupkyrokykat[7],
        name: prestupkyrokykat[7],
        data: prestupkyrokyprestupky[7],
        color: colors[6],
        visible: false
    }, {
        id: prestupkyrokykat[8],
        name: prestupkyrokykat[8],
        data: prestupkyrokyprestupky[8],
        color: colors[7],
        visible: false
    }, {
        id: prestupkyrokykat[9],
        name: prestupkyrokykat[9],
        data: prestupkyrokyprestupky[9],
        color: colors[8],
        visible: false
    }, {
        id: prestupkyrokykat[10],
        name: prestupkyrokykat[10],
        data: prestupkyrokyprestupky[10],
        color: colors[9],
        visible: false
    }, {
        id: prestupkyrokykat[11],
        name: prestupkyrokykat[11],
        data: prestupkyrokyprestupky[11],
        color: colors[10],
        visible: false
    }, {
        id: prestupkyrokykat[12],
        name: prestupkyrokykat[12],
        data: prestupkyrokyprestupky[12],
        color: colors[11],
        visible: false
    }, {
        id: prestupkyrokykat[13],
        name: prestupkyrokykat[13],
        data: prestupkyrokyprestupky[13],
        color: colors[12],
        visible: false
    }, {
        id: prestupkyrokykat[14],
        name: prestupkyrokykat[14],
        data: prestupkyrokyprestupky[14],
        color: colors[13],
        visible: false
    }]
});

});

