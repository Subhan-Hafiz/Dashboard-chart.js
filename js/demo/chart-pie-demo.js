// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';
// function drawSegmentValues()
// {
//   let totalVal = 0;
//     for(var i=0; i<myPieChart.segments.length; i++) 
//     {
//       var value = myPieChart.segments[i].value;
//        totalVal += value;
//     }
//      // Default properties for text (size is scaled)
//      ctx.fillStyle="white";
//      var textSize = canvas.width/10;
//      ctx.font= textSize+"px Verdana";
//      var radius = myPieChart.outerRadius;
//      // Get needed variables
//      // var startAngle = myPieChart.segments[i].startAngle;
//      // var endAngle = myPieChart.segments[i].endAngle;
//      // var middleAngle = startAngle + ((endAngle - startAngle)/2);

//      // Compute text location
//      var posX = canvas.width/2 //* Math.cos(middleAngle) + midX;
//      var posY = canvas.height/2 //* Math.sin(middleAngle) + midY;

//      // Text offside to middle of text
//      var w_offset = ctx.measureText(value).width/2;
//      var h_offset = textSize/4;

//      ctx.fillText(value, posX - w_offset, posY + h_offset);
// }
// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Electricity", "Gas", "Oil"],
    datasets: [{
      data: [70, 30, 20],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },

  options: {
    
    showTooltips: false,
    onAnimationProgress: drawSegmentValues,
  
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});



var data = [
  {
      value: 300,
      color:"#F7464A",
      highlight: "#FF5A5E",
      label: "Red"
  },
  {
      value: 50,
      color: "#46BFBD",
      highlight: "#5AD3D1",
      label: "Green"
  },
  {
      value: 100,
      color: "#FDB45C",
      highlight: "#FFC870",
      label: "Yellow"
  }
];

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var midX = canvas.width/2;
var midY = canvas.height/2

// Create a pie chart
var data = [
  {
      value: 300,
      color:"#F7464A",
      highlight: "#FF5A5E",
      label: "Red"
  },
  {
      value: 50,
      color: "#46BFBD",
      highlight: "#5AD3D1",
      label: "Green"
  },
  {
      value: 100,
      color: "#FDB45C",
      highlight: "#FFC870",
      label: "Yellow"
  }
];

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var midX = canvas.width/2;
var midY = canvas.height/2

// Create a pie chart
var myPieChart = new Chart(ctx).Doughnut(data, {
  showTooltips: true,
  onAnimationProgress: drawSegmentValues
});

var radius = myPieChart.outerRadius;

function drawSegmentValues()
{
  let totalVal =0;
  for(var i=0; i<3; i++) 
  {
      var value = myPieChart.segments[i].value;
      
      totalVal += value;
      
  };
  ctx.fillStyle="black";
      var textSize = canvas.width/10;
      ctx.font= textSize+"px Verdana";
      // Get needed variables
      


      // Compute text location;
      var posX = canvas.width/2;
      var posY = canvas.height/2;

      // Text offside by middle
      var w_offset = ctx.measureText(value).width/2;
      var h_offset = textSize/4;
      ctx.fillText(totalVal, posX - w_offset, posY + h_offset);
}
