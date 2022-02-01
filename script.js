var  quoteArray = []; // java script blank array

// -- I am creating all quote object and then lastly will push in array
// -- Also i am not using real quote.. i will use sample text so please replace with some real or meaningful word
var  quoteObject1 = {
    quote: 'This is Quote 1',
    source:'This is source 1',
    citation: 'This is citation 1'    
};

var  quoteObject2 = {
    quote: 'This is Quote 2',
    source:'This is Source 2',
    citation: 'This is citation 2',
    year: 'Year 2' 
};
var  quoteObject3 = {
    quote: 'This is Quote 3',
    source:'This is Source 3',
    year: 'Year 3'    
};
var  quoteObject4 = {
    quote: 'This is Quote 4',
    source:'This is Source 4'    
};
var  quoteObject5 = {
    quote: 'This is Quote 5',
    source:'This is Source 5',
    year: 'Year 5'    
};
//----------------------------Similar way we can add more objects
//  --- Adding above objects in array
quoteArray.push(quoteObject1);
quoteArray.push(quoteObject2);
quoteArray.push(quoteObject3);
quoteArray.push(quoteObject4);
quoteArray.push(quoteObject5);

//-- This method will generate random number and we will use that number to show quote
function getRandomQuote() {
    var lenghtOfQuoteArray = quoteArray.length;
    //-- below line will generate random number from 0 to length of array
    var randomNumber = Math.floor(Math.random() * lenghtOfQuoteArray);
    return quoteArray[randomNumber]; // returning quote object

}

//-- This function will generate HTML string and that will be shown in browser page.
function printQuote(){
 var quoteObject = getRandomQuote(); //-- Function will call method and return random object
 var htmlString = "<p class='quote'>" + quoteObject.quote + "</p><br>";
 htmlString += "<p class='source'>" + quoteObject.source +"</p><br>";
 //---Checking if citation and year exists then add in htmlString 
 if(quoteObject.citation){
    htmlString += "<p class='citation'>" + quoteObject.citation +"</p><br>";
 }
 if(quoteObject.year){
    htmlString += "<p class='year'>" + quoteObject.year +"</p><br>";
 }

 document.getElementById('quote-box').innerHTML = htmlString; // assigning the string to div body

}
