//below is a function. its contents do not run unless specifically executed to run.
function createLink(title, url){
  var div_sidebar = document.getElementsByClassName("sidenav")[0];
  var link = document.createElement('a');
  var link_text = document.createTextNode(title);
  link.appendChild(link_text);
  link.title = title;
  link.href = url;
  div_sidebar.appendChild(link);
  return div_sidebar;
}
//below is not part of the function. It runs when the file, sidebar.js, is called. 
if(document.title == "NSF Programming 2017"){
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
