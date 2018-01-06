function myf(){
	document.getElementById("myid").innerHTML = 3;
}
function iscool(s){
	s = s + " is cool";
	return s;
}
function sixorten(i){
	if(i == 6 || i == 10){
		return true;
	}
	else{
		return false;
	}
}
function check(){
	sum = 0;
	for(x = 1; x <= 10; x++){
		sum += x;
	}
	return sum;
}
document.getElementById("myid").innerHTML = "";