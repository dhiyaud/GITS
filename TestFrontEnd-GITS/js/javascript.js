/* LINE CHART */
var ctxLine = document.getElementById("myLineChart").getContext("2d");
var myLineChart = new Chart(ctxLine, {
	type: 'line',
	data: {
		datasets: [{
			data: [6, 4, 3, 4, 11, 20],
			backgroundColor: '#00CED1',
			pointRadius: 4,
			pointStyle: 'circle',
			pointBackgroundColor: 'black'
		}],
		labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni'],
	},
	options: {
		legend: {
			display: false
		},
	}	
});

/* DOUGHNUT CHART */
var ctxDoughnut = document.getElementById("myDoughnutChart").getContext("2d");
var myDoughnutChart = new Chart(ctxDoughnut, {
	type: 'doughnut',
	data: {
		datasets: [{
			data: [37.5, 25, 37.5, 25],
			backgroundColor: [
			"lightgreen", 
			"lightblue", 
			"yellow",
			"orange"],
		}],
		labels: ['xxxx', 'xxxxxxxx', 'xxxxxxxxxxxxxx','xxxxxxxxxx']
	},
	options: {
		legend: {
			display: true,
			position: 'bottom',	
			labels: {
				usePointStyle: true,
				fontColor: 'black'
			}
		}
	}
});

/* DROPDOWN BUTTON */
var dropdown = document.getElementsByClassName("dropbtn");
var i;

for (i = 0; i < dropdown.length; i++) {
	dropdown[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var dropdownContent = this.nextElementSibling;
		if (dropdownContent.style.display === "block") {
			dropdownContent.style.display = "none";
		} else {
			dropdownContent.style.display = "block";
		}
	});
}