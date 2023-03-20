//your JS code here. If required.

// assignment
function func(){
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("Hello, world!");
		}, 1000);
	});
}
func().then((value) => document.getElementById("output").innerText = value);
