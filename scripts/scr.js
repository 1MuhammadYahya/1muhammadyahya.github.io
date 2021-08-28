/*Initial loading stage*/
var remove_Property = function() 
{
    element = document.getElementById("loader");
    element.remove();
}


setTimeout(remove_Property, 1500);

function run()
{
    element = document.getElementById("mainPage");
    element.style.display = "flex";
}

setTimeout(run, 1500);