/*Initial loading stage*/
var remove_Property = function() 
{
    element = document.styleSheets[0].cssRules[0].style;
    element.removeProperty('background-image');
}

function runfunction(){
    setTimeout(remove_Property, 1500);
}

runfunction();