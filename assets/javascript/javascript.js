// API Homework - Giphy

$(document).ready(function() { // This listens for a button click and will display images from giphy
    $("button").on("click", function() {
        // console.log("click1");
        
        var person = $(this).attr("data-person");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +person + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

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

                // console.log("image tag "+personImage);

                gifDiv.prepend(p);
                gifDiv.prepend(personImage);

                // $("#gifs-appear-here").prepend(gifDiv);

            }
        });
    });


    // <img src="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200_s.gif" 
    //data-still="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200_s.gif" 
    //data-animate="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200.gif" 
    //data-state="still" class="gif"></img>


});

var easy
$(document).ready(function(){ //This function listens for clicks on gifs and animates them, in theory
    
    $("body").on("click", function() {
    
    easy = event;

    if(event.path[0].dataset.state == "still"){
        
        //$(`#keanu9`).attr("src","https://media0.giphy.com/media/PKRWcVDuKXPry/200.gif") ok, this changes keanu9

        // var selectedImage=event.path[0].id;
        // $(`#${selectedImage}`).attr("src","https://media0.giphy.com/media/PKRWcVDuKXPry/200.gif")
        // The above two lines will change any gif clicked on to the animated keanu

        // var selectedImage=event.path[0].id;
        // $(`#${selectedImage}`).attr("src", selectedImage.dataset.animate);
        // This does not work, selectedImage = keanu9, and while keanu9.dataset exists, selectedImage.dataset is undefined

        var selectedImage=event.path[0].id;
        $(`#${selectedImage}`).attr("src", event.path[0].dataset.animate);
        // ok, this works, but only for keanu, not keanu reeves, why are spaces in ids fucking me? I'll deal with it later
        // mabe spice it at " " and add all elements of array together for id name
        $(`#${selectedImage}`).attr("data-state", "still");


    }
    else{
        var selectedImage=event.path[0].id;
        $(`#${selectedImage}`).attr("src", event.path[0].dataset.still);
        $(`#${selectedImage}`).attr("data-state", "still");
    }

    // data[""0""].images.fixed_height.url
    // data[""0""].images.fixed_height_still.url


    // if(event.srcElement.dataset.state == "still"){
    //     // console.log(this.dataset.state);
    //     // console.log(this.dataset.animate);
    //     this.dataset.state = "animate";
    //     this.src=this.dataset.animate;
    //   }
    //   else{
    //     this.dataset.state = "still";
    //     this.src=this.dataset.still;
    //   }







    })

});