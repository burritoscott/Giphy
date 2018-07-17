
var hobbies = ["Skiing", "Scuba Diving", "Climbing Trees", "Eating Dirt"];
var query, hobbyKey, arrButton, res;

//loop through the array to create buttons with text
//put into a function and call it at the bottom of the page
function createButton() {
    for (var key in hobbies) {
        hobbyKey = hobbies[key];
        arrButton = $("<button class = 'searchButton'>").text(hobbyKey);
        $("#buttons").append(arrButton);
    }
};

function makeRequest(query) {
    var giphyURL = "http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=VkLNnBxpO44FYzfewbL2ZtRDSRBkgXAx&limit=10";
    $.ajax({
        url: giphyURL,
        method: "GET"
    }).then(function (response) {

        // res = $("div").text(JSON.stringify(response.data));
        console.log(response);
        for(var i=0; i<response.data.length; i++){
            var resultDiv = $("<div class = 'resultDiv'>");
            var rating = response.data[i].rating;
            var ratingP = $("<p>").text(rating);
            resultDiv.append(ratingP);
            var imageDiv = $("<img>");
            imageDiv.attr("src", response.data[i].images.fixed_height_still.url);
            imageDiv.attr("data-still", response.data[i].images.fixed_height_still.url);
            imageDiv.attr("data-animate", response.data[i].images.fixed_height.url);
            imageDiv.attr("data-state", "still");
            //create a click event to switch from still to animated
            
            
            resultDiv.append(imageDiv);
            $(".container").append(resultDiv);
        }

        //add spans for the 10 gifs that respond and display them on the page

    });
};

$(document).on("click", ".searchButton", function(event){
    $(".container").empty();
    var userSearch = event.target.innerText;
    makeRequest(userSearch);
    
});

//function to push 'input' into the array and to create a button
$("#search").on("click", function () {
    event.preventDefault();
    query = $("input").val();
    hobbies.push(query);
    $("#buttons").append("<button class = 'searchButton'>" + query);
});
// "q" - string - search query term or phrase
// limit default is 25 - we need to set the limit to 10
// "rating" - string - limit results to those rated (y,g, pg, pg-13 or r).
createButton();
