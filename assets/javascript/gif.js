// <------------------ Psuedo coding steps -------------------->
// **Steps for homework. Trying to metally break down the solution into smaller tasks.....
// *clicking to set the data type.  Pass in excactly (band name) what is being searched for.
// *run console log frequently to make sure app is working.
// 1. create array of my topics, simple!
// 2. create the buttons for my topics.
// 3. On click set up for the buttons to get the gifs.
// 4. create the loop for the array of gifs and link to button for specific topic element.
// 5. create submit box so user can select their own gif.
// 6. set API so user can select their own gif. 
// 7. set limit in API for amount of Gifs output. 
// 8. make sure rating is displayed for each gif.
// 9. clear field after gif is outputed.
// 10. style in CSS.

// ****My Api Key: MoNSkQro4W4eS3u98xWxH6M5hDSqyUNG
// ****Query URL: "https://api.giphy.com/v1/gifs/search?q="+x+"&api_key=MoNSkQro4W4eS3u98xWxH6M5hDSqyUNG&limit=10&offset=0&rating=G&lang=en"


// my bands in array; need to create buttons for each.
    var topics = ["Rage Against the Machine", "Smashing Pumpkins", "Red Hot Chili Peppers", "Twenty One Pilots", "Imagine Dragons", "Post Malone", "Marshmello", "Travis Scott",
            "Gary Clark Jr", "The Rolling Stones","Foo Fighters", "Jack Johnson","Kendrick Lamar","Ghostland Observatory","Outkast"]
       
            // for loop to make button for my "topics" gifs.
        for (var i = 0; i < topics.length; i++) {
            var button = $('<button>').text(topics[i]);
      $('#musicButtons').append(button);
        }

        // create new button when user submits a band of choice.
$(addBand).on('click', function() {
    event.preventDefault();
    var bandName = $('input'.val();

    topics.push(bandName);

    var button = $('<button>').text(bandName[0].toUpperCase() + bandName.slice(1));
$('#musicButtons').append(button);
$('#userInput').val("");
});





 







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
//     // })
//     $.ajax({url:queryURL,method:"GET"})
//         .done(function(response){
//         console.log(response);
//         })
//     })
