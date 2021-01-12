// Create two arrays, each of which will hold data for a different trace
var x = ['Customer Rating (x10)', 'On-Time & Complete']
var y0 = [48, 99.5];
var y1 = [39, 96.5];

// Create a trace object with the data in `y0`
var trace1 = {
  x: x,
  y: y0,
  //label = ["13-Week"],
  //visible = 'legendonly',
  //name="Positive",
  //showlegend = true,
  type: "bar"
};

// Create a trace object with the data in `y1`
var trace2 = {
  x: x,
  y: y1,
  //label = ["13-Week"],
  //visible = 'legendonly',
  //name="Negative",
  //showlegend = true,
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
  label: "13-Week Avg",
  type: "bar",
  orientation: "h"
};

// Create a trace object with the data in `y1`
var trace2 = {
  x: y1,
  y: x,
  label: "52-Week Avg",
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
var y0 = [6, 6.5, 5, 5.7, 6.2, 6.6, 7.0, 6.8, 7.2, 7.4, 8.1, 7.9, 8.4];


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
  title: "Deliveries Per Paid Hour"
};

// // Render the plot to the `plot1` div
Plotly.newPlot("plot3", data3, layout3);

// Create two arrays, each of which will hold data for a different trace
var x = ['Retention Percent', 'Staff Percent']
var y0 = [85, 88];
var y1 = [93, 102];

// Create a trace object with the data in `y0`
var trace1 = {
  x: x,
  y: y0,
  type: "bar"
};

// Create a trace object with the data in `y1`
var trace2 = {
  x: x,
  y: y1,
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