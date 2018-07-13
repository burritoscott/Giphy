$(document).ready(function(){

var hobbies = ["Skiing", "Scuba Diving", "Climbing Trees", "Eating Dirt"];
var hobbyInput, hobbyKey, arrButton, buttonAttr, resData;

var giphyURL = "http://api.giphy.com/v1/gifs/search?q=" + hobbyInput + "&api_key=VkLNnBxpO44FYzfewbL2ZtRDSRBkgXAx&limit=10";

$.ajax({
url : giphyURL,
method: "GET"
}).then(function(response){

    //loop through the array to create buttons with text
    for (var key in hobbies){
        console.log(hobbies[key]);
    
        hobbyKey = hobbies[key];
        arrButton = $("<button>").text(hobbyKey);
        $("#buttons").append(arrButton);
    
    };

    //function to push 'input' into the array and to create a button
    $("#search").on("click", function(){
        event.preventDefault();
        hobbyInput = $("input").val();
        hobbies.push(hobbyInput);
        $("#buttons").append("<button>" + hobbyInput);

        console.log(response);

        //loop to create buttons for array - then have the input val push into the array.
    });
        //add spans for the 10 gifs that respond and display them on the page
    $("button").on("click", function(){
        buttonAttr = $("<p>").html(response);
        resData = $("<span>").val(buttonAttr);
        $("#container").append(resData);
        console.log(response.data[0].imbed_url);
               
    });
});
// "q" - string - search query term or phrase
// limit default is 25 - we need to set the limit to 10
// "rating" - string - limit results to those rated (y,g, pg, pg-13 or r).
});