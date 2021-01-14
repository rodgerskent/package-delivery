// Create two arrays, each of which will hold data for a different trace
var x = ['Customer Rating (x20)', 'On-Time & Complete']
var y0 = [96, 99.5];
var y1 = [78, 96.5];

// Create a trace object with the data in `y0`
var trace1 = {
  x: x,
  y: y0,
  text: "13 Week Avg",
  name: "13 Week Avg",
  //label = ["13-Week"],
  //visible = 'legendonly',
  
  //showlegend = true,
  type: "bar"
};

// Create a trace object with the data in `y1`
var trace2 = {
  x: x,
  y: y1,
  text: "52 Week Avg",
  name: "52 Week Avg",
  type: "bar"
};

// Create a data array with the above two traces
var data = [trace1, trace2];

// Use `layout` to define a title
var layout = {
  title: "Customer Experience Rating & On-Time & Complete Percent"
};

// Render the plot to the `plot1` div
Plotly.newPlot("plot1", data, layout);





// Create two arrays, each of which will hold data for a different trace
var x = ['Injury', 'Crash']
var y0 = [.1, .6];
var y1 = [.3, 1.2];

// Create a trace object with the data in `y0`
var trace1 = {
  x: y0,
  y: x,
  text: "13 Week Avg",
  name: "13 Week Avg",
  type: "bar",
  orientation: "h"
};

// Create a trace object with the data in `y1`
var trace2 = {
  x: y1,
  y: x,
  text: "52 Week Avg",
  name: "52 Week Avg",
  type: "bar",
  orientation: "h"
};

// Create a data array with the above two traces
var data2 = [trace1, trace2];

// Use `layout` to define a title
var layout2 = {
  title: "Injury & Crash Frequency"
};

// Render the plot to the `plot1` div
Plotly.newPlot("plot2", data2, layout2);




// Create two arrays, each of which will hold data for a different trace
var x = ['18Oct', '25Oct', '01Nov', '08Nov', '15Nov', '22Nov', '29Nov', '06Dec', '13Dec', '20Dec', '27Dec', '03Jan', '10Jan']
var y0 = [16, 16.5, 15, 15.7, 16.2, 16.6, 17.0, 16.8, 17.2, 17.4, 18.1, 17.9, 18.4];


// Create a trace object with the data in `y0`
var trace1 = {
  x: x,
  y: y0,
  type: "line",
  
};

// // Create a data array with the above two traces
var data3 = [trace1];

// // Use `layout` to define a title
var layout3 = {
  title: "Items Delivered Per Paid Hour"
};

// // Render the plot to the `plot1` div
Plotly.newPlot("plot3", data3, layout3);

// Create two arrays, each of which will hold data for a different trace
var x = ['Retention Percent', 'Staff Percent']
var y0 = [93, 102];
var y1 = [88, 88];

// Create a trace object with the data in `y0`
var trace1 = {
  x: x,
  y: y0,
  text: "13 Week Avg",
  name: "13 Week Avg",
  type: "bar"
};

// Create a trace object with the data in `y1`
var trace2 = {
  x: x,
  y: y1,
  text: "52 Week Avg",
  name: "52 Week Avg",
  type: "bar"
};

// Create a data array with the above two traces
var data4 = [trace1, trace2];

// Use `layout` to define a title
var layout4 = {
  title: "Team Member Retention & Staffing Percent"
};

// Render the plot to the `plot1` div
Plotly.newPlot("plot4", data4, layout4);