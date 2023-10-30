
function print(s) {
	console.log(s);
}

$(document).ready(function(){
	
	var s = $('.roleName').eq(0).text();
	if (s === "Narrator - ") {
		var today = new Date().toLocaleDateString();
		
	}
	print(s);
});