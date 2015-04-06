function draw() {
  var minx = -0.1, maxx = 1.1, miny = 1.1, maxy = -0.1;  
  var board = JXG.JSXGraph.initBoard('box', {
    boundingbox: [minx, miny, maxx, maxy],
    keepAspectRatio: true,
    showCopyright: false,
    showNavigation: false,
    axis:true
  });  

  var d = 0.01
  var N = 500
  var xn = 0
  var yn = 1

  for (var i = 0; i < N; i++) {
    board.create('line', [[xn, yn], [xn + Math.sqrt(1 - yn * yn), 0]], {
	  straightFirst:false,
	  straightLast:false,
	  strokeColor: 'black',
      highlightStrokeColor: 'black'
    })

    xn = xn + d * (Math.sqrt(1 - yn * yn))
    yn = yn * (1 - d)
  }

  board.create('curve', [
      function(t) { return Math.log(Math.sqrt(1 - t*t) + 1) - Math.sqrt(1 - t*t) - Math.log(t); },
	  function(t) { return t; }, 0, 1], {
	strokewidth: 4,
	strokeColor: 'blue',
	highlightStrokeColor: 'blue'
  });
}

draw();