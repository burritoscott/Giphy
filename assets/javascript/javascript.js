var hobbyInput;

var giphyURL = "http://api.giphy.com/v1/gifs/search?q=" + hobbyInput + "&api_key=VkLNnBxpO44FYzfewbL2ZtRDSRBkgXAx&limit=10";

    $.ajax({
    url : giphyURL,
    method: "GET"
    }).then(function(response){
        $("#search").on("click", function(){
            event.preventDefault();
            hobbyInput = $("input").val();

            console.log(response.data[0]);
            
            $("#buttons").append("<button>" + hobbyInput);

    });
});
// "q" - string - search query term or phrase
// limit default is 25 - we need to set the limit to 10
// "rating" - string - limit results to those rated (y,g, pg, pg-13 or r).
