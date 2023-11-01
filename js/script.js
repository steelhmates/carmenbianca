
function print(s) {
	console.log(s);
}
var colors = [
	'#fefed8',
	'#dbffdb',
	'#ffd5d6'
]
function getColor(role) {
	c = '#eee';
	switch (role) {
		case 'God': c = colors[0]; break;
		case 'Narrator': c = colors[1]; break;
		case '': c = colors[2]; break;
		default: break;
	}
	return c;
}
$(document).ready(function(){
	if ($('.role')) {
		var pageStr = $('#page').attr('name');
		var page = parseInt(pageStr, 10);
		var nUrl = '../roles/'+page+'.txt';
		$.ajax({type: 'GET', url: nUrl, async: true,
			success: function(result) {
				var list = result.replace("\r", "").split('\n');
				var lDoc = $('.role');
				for (i=0; i<Math.min(lDoc.length, list.length); i++) {
					var role = list[i].trim(); // Trim required.
					var rText = lDoc.eq(i).find('.roleText').first();
					var rName = lDoc.eq(i).find('.roleName').first();
					if (role === 'Narrator') {
						rName.html("Narrator<span> - Year 722<span class='verify'>3</span>, 1st November, 2023</span>");
					} else {
						rName.html(role);
					}					
					rText.css('background-color', getColor(role));
				}
			}
		});
	}
});

/*
var today = new Date().toLocaleDateString();

error: function (jqXHR, textStatus, errorThrown) {
	console.log(jqXHR)
},

.find(...)

$.each([ 52, 97 ], function( index, value ) {
  alert( index + ": " + value );
});
*/