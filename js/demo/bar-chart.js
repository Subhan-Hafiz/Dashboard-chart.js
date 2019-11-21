// var ctx = document.getElementById("barChart");

// let data =  {
//     datasets: [{
//         barPercentage: 0.5,
//         barThickness: 6,
//         maxBarThickness: 8,
//         minBarLength: 2,
//         data: [10, 20, 30, 40, 50, 60, 70]
//     }]
// };

// let options = {
//     scales: {
//         xAxes: [{
//             gridLines: {
//                 offsetGridLines: true
//             }
//         }]
//     }
// };
data = [];
  	let toggle = false;
	function updateData() {

		for (var i = 0; i < 9; i++) {
			let foo = Math.floor(Math.random() * 21); 
			data.push(foo);
		};
		return data;
	};

	function toggleVal(){
		toggle = !toggle;
		return toggle;
	};
	function toggleMonthlyVal(){
		toggle = !toggle;
		return toggle;
	};
	function toggleYearlyVal(){
		toggle = !toggle;
		return toggle;
	};

	// function randomData() {
	// 	let newData = [];
	// 	for (var i = 0; i < 9; i++) {
	// 		let foo = Math.floor(Math.random() * 21); 
	// 		data.push(foo);
	// 	};
	// 	return newData;
	// };
	function monthlyFunction(){
    // console.log(i);
	// i+=i;
	let newData =[];
    if(toggle){
		for (var c = 0; c <= 3; c++) {
			for (var i = 0; i < 9; i++) {
				let foo = Math.floor(Math.random() * 21); 
				data.push(foo);
			};
		console.log(data);
		newData = data;
		myChart2.data.datasets[c].data = newData;
		// myChart.data.datasets[1].data = data;
		// myChart.data.datasets[2].data = data;
		// myChart.data.datasets[3].data = data;
		data =[];
	};
	
	myChart2.update();
	setTimeout(yourFunction, 5000);
};

	};
	function YearlyFunction(){
		// console.log(i);
		// i+=i;
		let newData =[];
		if(toggle){
			for (var c = 0; c <= 3; c++) {
				for (var i = 0; i < 9; i++) {
					let foo = Math.floor(Math.random() * 21); 
					data.push(foo);
				};
			console.log(data);
			newData = data;
			myChart3.data.datasets[c].data = newData;
			// myChart.data.datasets[1].data = data;
			// myChart.data.datasets[2].data = data;
			// myChart.data.datasets[3].data = data;
			data =[];
		};
		
		myChart3.update();
		setTimeout(yourFunction, 5000);
	};
	
		};
		function yourFunction(){
			// console.log(i);
			// i+=i;
			let newData =[];
			if(toggle){
				for (var c = 0; c <= 3; c++) {
					for (var i = 0; i < 9; i++) {
						let foo = Math.floor(Math.random() * 21); 
						data.push(foo);
					};
					console.log(data);
					newData = data;
					myChart1.data.datasets[c].data = newData;
					// myChart.data.datasets[1].data = data;
					// myChart.data.datasets[2].data = data;
					// myChart.data.datasets[3].data = data;
					data =[];
			};
			
			myChart1.update();
			setTimeout(yourFunction, 5000);
		};
		
			};
var ctx = document.getElementById("barChart").getContext('2d');
var myChart3 = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ["<  1","1 - 2","3 - 4","5 - 9","10 - 14","15 - 19","20 - 24","25 - 29","> - 29"],
		datasets: [{
			label: 'AC',
			backgroundColor: "#caf270",
			data: [12, 59, 5, 56, 58,12, 59, 87, 45],
		}, {
			label: 'Microwave',
			backgroundColor: "#45c490",
			data: [12, 59, 5, 56, 58,12, 59, 85, 23],
		}, {
			label: 'Fridge',
			backgroundColor: "#008d93",
			data: [12, 59, 5, 56, 58,12, 59, 65, 51],
		}, {
			label: 'Oven',
			backgroundColor: "#2e5468",
			data: [12, 59, 5, 56, 58, 12, 59, 12, 74],
		}],
	},
options: {
    tooltips: {
      displayColors: true,
      callbacks:{
        mode: 'x',
      },
    },
    scales: {
      xAxes: [{
        stacked: true,
        gridLines: {
          display: false,
        }
      }],
      yAxes: [{
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
        type: 'linear',
      }]
    },
		responsive: true,
		maintainAspectRatio: false,
		legend: { position: 'bottom' },
	}
});

var ctx1 = document.getElementById("barChart1").getContext('2d');
var myChart1 = new Chart(ctx1, {
	type: 'bar',
	data: {
		labels: ["<  1","1 - 2","3 - 4","5 - 9","10 - 14","15 - 19","20 - 24","25 - 29","> - 29"],
		datasets: [{
			label: 'AC',
			backgroundColor: "#caf270",
			data: [12, 19, 25, 36, 28,32, 19, 67, 35],
		}, {
			label: 'Microwave',
			backgroundColor: "#45c490",
			data: [12, 51, 5, 56, 68,12, 59, 55, 23],
		}, {
			label: 'Fridge',
			backgroundColor: "#008d93",
			data: [12, 31, 5, 56, 58,42, 59, 35, 51],
		}, {
			label: 'Oven',
			backgroundColor: "#2e5468",
			data: [12, 89, 5, 6, 5, 12, 59, 12, 74],
		}],
	},
options: {
    tooltips: {
      displayColors: true,
      callbacks:{
        mode: 'x',
      },
    },
    scales: {
      xAxes: [{
        stacked: true,
        gridLines: {
          display: false,
        }
      }],
      yAxes: [{
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
        type: 'linear',
      }]
    },
		responsive: true,
		maintainAspectRatio: false,
		legend: { position: 'bottom' },
	}
});


var ctx2 = document.getElementById("barChart2").getContext('2d');
var myChart2 = new Chart(ctx2, {
	type: 'bar',
	data: {
		labels: ["<  1","1 - 2","3 - 4","5 - 9","10 - 14","15 - 19","20 - 24","25 - 29","> - 29"],
		datasets: [{
			label: 'AC',
			backgroundColor: "#caf270",
			data: [12, 59, 35, 6, 58,12, 59, 87, 45],
		}, {
			label: 'Microwave',
			backgroundColor: "#45c490",
			data: [92, 59, 52, 56, 58,12, 59, 5, 23],
		}, {
			label: 'Fridge',
			backgroundColor: "#008d93",
			data: [12, 59, 5, 56, 28,12, 59, 65, 51],
		}, {
			label: 'Oven',
			backgroundColor: "#2e5468",
			data: [12, 59, 15, 56, 58, 12, 59, 12, 24],
		}],
	},
options: {
    tooltips: {
      displayColors: true,
      callbacks:{
        mode: 'x',
      },
    },
    scales: {
      xAxes: [{
        stacked: true,
        gridLines: {
          display: false,
        }
      }],
      yAxes: [{
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
        type: 'linear',
      }]
    },
		responsive: true,
		maintainAspectRatio: false,
		legend: { position: 'bottom' },
	}
});