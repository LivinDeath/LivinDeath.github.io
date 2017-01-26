var clicks = 0;

	//xxinfo
	
var cps = 0
function cpsCalc(number) {
    cps = ((cursors * cursorIncrement) + (superCursors * superCursorIncrement * 10)) ;
	document.getElementById("cps").innerHTML = cps;
};
	


function objectClick(number) {
	clicks = clicks + number ;
	document.getElementById("clicks").innerHTML = clicks;
};


	//xxclickvalue
	
	
var clickValue = 1
var clickUpgrades = 0
	function buyClick() {
		var clickCost = Math.floor(100 * Math.pow(3,clickUpgrades));
		if(clicks >= clickCost) {
			clickValue = clickValue * 2;
			clicks = clicks - clickCost;
			clickUpgrades = clickUpgrades + 1;
			document.getElementById("clicks").innerHTML = clicks;
		};
		var nextClickCost = Math.floor(100 * Math.pow(3,clickUpgrades));
		document.getElementById("clickCost").innerHTML = nextClickCost;
	};
	




	//xxcursors
	

var cursors = 0;
	function buyCursor() {
		var cursorCost = Math.floor(10 * Math.pow(1.1,cursors)); //Cost of cursor
		if(clicks >= cursorCost) {
			cursors = cursors + 1;
			clicks = clicks - cursorCost;
			document.getElementById("cursors").innerHTML = cursors;
			document.getElementById("clicks").innerHTML = clicks;
		};
		var nextCursorCost = Math.floor(10 * Math.pow(1.1,cursors));
		document.getElementById("cursorCost").innerHTML = nextCursorCost;
	};
	
	
	
var cursorIncrement = 1;
	function buyCursorUpgrade() {
		var cursorUpgradeCost = 100;
		if(clicks>= cursorUpgradeCost) {
			cursorIncrement = cursorIncrement * 2;
			clicks = clicks - 100;
			document.getElementById("clicks").innerHTML = clicks;
		};
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
		var superCursor1Cost = 500;
		if(clicks>= superCursor1Cost) {
			superCursorIncrement = superCursorIncrement * 2;
			clicks = clicks - 500;
			document.getElementById("clicks").innerHTML = clicks;
		};
	};
	
	
	//xxincrement	
	
	
	window.setInterval(function(){
		
		objectClick(cursors * cursorIncrement);
		objectClick(superCursors * superCursorIncrement * 10);
		cpsCalc(cps);
	}, 1000);
	

	