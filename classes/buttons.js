function htmlClick(){
	displayToID("address", "HTML!");
}
function jsClick(){	
	displayToID("address", "JS!");
}
function cssClick(){
	displayToID("address", "CSS!");
}
function displayToID(add, text){
	document.getElementById(add).innerHTML=text;
}