//ready fxn

//create topic variable containing array of search terms and for loop to run through topics
//check yday to-do list assignment for button syntax

$(document).ready(function() {

    var searchGifs = {
        topics: ["Harden", "LeBron", "Westbrook", "Irving", "Duke basketball", "Jabari","Hakeem"],
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



//create search input text box and enter button. use preventdefault method so form wont submit until button clicked



//append search result to showgifs div



//get custom api from giphy and find syntax to limit gif results to 10x


//open giphy link inspect and get rating from object



//check pausing gif activity for animate/still syntax and add on clcik event

