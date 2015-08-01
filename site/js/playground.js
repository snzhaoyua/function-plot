'use strict';

// easy
functionPlot({
  target: '#playground',
  disableZoom: true,
  data: [{
    fn: 'x^2'
  }]
})

//// annotation test
//functionPlot({
//  target: '#playground',
//  data: [{
//    fn: 'x * x'
//  }],
//  annotations: [{
//    x: 2,
//    text: 'x = 2'
//  }, {
//    y: 2,
//    text: 'y = 2'
//  }]
//});

//// implicit
//functionPlot({
//  target: '#playground',
//  data: [{
//    fn: 'x * x + y * y - 1',
//    implicit: true
//  }]
//});

//// failing:
//var instance = functionPlot({
//  target: '#playground',
//  data: [
//    { fn: 'sin(exp(x))', graphOptions: {sampler: 'mathjs', type: 'line'}, samples: 4000 },
//    { fn: 'tan(x)', graphOptions: {sampler: 'mathjs', type: 'line'}, samples: 5000 },
//    //{ fn: 'gamma(x)', graphOptions: {sampler: 'mathjs', type: 'line'} },
//    //{ fn: 'sin(x/2)' },
//    //{ fn: 'cos(x)' },
//    //{ fn: 'tan(x)' },
//    //{ fn: 'cos(x) + sin(x/4)' }
//  ]
//})
//instance.on('eval', function (data, i, isHelper) {
//  if (!isHelper) {
//    console.log(data, i)
//  }
//})

//// parametric:
//functionPlot({
//  target: '#playground',
//  yDomain: [-1.897959183, 1.897959183],
//  xDomain: [-3, 3],
//  data: [{
//    //x: 'cos(5t)',
//    //y: 'sin(3t)',
//
//
//    //y=(cosq)(e^(cosq)-2cos4q-(sin(q/12))^5)
//    //x=(sinq)(e^(cosq)-2cos4q-(sin(q/12))^5)
//    x: 'sin(t) * (exp(cos(t)) - 2 cos(4t) - sin(t/12)^5)',
//    y: 'cos(t) * (exp(cos(t)) - 2 cos(4t) - sin(t/12)^5)',
//    range: [-10 * Math.PI, 10 * Math.PI],
//    parametric: true,
//    graphOptions: {
//      type: 'line'
//    }
//  }]
//});

//// polar
//functionPlot({
//  target: '#playground',
//  yDomain: [-1.897959183, 1.897959183],
//  xDomain: [-3, 3],
//  data: [{
//    r: 'sin(6 theta) + 2',
//    polar: true,
//    graphOptions: {
//      type: 'line'
//    }
//  }]
//});

//// update
//var options = {
//  target: '#playground',
//  data: [{
//    fn: 'x'
//  }]
//};
//var instance
//document.querySelector('#update').addEventListener('click', function () {
//  if (!options.title) {
//    // add a title, a tip and change the function to y = x * x
//    options.title = 'hello world';
//    options.tip = {
//      xLine: true,
//      yLine: true
//    };
//    options.data[0] = {
//      fn: 'x * x',
//      derivative: {
//        fn: '2 * x',
//        updateOnMouseMove: true
//      }
//    }
//  } else {
//    // remove the title and the tip
//    // update the function to be y = x
//    delete options.title;
//    delete options.tip;
//    options.data[0] =  {
//      fn: 'x'
//    }
//  }
//  functionPlot(options);
//});
//instance = functionPlot(options);
//instance.on('eval', function (data, i, isHelper) {
//  if (!isHelper) {
//    console.log(data, i)
//  }
//})

// points
//functionPlot({
//  target: '#playground',
//  data: [{
//    points: [
//      [1, 1],
//      [2, 1],
//      [2, 2],
//      [1, 2],
//      [1, 1]
//    ],
//    graphOptions: {
//      type: 'line',
//      sampler: 'mathjs'
//    }
//  }]
//});
