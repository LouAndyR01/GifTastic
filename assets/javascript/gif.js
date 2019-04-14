// <------------------ Psuedo coding steps -------------------->
// **Steps for homework. Trying to metally break down the solution into smaller tasks.....
// *clicking to set the data type.  Pass in excactly (band name) what is being searched for.
// *run console log frequently to make sure app is working.
// 1. create array of my topic, simple!
// 2. create the buttons for my topic.
// 3. On click set up for the buttons to get the gifs.
// 4. create the loop for the array of gifs and link to button for specific topic element.
// 5. create submit box so user can select their own gif.
// 6. set API so user can select their own gif. 
// 7. set limit in API for amount of Gifs output. 
// 8. make sure rating is displayed for each gif.
// 9. clear field after gif is outputed.
// 10. style in CSS.
// ****var apiKey= "MoNSkQro4W4eS3u98xWxH6M5hDSqyUNG"
// ****Query URL: "https://api.giphy.com/v1/gifs/search?q="+x+"&api_key=MoNSkQro4W4eS3u98xWxH6M5hDSqyUNG&limit=10&offset=0&rating=G&lang=en"

            // my bands in array; need to create buttons for each //  
    var topic =
        ["Rage Against the Machine", "Smashing Pumpkins", "Red Hot Chili Peppers", "Twenty One Pilots", "Imagine Dragons", "Post Malone", "Marshmello", "Travis Scott",
        "Gary Clark Jr", "The Rolling Stones", "Foo Fighters", "Jack Johnson", "Kendrick Lamar", "Ghostland Observatory", "Outkast"];  

            // gifs displayed //
    function displayGifs() {
        $(".gif-info").empty();
       
    var userSearch= $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userSearch + "&api_key=MoNSkQro4W4eS3u98xWxH6M5hDSqyUNG&limit=10";

        $.ajax({
            url: queryURL, method: "GET"})
            .then(function (response) {
            // console.log(response);
        for (i=0; i < 10; i++) {

            var divElem = $("<div>");
            divElem.addClass("gif-info");
            divElem.addClass("col-md-4");
            $(".gifDump").append(divElem);

            var imgElem = $("<img>");
            imgElem.attr("src", response.data[i].images.fixed_height_still.url);
            imgElem.attr("data-still", response.data[i].images.fixed_height_still.url);
            imgElem.attr("data-animate", response.data[i].images.fixed_height.url);
            imgElem.attr("data-state", "still");
            imgElem.addClass("gif");
            divElem.append(imgElem);

            var rating = $("<p>").text("Rating: " + response.data[i].rating);
            divElem.append(rating);
        }
    });
}

    function renderButtons() {
        $("#topicButtons").empty();
        for (var i=0; i<topic.length; i++) {
            var buttonElem = $("<button>");
            buttonElem.addClass("topic");
            buttonElem.addClass("btn btn-light");

            buttonElem.attr("data-name", topic[i]);
            buttonElem.text(topic[i]);
            $("#topicButtons").append(buttonElem);  
        
        }
    }
    
    $(document).on("click", ".gif", function() {
        var state = $(this) .attr("data-state");
        if (state == "still") {
            $(this).attr("src", $(this).data("animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).data("still"));
            $(this).attr("data-state", "still"); 
        };
    });
    
        $("#gifAddButton").on("click", function (event) {
            event.preventDefault();

            var userSearch = $("#userInput").val().trim();

            if (userSearch == "") {
                return false;
            } else {
                topic.push(userSearch);
            }

            renderButtons();
        });

        $(document).on("click", ".topic", displayGifs);

        renderButtons();
        
            // ************************************ Practice **************************************//


// var queryURL = "https://api.giphy.com/v1/gifs/search?q=mad+maxcat&api_key=MoNSkQro4W4eS3u98xWxH6M5hDSqyUNG";

// $.ajax({url:queryURL,method:"GET"})
//         .done(function(response){
//         // console.log(response);
//         });

// var queryURL = "https://api.giphy.com/v1/gifs/search?q=bill+cosby&api_key=MoNSkQro4W4eS3u98xWxH6M5hDSqyUNG";
// $.ajax({url:queryURL,method:"GET"})
// .done(function(response){
// // console.log(response);
// });

// var queryURL = "https://api.giphy.com/v1/gifs/search?q=rage+against+the+machine&api_key=MoNSkQro4W4eS3u98xWxH6M5hDSqyUNG";
// $.ajax({url:queryURL,method:"GET"})
// .done(function(response){
// console.log(response);
// });

// // ========Practice API manipulation here from homework
// $("button").on("click",function(){
//     // console.log("button");
//     var x = $(this).data("search");
//     //  console.log(x);
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q="+x+"&api_key=MoNSkQro4W4eS3u98xWxH6M5hDSqyUNG&limit=10";
//     // console.log(queryURL);
//     // });
//     $.ajax({url:queryURL,method:"GET"})
//         .done(function(response){
//         console.log(response);
//         })
//    