function draw(boardName, eps, N, showAxis, createPoints, maxx) {
  var minx = -0.1, miny = 1.1, maxy = -0.1;  
  var board = JXG.JSXGraph.initBoard(boardName, {
    boundingbox: [minx, miny, maxx, maxy],
    keepAspectRatio: true,
    showCopyright: false,
    showNavigation: false,
    axis:showAxis
  });  

  var xn = 0
  var yn = 1

  for (var i = 0; i < N; i++) {
	if (createPoints) {
		var p = board.create('point',[xn, yn],{name:'', size:1, fixed:true});
	} else {
		var p = [xn, yn]
	}
    board.create('line', [p, [xn + Math.sqrt(1 - yn * yn), 0]], {
	  straightFirst:false,
	  straightLast:false,
	  strokeColor: 'black',
      highlightStrokeColor: 'black'
    })

    xn = xn + eps * (Math.sqrt(1 - yn * yn))
    yn = yn * (1 - eps)
  }
  return board;
}

function drawConstruction(boardName) {
	var minx = -0.1, maxx = 1.1, miny = 1.1, maxy = -0.1;  
  var board = JXG.JSXGraph.initBoard(boardName, {
    boundingbox: [minx, miny, maxx, maxy],
    keepAspectRatio: true,
    showCopyright: false,
    showNavigation: false,
    axis:false
  });
  var eps = 0.2
  var N = 3
  var x0 = 0
  var y0 = 1
  var x1 = x0 + eps * (Math.sqrt(1 - y0 * y0))
  var y1 = y0 * (1 - eps)
  var x2 = x1 + eps * (Math.sqrt(1 - y1 * y1))
  var y2 = y1 * (1 - eps)

  var O = board.create('point',[x1, y1],{name:'O (x_n, y_n)', size:1, fixed:true});
  var A = board.create('point',[0, 0],{name:"A", size:0, fixed:true});
  var B = board.create('point',[x1 + Math.sqrt(1 - y1 * y1), 0],{name:"B", size:0, fixed:true});
  var Bprime = board.create('point',[x2, y2],{name:"B' (x_{n+1}, y_{n+1})", size:1, fixed:true});
  var Aprime = board.create('point',[0, y2],{name:"A'", size:0, fixed:true});
  var Bprime = board.create('point',[x2, y2],{name:"B' (x_{n+1}, y_{n+1})", size:1, fixed:true});
  board.create('line', [O, [x1 + Math.sqrt(1 - y1 * y1), 0]], {
    straightFirst:false,
	straightLast:false,
	strokeColor: 'black',
    highlightStrokeColor: 'black'
  })
  board.create('line', [Bprime, [x2 + Math.sqrt(1 - y2 * y2), 0]], {
    straightFirst:false,
	straightLast:false,
	strokeColor: 'lightgray',
    highlightStrokeColor: 'lightgray'
  })
  board.create('line', [O, A], {
    straightFirst:false,
	straightLast:false,
	strokeWidth: 0.75,
	strokeColor: 'black',
    highlightStrokeColor: 'black'
  })
  board.create('line', [A, B], {
    straightFirst:false,
	straightLast:false,
	strokeWidth: 0.75,
	strokeColor: 'black',
    highlightStrokeColor: 'black'
  })
  board.create('line', [Aprime, Bprime], {
    straightFirst:false,
	straightLast:false,
	strokeWidth: 0.4,
	strokeColor: 'black',
    highlightStrokeColor: 'black',
    dash: 2
  })
  board.create('text', [0.1, 0.75, '&epsilon;']);
  board.create('text', [-0.05, 0.4, 'y_n']);
  board.create('text', [0.25, -0.05, 'a_n']);
  board.create('text', [0.25, 0.4, '1']);
}

function drawCurve(board) {
  board.create('curve', [
      function(t) { return Math.log(1 + Math.sqrt(1 - t*t)) - Math.sqrt(1 - t*t) - Math.log(t); },
	  function(t) { return t; }, 0, 1], {
	strokewidth: 4,
	strokeColor: 'red',
	highlightStrokeColor: 'red'
  });
}

function drawCurves(boardName) {
  var minx = 0, maxx = 5, miny = 1, maxy = 0;  
  var board = JXG.JSXGraph.initBoard(boardName, {
    boundingbox: [minx, miny, maxx, maxy],
    keepAspectRatio: true,
    showCopyright: false,
    showNavigation: false,
    axis:true
  });
  board.create('curve', [
      function(t) { return Math.log(1 + Math.sqrt(1 - t*t)) - Math.sqrt(1 - t*t) - Math.log(t); },
	  function(t) { return t; }, 0, 1], {
	strokeWidth: 1,
	strokeColor: 'red',
	highlightStrokeColor: 'red'
  });
  board.create('curve', [
      function(t) { return - Math.log(t); },
	  function(t) { return t; }, 0, 1], {
	strokeWidth: 1,
	strokeColor: 'blue',
	highlightStrokeColor: 'blue'
  });
}
