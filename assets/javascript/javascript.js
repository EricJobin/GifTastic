// API Homework - Giphy


$(document).ready(function() {
    $("button").on("click", function() {
        console.log("click");
        
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
                var personImage = $("<img>");

                personImage.attr("src", results[i].images.fixed_height.url);
                gifDiv.prepend(p);
                gifDiv.prepend(personImage);

                $("#gifs-appear-here").prepend(gifDiv);
            }
        });
    });


    // <img src="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200_s.gif" data-still="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200_s.gif" data-animate="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200.gif" data-state="still" class="gif"></img>
    
    
    $(".gif").on("click", function() {

        if(event.srcElement.dataset.state == "still"){
          // console.log(this.dataset.state);
          // console.log(this.dataset.animate);
          this.dataset.state = "animate";
          this.src=this.dataset.animate;
        }
        else{
          this.dataset.state = "still";
          this.src=this.dataset.still;
        }
  
        // data[""0""].images.fixed_height.url
        // data[""0""].images.fixed_height_still.url



    });






});