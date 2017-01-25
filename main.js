var clicks = 0;

function objectClick(number) {
	clicks = clicks + number ;
	document.getElementById("clicks").innerHTML = clicks;
};

var cursors = 0;
	function buyCursor() {
		var cursorCost = Math.floor(10 * Math.pow(1.1,cursors)); //Cost of cursor
		if(clicks >= cursorCost) {
			cursors = cursors + 1;
			clicks = clicks - cursorCost;
			document.getElementById("cursors").innerHTML = cursors;
			document.getElementById("clicks").innerHTML = clicks;
		};
		var nextCost = Math.floor(10 * Math.pow(1.1,cursors));
		document.getElementById("cursorCost").innerHTML = nextCost;
	};
	

	//xxsupercursors
	
	
	var superCursors = 0;
	function buySuperCursor() {
		var superCursorCost = Math.floor(100 * Math.pow(1.1,superCursors));
		if(clicks>= superCursorCost) {
			superCursors = superCursors + 1;
			clicks = clicks - superCursorCost;
			document.getElementById("superCursors").innerHTML = superCursors;
			document.getElementById("clicks").innerHTML = clicks;
		};
		var nextSuperCursorCost = Math.floor(100 * Math.pow(1.1,superCursors));
		document.getElementById("superCursorCost").innerHTML = nextSuperCursorCost;
	};
	
var superCursorIncrement = 1;
	function buySuperCursor1() {
		var superCursor1Cost = 100;
		if(clicks>= superCursor1Cost) {
			superCursorIncrement = superCursorIncrement * 2;
			clicks = clicks - 100;
			document.getElementById("clicks").innerHTML = clicks;
		};
	};
	
	
	
	window.setInterval(function(){
		
		objectClick(cursors);
		objectClick(superCursors * superCursorIncrement * 10);
		
	}, 1000);