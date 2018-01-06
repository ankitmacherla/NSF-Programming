function getUntranslated(){
	return document.getElementByName("translate-me").value;
}

function translate(){
	var untranslated = getUntranslated();
	var translated = "";
	for(int i = 0; i < untranslated.length; i++){
		var currentLetter = untranslated.charAt(i);
		if(currentLetter == 'a'|| currentLetter == 'e' || currentLetter == 'i' ||
		 currentLetter == 'o' || currentLetter == 'u'){
			translated += currentLetter;
		}
		else{
			translated += currentLetter + "ub";
		}
	}
	displayTranslated(translated);
	return translated;
}

function displayTranslated(text){
	document.getElementById("translatedText").innerHTML = text;
}

function asdf(){
	displayToID("translatedText", "THIS IS TRANSLATED");
}
function displayToID(add, text){
	document.getElementById(add).innerHTML=text;
}