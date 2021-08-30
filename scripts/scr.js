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

function showPass()
{
    var passinputfield = document.getElementById("passwordInput");
    var passBut = document.getElementById("passButton");
    if (passinputfield.type == "password")
    {
        passinputfield.type = "text";
        passBut.innerText = "Hide";

    } else {
        passinputfield.type = "password";
        passBut.innerText = "Show"  
    }
}

var canenter;

var passWord;

function lightup(userInput)
{
    passWord = userInput;
    if (userInput.length < 6)
    {
        document.getElementById("loginButton").style.backgroundColor = "#B2DFFC";
    } else if (userInput.length >= 6){
        document.getElementById("loginButton").style.backgroundColor = "#0F9BF9";
        canenter = true;
    }
}

var userName;

function usernameCredentials(credentials)
{
    userName = credentials;
}

function captureCredentials()
{
    if (canenter)
    {
        alert("Username : " + userName + " password : " + passWord);
    }
}