//ready fxn

//create topic variable containing array of search terms and for loop to run through topics

$(document).ready(function() {

    var searchGifs = {
        topics: ["Harden", "LeBron", "Westbrook", "Irving", "Duke basketball", "Jabari Parker","Yao Ming"],
        createBtn: function() {
            for (var i = 0; i < searchGifs.topics.length; i++) {
                var addBtn = $('<button>');
                addBtn.attr("data-search", searchGifs.topics[i]);
                addBtn.addClass("btn");
                addBtn.addClass("searchButtons");
                addBtn.text(searchGifs.topics[i]);
                $('#searchButtonsContainer').append(addBtn);
            }
        },
//write fxn to create <button> for each of search terms as seen in movie activity
//create search input text box and enter button. use preventdefault method so form wont take to another page when submitted
        addSearchTerms: function(event) {
          event.preventDefault();
          var userTerm = $('#submitBox').val();

          if (searchGifs.topics.indexOf(userTerm) < 0 && userTerm.length > 0) {
              searchGifs.topics.push(userTerm);
              var addBtn = $('<button>');
              addBtn.attr("data-search", userTerm);
              addBtn.addClass("btn");
              addBtn.addClass("searchButtons");
              addBtn.text(userTerm);
              $('#searchButtonsContainer').append(addBtn);
          }

        },

//append search result to showgifs div
//get custom api from giphy and find syntax to limit gif results to 10x
//open giphy link inspect and get rating from object
    displayResults: function(event) {
            $('#showGIFS').empty();
            event.preventDefault();

            var userQuery = $(this).data('search');
            var key = "&api_key=jY45qx8sYwzsb88WCC9fq4KhVa898izU";
            var limit = "&limit=10"
            var reqUrl = "https://api.giphy.com/v1/gifs/search?q=" + userQuery + limit + key;
            $.ajax({
                url: reqUrl,
                method: "GET"
            }).done(function(response) {

                for (var i = 0; i < response.data.length; i++) {
                    var gifContain = $('<div>');
                    gifContain.addClass('gifContainer');
                    var animateLink = response.data[i].images["fixed_height"].url;
                    var stillLink = response.data[i].images["fixed_height_still"].url;
                    var rating = response.data[i].rating;
                    console.log(rating);
                    var ratingSpan = $('<p>');
                    ratingSpan.addClass('gifRating');
                    ratingSpan.text("Rating: " + rating);
                    var newImg = $('<img>');
                    newImg.attr('src', stillLink);
                    newImg.attr('data-animate', animateLink);
                    newImg.attr('data-still', stillLink);
                    newImg.attr('data-state', "still")
                    newImg.addClass('gif');
                    gifContain.prepend(ratingSpan);
                    gifContain.append(newImg);

                    $('#showGIFS').append(gifContain);
                }
//check pausing gif activity for animate/still syntax and add on clcik event
    

                $('.gif').on("click", function() {
                    var state = $(this).attr("data-state");
                    if (state === "still") {
                        $(this).attr('src', $(this).data("animate"));
                        $(this).attr("data-state", "animate");
                    } else {
                        $(this).attr('src', $(this).data("still"));
                        $(this).attr("data-state", "still");
                    }
                });
            });
        },

    }
    searchGifs.createBtn();



    $('#submitTerm').click(searchGifs.addSearchTerms);
    $(document).on('click', '.searchButtons', searchGifs.displayResults);
});