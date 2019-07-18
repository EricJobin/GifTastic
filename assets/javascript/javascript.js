// API Homework - Giphy


var cats = ["Kermit the Frog","Fozzie Bear","Miss Piggy","Rizzo the Rat" ];

function renderButtons() { //Function to render buttons  buttons
    $("#buttons").empty();
    for (var i = 0; i < cats.length; i++) {

        var a =`<button data-person="${cats[i]}">${cats[i]}</button>`;
        $("#buttons").append(a);

    }
};

//--------- These Funcions will convert user input into Camel Case -----------------------------------
function splitAndLowerCase(rs) {
    var lcs=rs.toLowerCase();
    var sS = lcs.split(" ");
    return sS;
}
function toCamelCase(cc){
    var outputString;
    for (var x=0; x<cc.length; x++){
        if (x == 0){
            outputString=cc[x]
        }
        else{
            var newWord = cc[x].toUpperCase().charAt(0);
            for(var y=1; y<cc[x].length; y++){
                newWord=newWord.concat(cc[x].charAt(y))
            }
            outputString=outputString.concat(newWord);
        }
    }
    return outputString;
}
function convertString(inputString){
    return toCamelCase(splitAndLowerCase(inputString));
}
//----------------------------------------------------------------------------------------------


$(document).ready(function() { // This listens for a button click and will display images from giphy

    $("#add-button").on("click", function(event) { // Function to add new buttons (Not Working)
        // console.log("Go! Clicked");
        // console.log(event);
        event.preventDefault();

        var cat = $("#movie-input").val().trim();
        // console.log(cat);
        cats.push(cat);
        renderButtons();
    });
    
    $(document).on("click", ".xbuttons, img", function() {
        var person = event.srcElement.dataset.person;
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +person + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

        // Calls for info, displays gifs in browser
        if(person != undefined){

            $.ajax({
            url: queryURL,
            method: "GET"
            })
            .then(function(response) {
                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var gifDiv = $("<div>");
                    var rating = results[i].rating;
                    var p = $("<p>").text("Rating: " + rating);
                    var personID = convertString(person);
                    var personImage = `
                        <img src="${results[i].images.fixed_height_still.url}" 
                        data-state="still" 
                        data-still="${results[i].images.fixed_height_still.url}" 
                        data-animate="${results[i].images.fixed_height.url}" 
                        id="${personID}${i}">`// change this

                    gifDiv.prepend(p); //Rating
                    gifDiv.prepend(personImage); //Image

                    $("#gifs-appear-here").prepend(gifDiv);
                }
            });
        }
        // End of this Function


        // Function to toggle gif on/off
        var selectedImage=event.path[0].id;

        if(event.path[0].dataset.state == "still"){
            $(`#${selectedImage}`).attr("src", event.path[0].dataset.animate);
            $(`#${selectedImage}`).attr("data-state", "animate");
        //     // ok, this works, but only for keanu, not keanu reeves, why are spaces in ids fucking me? I'll deal with it later
        //     // mabe spice it at " " and add all elements of array together for id name
        }
        else if (event.path[0].dataset.state == "animate"){ 
            $(`#${event.path[0].id}`).attr("src", event.path[0].dataset.still);
            $(`#${event.path[0].id}`).attr("data-state", "still");
        }
        // End of this Function


    }) // End of $(document).on("click", ".xbuttons, .xgif, img", function()

    renderButtons()
});