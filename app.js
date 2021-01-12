// Create two arrays, each of which will hold data for a different trace
var y0 = [];
var y1 = [];

// Fill each of the above arrays with randomly generated data
for (var i = 0; i < 50; i++) {
  y0.push(Math.random());
  y1.push(Math.random() + 1);
}

// Create a trace object with the data in `y0`
var trace1 = {
  y: y0,
  // boxpoints: "all",
  type: "box"
};

// Create a trace object with the data in `y1`
var trace2 = {
  y: y1,
  // boxpoints: "all",
  type: "box"
};

// Create a data array with the above two traces
var data = [trace1, trace2];

// Use `layout` to define a title
var layout = {
  title: "Basic Box Plot"
};

// Render the plot to the `plot1` div
Plotly.newPlot("plot1", data, layout);




// Create two arrays, each of which will hold data for a different trace
var x = ['13 Week', '52 Week']
var y0 = [1, 3];
var y1 = [1, 3];

// Fill each of the above arrays with randomly generated data
// for (var i = 0; i < 50; i++) {
//   y0.push(Math.random());
//   y1.push(Math.random() + 1);
// }

// Create a trace object with the data in `y0`
var trace1 = {
  x: x,
  y: y0,
  // boxpoints: "all",
  type: "bar",
  orientation: "h"
};

// Create a trace object with the data in `y1`
var trace2 = {
  x: x,
  y: y1,
  // boxpoints: "all",
  type: "bar",
  orientation: "h"
};

// Create a data array with the above two traces
var data2 = [trace1, trace2];

// Use `layout` to define a title
var layout2 = {
  title: "Loss, Injury & Crash"
};

// Render the plot to the `plot1` div
Plotly.newPlot("plot2", data2, layout2);
