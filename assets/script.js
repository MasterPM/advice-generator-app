fetch("https://api.adviceslip.com/advice")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // Do something with the data
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

//   <!DOCTYPE html>
// <html>
// <head>
// 	<title>Auto Button Click and API ID Reload</title>
// </head>
// <body onload="document.getElementById('myButton').click();">
// 	<button id="myButton">Get Advice</button>
// 	<div id="ID"></div>
// 	<p id="advice"></p>

// 	<script>
// 		document.getElementById('myButton').addEventListener('click', function() {
// 			fetch('https://api.adviceslip.com/advice')
// 				.then(response => response.json())
// 				.then(data => {
// 					document.getElementById('advice').innerHTML = data.slip.advice;
// 					document.getElementById('ID').innerHTML = data.slip.id;
// 				});
// 		});
// 	</script>
// </body>
// </html>
