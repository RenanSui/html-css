// Array of alphabets
let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];

// Getting the element
let text_heading = document.querySelector(".text_heading");

//Letter to be printed ***IMPORTANT***
frontText = "Welcome to my Portfolio";

// function to delay anything
function waiting(ms)
{
    return new Promise( resolve => 
        {
        
        setTimeout(() => {resolve('')} , ms)
        
        })
}

//Function to add a dot and delete dot in a eternal loop
async function infiniteDot()
{
    while (true)
    {
        await waiting(500);
        text_heading.innerHTML += '.';
        await waiting(500);
        text_heading.innerHTML = text_heading.innerHTML.substring(0, text_heading.innerHTML.length -1)
    }
}


async function findLetter(){
    let char;
    
    //Loop the string to be printed
    for(let j = 0; j < frontText.length; j++)
        {
            //Loop the alphabet
            for(let i = 0; i < alphabet.length; i++)
            {
                await waiting(0.5);
                char = alphabet[i]
                
                //Conditions to load the character in the DOM, or load spaces or temporary letter
                //TEMPORARY Character using equal sign
                if(!char === frontText[j].toLowerCase())
                {
                    text_heading.innerHTML = char;
                    break;
                }
                //Load spaces in the DOM
                else if(frontText[j].indexOf(' ') !== -1)
                {
                    text_heading.innerHTML += (String.fromCharCode(32));
                    break;
                }
                //Load the character in the DOM
                else if(char === frontText[j].toLowerCase())
                {
                    text_heading.innerHTML += char;
                    break;
                }
            }
        }
    // Calling infiniteDot in the end of the function
    // infiniteDot()
}

findLetter()