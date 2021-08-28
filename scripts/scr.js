/*Initial loading stage*/
var remove_Property = function() 
{
    element = document.styleSheets[0].cssRules[0].style;
    element.removeProperty('background-image');
}

window.onload = remove_Property;