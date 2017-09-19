<head>
    <title>Impact of Diabetes on Nations</title>
    <meta charset="utf-8">
    <style type="text/css">
        html {
            height: 100%;
        }
        body {
            margin: 0;
            padding: 0;
            background: #000000 url(./loading.gif) center center no-repeat;
            color: #ffffff;
            font-family: sans-serif;
            font-size: 13px;
            line-height: 20px;
            height: 100%;
        }

        #info {

            font-size: 11px;
            position: absolute;
            bottom: 5px;
            background-color: rgba(0,0,0,0.8);
            border-radius: 3px;
            right: 10px;
            padding: 10px;

        }

        #currentInfo {
            width: 270px;
            position: absolute;
            left: 20px;
            top: 63px;

            background-color: rgba(0,0,0,0.2);

            border-top: 1px solid rgba(255,255,255,0.4);
            padding: 10px;
        }

        a {
            color: #aaa;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }

        .bull {
            padding: 0 5px;
            color: #555;
        }

        #title {
            position: absolute;
            top: 20px;
            width: 270px;
            left: 20px;
            background-color: rgba(0,0,0,0.2);
            border-radius: 3px;
            font: 20px Georgia;
            padding: 10px;
        }

        .year {
            font: 16px Georgia;
            line-height: 26px;
            height: 30px;
            text-align: center;
            float: left;
            width: 90px;
            color: rgba(255, 255, 255, 0.4);

            cursor: pointer;
            -webkit-transition: all 0.1s ease-out;
        }

        .year:hover, .year.active {
            font-size: 23px;
            color: #fff;
        }

        #ce span {
            display: none;
        }

        #ce {
            width: 107px;
            height: 55px;
            display: block;
            position: absolute;
            bottom: 15px;
            left: 20px;
            background: url(./ce.png);
        }


    </style>
</head>
<body style="background-image: none;">

<div id="container" style="color: rgb(255, 255, 255); font: 13px/20px Arial,sans-serif; cursor: auto;">
<canvas width="1680" height="667" style="position: absolute;"></canvas>
</div>

<div id="info">
    <strong><a href="http://www.chromeexperiments.com/globe">Impact of Diabetes WebGL Globe</a></strong> <span class="bull">•</span>&nbsp;Created by Dale Patterson, Griffith University <span class="bull">•</span>
</div>

<div id="currentInfo">
    <span id="G1" class="year"><p>G1</p></span>
    <span id="G2" class="year"><p>G2</p></span>
    <span id="G3" class="year"><p>G3</p></span>
	<span id="G4" class="year"><p>G4</p></span>
    <span id="G5" class="year"><p>G5</p></span>
    <span id="G6" class="year"><p>G6</p></span>
	<span id="G7" class="year"><p>G7</p></span>
    <span id="G8" class="year"><p>G8</p></span>
    <span id="G9" class="year"><p>G9</p></span>
	<span id="G10" class="year"><p>G10</p></span>
	<span id="G11" class="year"><p>G11</p></span>
	<span id="G12" class="year"><p>G12</p></span>
	<span id="G13" class="year"><p>G13</p></span>
	<span id="G14" class="year"><p>G14</p></span>
	<span id="G15" class="year"><p>G15</p></span>
	<span id="G16" class="year"><p>G16</p></span>
	<span id="G17" class="year active"><p>G17</p></span>
</div>

<div id="title">
    Impact of Diabetes
</div>

<a id="ce" href="http://www.chromeexperiments.com/globe">
    <span>This is a Chrome Experiment</span>
</a>

<script type="text/javascript" src="./third-party/Detector.js"></script>
<script type="text/javascript" src="./third-party/three.min.js"></script>
<script type="text/javascript" src="./third-party/Tween.js"></script>
<script type="text/javascript" src="./globe.js"></script>
<script type="text/javascript">

    if(!Detector.webgl){
        Detector.addGetWebGLMessage();
    } else {

        var years = ['G1','G2','G3','G4','G5','G6','G7','G8','G9','G10','G11','G12','G13','G14','G15','G16','G17'];
        var container = document.getElementById('container');
		var opts = new Object();
			
		opts['animated'] = true;
		opts['colorFn'] = function (i) {
			var color=[ "#eb1c2d",
				"#dca63a",
				"#4ca146",
				"#c7212f",
				"#ee402d",
				"#27bfe6",
				"#fbc412",
				"#a21942",
				"#f26a2e",
				"#de1768",
				"#f99d26",
				"#bf8d2c",
				"#407f46",
				"#ffffff",
				"#56c02b",
				"#13568d",
				"#183668"
			];
			var m = color[i].match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);
			return {
				r: parseInt(m[1], 16) / 256,
				g: parseInt(m[2], 16) / 256,
				b: parseInt(m[3], 16) / 256
			};
		};
        var globe = new DAT.Globe(container, opts);

        var i, tweens = [];

        var settime = function(globe, t) {
            return function() {
                new TWEEN.Tween(globe).to({time: t/years.length},500).easing(TWEEN.Easing.Cubic.EaseOut).start();
                var y = document.getElementById(years[t]);
                if (y.getAttribute('class') === 'year active') {
                    return;
                }
                var yy = document.getElementsByClassName('year');
                for(i=0; i<yy.length; i++) {
                    yy[i].setAttribute('class','year');
                }
                y.setAttribute('class', 'year active');
            };
        };
		//console.log(years.length);
        for(var i = 0; i<years.length; i++) {
            var y = document.getElementById(years[i]);
			y.addEventListener('mouseover', settime(globe,i), false);
        }

        var xhr;
        TWEEN.start();


        xhr = new XMLHttpRequest();
        xhr.open('GET', './AA_USA_ALL_DATACSV.json', true);
		
		
        xhr.onreadystatechange = function(e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var data = JSON.parse(xhr.responseText);
                    window.data = data;
					//console.log(data.length);
                    for (i=0;i<data.length;i++) {
						globe.addData(data[i][1], {format: 'magnitude', name: data[i][0], animated: true}, i);
                    }
                    globe.createPoints();
                    settime(globe,0)();
                    globe.animate();
                    document.body.style.backgroundImage = 'none'; // remove loading
                }
            }
        };
        xhr.send(null);
    }

</script>
</body>