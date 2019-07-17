// API Homework - Giphy


var cats = ["lion","tiger","puma","cheetah" ];

function renderButtons() { //Function to render buttons  buttons
    $("#buttons").empty();
    for (var i = 0; i < cats.length; i++) {

        var a =`<button data-person="${cats[i]}">${cats[i]}</button>`;
        $("#buttons").append(a);

        // console.log(a)

    }
};



$("#add-button").on("click", function(event) {
    console.log("addbutton");
    event.preventDefault();
    var cat = $("#add-button").val().trim();
    console.log(cat);
    cats.push(cat);
    renderButtons();
});


// $("#add-button").on("click", function(event) {
//     console.log("addbutton");
//     event.preventDefault();
//     var cat = $("#add-button").val().trim();
//     console.log(cat);
//     cats.push(cat);
//     renderButtons();
// });







$(document).ready(function() { // This listens for a button click and will display images from giphy

    $(document).on("click", ".xbuttons, .xgif, img", function() {
        console.log("click1", $(this));
        console.log(event);
        
        var person = event.srcElement.dataset.person;

        // console.log("person: "+person)

        // debugger
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +person + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

        if(person != undefined){

            $.ajax({
            url: queryURL,
            method: "GET"
            })
            .then(function(response) {
                console.log(response);

                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var gifDiv = $("<div>");
                    var rating = results[i].rating;
                    var p = $("<p>").text("Rating: " + rating);

                    var personImage = `
                    <img src="${results[i].images.fixed_height_still.url}" 
                    data-state="still" 
                    data-still="${results[i].images.fixed_height_still.url}" 
                    data-animate="${results[i].images.fixed_height.url}" 
                    id="${person}${i}">`

                    gifDiv.prepend(p);
                    gifDiv.prepend(personImage);

                    $("#gifs-appear-here").prepend(gifDiv);

                }
            });
        }



    // });

// });

    var easy
// $(document).ready(function(){ //This function listens for clicks on gifs and animates them, in theory
    
    // $("body").on("click", ".xbuttons", function() {
    
        easy = event;

        // var selectedImage=event.path[0].id; //Doesn't like this statement here either

        var selectedImage=event.path[0].id;

        if(event.path[0].dataset.state == "still"){ //Animation on click works
            console.log("in if statement");
            
        //     //$(`#keanu9`).attr("src","https://media0.giphy.com/media/PKRWcVDuKXPry/200.gif") ok, this changes keanu9

        //     // var selectedImage=event.path[0].id;
        //     // $(`#${selectedImage}`).attr("src","https://media0.giphy.com/media/PKRWcVDuKXPry/200.gif")
        //     // The above two lines will change any gif clicked on to the animated keanu

        //     // var selectedImage=event.path[0].id;
        //     // $(`#${selectedImage}`).attr("src", selectedImage.dataset.animate);
        //     // This does not work, selectedImage = keanu9, and while keanu9.dataset exists, selectedImage.dataset is undefined

            // var selectedImage=event.path[0].id;

            console.log("if statement: "+selectedImage)
            $(`#${selectedImage}`).attr("src", event.path[0].dataset.animate);
            $(`#${selectedImage}`).attr("data-state", "animate");
        //     // ok, this works, but only for keanu, not keanu reeves, why are spaces in ids fucking me? I'll deal with it later
        //     // mabe spice it at " " and add all elements of array together for id name
        }


        // else{    //Error: Syntax error, unrecognized expression: # ; somewhere in these 6 lines
        //     console.log("in else statement");
        //     var selectedImage=event.path[0].id;
        //     $(`#${selectedImage}`).attr("src", event.path[0].dataset.still);
        //     $(`#${selectedImage}`).attr("data-state", "still");
        // }

        else if (event.path[0].dataset.state == "animate"){    //Error: Syntax error, unrecognized expression: # ; somewhere in these 6 lines
            
             // This line ok
            // var selectedImage=event.path[0].id; //So this line must be bad
            // selectedImage=event.path[0].id; // still hate without the var
            
            // selectedImage=event.path[0].id;
            
            
            // $(`#${selectedImage}`).attr("src", event.path[0].dataset.still); // This line ok
            // $(`#${selectedImage}`).attr("data-state", "still"); // This line ok

            // $(`#${event.path[0].id}`).attr("src", event.path[0].dataset.still); Doesn't like these lines either
            // $(`#${event.path[0].id}`).attr("data-state", "still"); 

            // $(`#keanu9`).attr("src", event.path[0].dataset.still); these work to turn keanu9 off/on
            // $(`#keanu9`).attr("data-state", "still");

            // console.log(event.path[0].id);   // I don't know, I really don't.
            // var idoff = "#"+event.path[0].id;
            // console.log(idoff);
            // $(idoff).attr("src", event.path[0].dataset.still);
            // $(`#keanu9`).attr("data-state", "still");

            // $(`#${event.path[0].id}`).attr("src", event.path[0].dataset.still); // This line ok
            // $(`#${event.path[0].id}`).attr("data-state", "still"); // This line ok


            //Trying to get gif to turn off, attempt @ July 17th 1:06
            console.log("in else statement");
            console.log("selectedImage= "+selectedImage) // returns: tiger9
            console.log("event.path[0].id= "+event.path[0].id); // returns: tiger9

            console.log("event.path[0].dataset.still: "+event.path[0].dataset.still); //returns: https://media2.giphy.com/media/3o6Zt4RErLepVpThYY/200_s.gif
            // console.log()

            // $(`#${event.path[0].id}`).attr("src", event.path[0].dataset.still); // Error: Syntax error, unrecognized expression: # - @ page load
            //$(`#tiger9`).attr("src", event.path[0].dataset.still); // This works, turns tiger9 off

            console.log("#${event.path[0].id} = "+`#${event.path[0].id}`);
            // $(`#${event.path[0].id}`).attr("src", event.path[0].dataset.still);
            // var xxxxx=event.path[0].id;
            // $("#"+xxxxx).attr("src", event.path[0].dataset.still);

            $(`#${event.path[0].id}`).attr("src", event.path[0].dataset.still);
            $(`#${event.path[0].id}`).attr("data-state", "still"); // 
            
            // changed from else to else if and now no freeze. Hooray!
            // console.log();
        }


    })
    renderButtons()

});



// renderButtons()
