function LeftPanel(left){
	display=document.getElementById('left').style.display;
	if (display == "none") {
		document.getElementById('left').style.display="block";
		document.getElementById('both').style.display="none";
		document.getElementById('right').style.display="none";
	}
}
function BothPanel(both){
	display=document.getElementById('both').style.display;
	if (display == "none") {
		document.getElementById('both').style.display="block";
		document.getElementById('left').style.display="none";
		document.getElementById('right').style.display="none";
	}
}
function RightPanel(right){
	display=document.getElementById('right').style.display;
	if (display == "none") {
		document.getElementById('right').style.display="block";
		document.getElementById('both').style.display="none";
		document.getElementById('left').style.display="none";
	}
}

