//below is a function. its contents do not run unless specifically executed to run.
function createLink(title, url){
  var div_sidebar = document.getElementsByClassName("sidenav")[0]; // create a variable that is an exact duplicate of the div whose id is "sidenav"
  var link = document.createElement('a'); //create a HTML <a> element
  var link_text = document.createTextNode(title); //create a textNode with the title of the link in it.
  link.appendChild(link_text); //add the link title to the <a> element
  link.title = title; //set the title of the <a>
  link.href = url; //set the href reference to the <a>
  div_sidebar.appendChild(link); //add the <a> to the sidebar copy we made earlier
  return div_sidebar; //return the sidebar copy.
}
//below is not part of the function. It runs when the file, sidebar.js, is called.
if(document.title == "NSF Programming 2017"){ //check if the current document is the main page by seeing if the title is "NSF Programming 2017"
  //This is important because this script is used on all the pages.
  //the main page is in a different folder from the rest of the classes and activities, so the file path for each of the links is different
    document.getElementsByClassName("sidenav")[0] = createLink("Home", "index.html");
    document.getElementsByClassName("sidenav")[0] = createLink("HTML", "classes/html.html");
    document.getElementsByClassName("sidenav")[0] = createLink("CSS", "classes/css.html");
    document.getElementsByClassName("sidenav")[0] = createLink("JavaScript", "classes/js.html");
    document.getElementsByClassName("sidenav")[0] = createLink("Logic", "classes/logic.html");
    document.getElementsByClassName("sidenav")[0] = createLink("Math", "classes/math.html");
    document.getElementsByClassName("sidenav")[0] = createLink("Arrays", "classes/arrays.html");
    document.getElementsByClassName("sidenav")[0] = createLink("Apps", "classes/apps.html");
    document.getElementsByClassName("sidenav")[0] = createLink("Web Apps", "classes/webapps.html");
    document.getElementsByClassName("sidenav")[0] = createLink("Tips", "classes/tips.html");
    document.getElementsByClassName("sidenav")[0] = createLink("Projects", "classes/projects.html");
}
else{
  //this is the case when the current document isn't the main page.
  document.getElementsByClassName("sidenav")[0] = createLink("Home", "../index.html");
  document.getElementsByClassName("sidenav")[0] = createLink("HTML", "../classes/html.html");
  document.getElementsByClassName("sidenav")[0] = createLink("CSS", "../classes/css.html");
  document.getElementsByClassName("sidenav")[0] = createLink("JavaScript", "../classes/js.html");
  document.getElementsByClassName("sidenav")[0] = createLink("Logic", "../classes/logic.html");
  document.getElementsByClassName("sidenav")[0] = createLink("Math", "../classes/math.html");
  document.getElementsByClassName("sidenav")[0] = createLink("Arrays", "../classes/arrays.html");
  document.getElementsByClassName("sidenav")[0] = createLink("Apps", "../classes/apps.html");
  document.getElementsByClassName("sidenav")[0] = createLink("Web Apps", "../classes/webapps.html");
  document.getElementsByClassName("sidenav")[0] = createLink("Tips", "../classes/tips.html");
  document.getElementsByClassName("sidenav")[0] = createLink("Projects", "../classes/projects.html");
}
