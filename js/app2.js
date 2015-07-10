$(document).ready(function(){

  var randomNumber50 = function(){
    return Math.floor((Math.random() * 50));
    console.log()
  };

  var randomNumber6 = function(){
    return Math.floor((Math.random() * 6));
    console.log()
  };

  $("#next1").on("click", function(){
      $("#howToPlay1").addClass('hidden');
      $("#howToPlay2").removeClass('hidden');
  });
  $("#next2").on("click", function(){
      $("#howToPlay2").addClass('hidden');
      $("#howToPlay3").removeClass('hidden');
  });
  $("#start").on("click", function(){
      $("#howToPlay2").addClass('hidden');
      $("#howToPlay3").addClass('hidden');
  });


/*\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
\\ 
// Sets and initializes numberCorrect and questionNumber variables
\\ replaceQA function replaces the current question and answer choices
// with next state flag "question" and its corresponding 6 options
\\ Once game is over, it reveals the user's results
// 
\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/

    var numberCorrect = 0;
    var questionNumber = 0; // for cycling through the 50 questions (index based???)
    var replaceQA = function () {
        if (questionNumber === questions.length) {
            $("#gameOver").removeClass("hidden"); // game over div results
            for (i = 0; i < 6; i++) {
              $("#option" + i).html(questions[randomNumber50()].options[i]);
              $("#flag").html(questions[randomNumber50()].question); // removes the six options on the screen (need to replace with correct/incorrect answers div)
              // do something with the '#questionStatus' (append "Results: ")
            }
        } else {
            $("#flag").html(questions[questionNumber].question); // will display questions[questionNumber] 's flag
            for (i = 0; i < 6; i++) {
                $("#option" + i).html(questions[questionNumber].options[i]); // will display questions[i]'s 6 options
            }
        }
    };

    //replaceQA(); // commented out first call of replaceQA because games starts on Question 1 already
    $("#next").on("click", function() {
        var userAnswer = $('li img.selected'); // class = '.selected' removed "+" from begining of variable
        var correctAnswer = questions[questionNumber].answer; //Grabbing answer from questions array
        if (userAnswer === correctAnswer) {
            numberCorrect = numberCorrect + 1;
            $('#nailedIt').html("<li> " + userAnswer.attr('alt') + " </li>"); // instead of alert append to gameOver div (correct answer)
        } else {
            //alert("Sorry, you missed it! Still " + numberCorrect + " points"); // instead of alert append to gameOver div (incorrect answer)
        }
        questionNumber = questionNumber + 1;
        replaceQA();
    });

/*\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
\\ 
// Updates #questionNumber div
\\ questionNumber begins at 0 so the "+ 1" keeps the #questionNumber div 
// in line with the current question displayed on screen (1 - 50)
\\
// 
\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/

  $("#next").on("click", function(){
    if (questionNumber < questions.length){
      $('#questionNumber').empty().append(questionNumber + 1);
      console.log("Flag: " + $("#flag").children('img').attr("alt") + " || Question: " + (questionNumber + 1));
    }
  });


/*\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
\\ 
// Removes Answer Choice Output in "#yourChoice"                      
\\ Removes any added class: selected || correctAnswer || wrongAnswer
//
\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/

  $("#next").on("click", function(){
    
    $("#yourChoice").empty();
    $("li img").removeClass("correctAnswer");
    $("li img").removeClass("wrongAnswer");
    $("li img").removeClass("selected");
  });


/*\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
\\ 
// Removes 'selected' from an incorrectly chosen state location option,                   
\\ then adds a class of 'selected' to user's choice. Adds user's chocie
// to the html of the page after "Your Choice: "
//
\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/

  $(".options").on("click", "li img", function(){
    $("li img.selected").removeClass('selected');
    $(this).addClass("selected");

    $("#yourChoice").empty().append($(this).attr("alt"));
    console.log("State chosen: " + $(this).attr("alt"));
  });


/*\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
\\ 
// adds green border to a correct answer choice (".correctAnswer")
\\ adds red border to an incorrect answer choice (".wrongAnswer")
//
\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/

  $("#submitAnswer").on("click", function(){
    
    if ($('#yourChoice').text() == $("#flag").children('img').attr("alt")) {
        $("li img.selected").addClass("correctAnswer").removeClass("selected");
        console.log("Correct. That's " + $("#flag").children('img').attr("alt") + "'s flag.");
        console.log("__________________________________________");
    } else {
        $("li img.selected").addClass("wrongAnswer").removeClass("selected");
        console.log("Oops. That's " + $("#flag").children('img').attr("alt") + "'s flag.");
        console.log("__________________________________________");
        // add class to answer choice that has correctly matches the flag
    }
  });

  

});


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// End of document.ready funciton
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// states array of state objects: name && location && flag

var states = [
  { name: "Alabama",
    location: "<img class='center-block' src='images/state_location/AlabamaStateLocation.svg.png' alt='Alabama'>",
    flag: "<img class='center-block' src='images/state_flag/AlabamaStateFlag.svg.png' alt='Alabama'>"},
  { name: "Alaska",
    location: "<img class='center-block' src='images/state_location/AlaskaStateLocation.svg.png' alt='Alaska'>",
    flag: "<img class='center-block' src='images/state_flag/AlaskaStateFlag.svg.png' alt='Alaska'>"},
  { name: "Arizona",
    location: "<img class='center-block' src='images/state_location/ArizonaStateLocation.svg.png' alt='Arizona'>",
    flag: "<img class='center-block' src='images/state_flag/ArizonaStateFlag.svg.png' alt='Arizona'>"},
  { name: "Arkansas",
    location: "<img class='center-block' src='images/state_location/ArkansasStateLocation.svg.png' alt='Arkansas'>",
    flag: "<img class='center-block' src='images/state_flag/ArkansasStateFlag.svg.png' alt='Arkansas'>"},
  { name: "California",
    location: "<img class='center-block' src='images/state_location/CaliforniaStateLocation.svg.png' alt='California'>",
    flag: "<img class='center-block' src='images/state_flag/CaliforniaStateFlag.svg.png' alt='California'>"},
  { name: "Colorado",
    location: "<img class='center-block' src='images/state_location/ColoradoStateLocation.svg.png' alt='Colorado'>",
    flag: "<img class='center-block' src='images/state_flag/ColoradoStateFlag.svg.png' alt='Colorado'>"},
  { name: "Connecticut",
    location: "<img class='center-block' src='images/state_location/ConnecticutStateLocation.svg.png' alt='Connecticut'>",
    flag: "<img class='center-block' src='images/state_flag/ConnecticutStateFlag.svg.png' alt='Connecticut'>"},
  { name: "Delaware",
    location: "<img class='center-block' src='images/state_location/DelawareStateLocation.svg.png' alt='Delaware'>",
    flag: "<img class='center-block' src='images/state_flag/DelawareStateFlag.svg.png' alt='Delaware'>"},
  { name: "Florida",
    location: "<img class='center-block' src='images/state_location/FloridaStateLocation.svg.png' alt='Florida'>",
    flag: "<img class='center-block' src='images/state_flag/FloridaStateFlag.svg.png' alt='Florida'>"},
  { name: "Georgia",
    location: "<img class='center-block' src='images/state_location/GeorgiaStateLocation.svg.png' alt='Georgia'>",
    flag: "<img class='center-block' src='images/state_flag/GeorgiaStateFlag.svg.png' alt='Georgia'>"},
  { name: "Hawaii",
    location:  "<img class='center-block' src='images/state_location/HawaiiStateLocation.svg.png' alt='Hawaii'>",
    flag: "<img class='center-block' src='images/state_flag/HawaiiStateFlag.svg.png' alt='Hawaii'>"},
  { name: "Idaho",
    location: "<img class='center-block' src='images/state_location/IdahoStateLocation.svg.png' alt='Idaho'>",
    flag: "<img class='center-block' src='images/state_flag/IdahoStateFlag.svg.png' alt='Idaho'>"},
  { name: "Illinois",
    location: "<img class='center-block' src='images/state_location/IllinoisStateLocation.svg.png' alt='Illinois'>",
    flag: "<img class='center-block' src='images/state_flag/IllinoisStateFlag.svg.png' alt='Illinois'>"},
  { name: "Indiana",
    location: "<img class='center-block' src='images/state_location/IndianaStateLocation.svg.png' alt='Indiana'>",
    flag: "<img class='center-block' src='images/state_flag/IndianaStateFlag.svg.png' alt='Indiana'>"},
  { name: "Iowa",
    location: "<img class='center-block' src='images/state_location/IowaStateLocation.svg.png' alt='Iowa'>",
    flag: "<img class='center-block' src='images/state_flag/IowaStateFlag.svg.png' alt='Iowa'>"},
  { name: "Kansas",
    location: "<img class='center-block' src='images/state_location/KansasStateLocation.svg.png' alt='Kansas'>",
    flag: "<img class='center-block' src='images/state_flag/KansasStateFlag.svg.png' alt='Kansas'>"},
  { name: "Kentucky",
    location: "<img class='center-block' src='images/state_location/KentuckyStateLocation.svg.png' alt='Kentucky'>",
    flag: "<img class='center-block' src='images/state_flag/KentuckyStateFlag.svg.png' alt='Kentucky'>"},
  { name: "Louisiana",
    location: "<img class='center-block' src='images/state_location/LouisianaStateLocation.svg.png' alt='Louisiana'>",
    flag: "<img class='center-block' src='images/state_flag/LouisianaStateFlag.svg.png' alt='Louisiana'>"},
  { name: "Maine",
    location: "<img class='center-block' src='images/state_location/MaineStateLocation.svg.png' alt='Maine'>",
    flag: "<img class='center-block' src='images/state_flag/MaineStateFlag.svg.png' alt='Maine'>"},
  { name: "Maryland",
    location: "<img class='center-block' src='images/state_location/MarylandStateLocation.svg.png' alt='Maryland'>",
    flag: "<img class='center-block' src='images/state_flag/MarylandStateFlag.svg.png' alt='Maryland'>"},
  { name: "Massachusetts",
    location: "<img class='center-block' src='images/state_location/MassachusettsStateLocation.svg.png' alt='Massachusetts'>",
    flag: "<img class='center-block' src='images/state_flag/MassachusettsStateFlag.svg.png' alt='Massachusetts'>"},
  { name: "Michigan",
    location: "<img class='center-block' src='images/state_location/MichiganStateLocation.svg.png' alt='Michigan'>",
    flag: "<img class='center-block' src='images/state_flag/MichiganStateFlag.svg.png' alt='Michigan'>"},
  { name: "Minnesota ",
    location: "<img class='center-block' src='images/state_location/MinnesotaStateLocation.svg.png' alt='Minnesota'>",
    flag: "<img class='center-block' src='images/state_flag/MinnesotaStateFlag.svg.png' alt='Minnesota'>"},
  { name: "Mississippi",
    location: "<img class='center-block' src='images/state_location/MississippiStateLocation.svg.png' alt='Mississippi'>",
    flag: "<img class='center-block' src='images/state_flag/MississippiStateFlag.svg.png' alt='Mississippi'>"},
  { name: "Missouri",
    location: "<img class='center-block' src='images/state_location/MissouriStateLocation.svg.png' alt='Missouri'>",
    flag: "<img class='center-block' src='images/state_flag/MissouriStateFlag.svg.png' alt='Missouri'>"},
  { name: "Montana",
    location: "<img class='center-block' src='images/state_location/MontanaStateLocation.svg.png' alt='Montana'>",
    flag: "<img class='center-block' src='images/state_flag/MontanaStateFlag.svg.png' alt='Montana'>"},
  { name: "Nebraska",
    location: "<img class='center-block' src='images/state_location/NebraskaStateLocation.svg.png' alt='Nebraska'>",
    flag: "<img class='center-block' src='images/state_flag/NebraskaStateFlag.svg.png' alt='Nebraska'>"},
  { name: "Nevada",
    location: "<img class='center-block' src='images/state_location/NevadaStateLocation.svg.png' alt='Nevada'>",
    flag: "<img class='center-block' src='images/state_flag/NevadaStateFlag.svg.png' alt='Nevada'>"},
  { name: "NewHampshire",
    location: "<img class='center-block' src='images/state_location/NewHampshireStateLocation.svg.png' alt='NewHampshire'>",
    flag: "<img class='center-block' src='images/state_flag/NewHampshireStateFlag.svg.png' alt='NewHampshire'>"},
  { name: "NewJersey",
    location: "<img class='center-block' src='images/state_location/NewJerseyStateLocation.svg.png' alt='NewJersey'>",
    flag: "<img class='center-block' src='images/state_flag/NewJerseyStateFlag.svg.png' alt='NewJersey'>"},
  { name: "NewMexico",
    location: "<img class='center-block' src='images/state_location/NewMexicoStateLocation.svg.png' alt='New Mexico'>",
    flag: "<img class='center-block' src='images/state_flag/NewMexicoStateFlag.svg.png' alt='New Mexico'>"},
  { name: "NewYork",
    location: "<img class='center-block' src='images/state_location/NewYorkStateLocation.svg.png' alt='NewYork'>",
    flag: "<img class='center-block' src='images/state_flag/NewYorkStateFlag.svg.png' alt='NewYork'>"},
  { name: "NorthCarolina",
    location: "<img class='center-block' src='images/state_location/NorthCarolinaStateLocation.svg.png' alt='NorthCarolina'>",
    flag: "<img class='center-block' src='images/state_flag/NorthCarolinaStateFlag.svg.png' alt='NorthCarolina'>"},
  { name: "NorthDakota",
    location: "<img class='center-block' src='images/state_location/NorthDakotaStateLocation.svg.png' alt='NorthDakota'>",
    flag: "<img class='center-block' src='images/state_flag/NorthDakotaStateFlag.svg.png' alt='NorthDakota'>"},
  { name: "Ohio",
    location: "<img class='center-block' src='images/state_location/OhioStateLocation.svg.png' alt='Ohio'>",
    flag: "<img class='center-block' src='images/state_flag/OhioStateFlag.svg.png' alt='Ohio'>"},
  { name: "Oklahoma",
    location: "<img class='center-block' src='images/state_location/OklahomaStateLocation.svg.png' alt='Oklahoma'>",
    flag: "<img class='center-block' src='images/state_flag/OklahomaStateFlag.svg.png' alt='Oklahoma'>"},
  { name: "Oregon",
    location: "<img class='center-block' src='images/state_location/OregonStateLocation.svg.png' alt='Oregon'>",
    flag: "<img class='center-block' src='images/state_flag/OregonStateFlag.svg.png' alt='Oregon'>"},
  { name: "Pennsylvania",
    location: "<img class='center-block' src='images/state_location/PennsylvaniaStateLocation.svg.png' alt='Pennsylvania'>",
    flag: "<img class='center-block' src='images/state_flag/PennsylvaniaStateFlag.svg.png' alt='Pennsylvania'>"},
  { name: "RhodeIsland",
    location: "<img class='center-block' src='images/state_location/RhodeIslandStateLocation.svg.png' alt='RhodeIsland'>",
    flag: "<img class='center-block' src='images/state_flag/RhodeIslandStateFlag.svg.png' alt='RhodeIsland'>"},
  { name: "SouthCarolina",
    location: "<img class='center-block' src='images/state_location/SouthCarolinaStateLocation.svg.png' alt='SouthCarolina'>",
    flag: "<img class='center-block' src='images/state_flag/SouthCarolinaStateFlag.svg.png' alt='SouthCarolina'>"},
  { name: "SouthDakota",
    location: "<img class='center-block' src='images/state_location/SouthDakotaStateLocation.svg.png' alt='SouthDakota'>",
    flag: "<img class='center-block' src='images/state_flag/SouthDakotaStateFlag.svg.png' alt='SouthDakota'>"},
  { name: "Tennessee",
    location: "<img class='center-block' src='images/state_location/TennesseeStateLocation.svg.png' alt='Tennessee'>",
    flag: "<img class='center-block' src='images/state_flag/TennesseeStateFlag.svg.png' alt='Tennessee'>"},
  { name: "Texas",
    location: "<img class='center-block' src='images/state_location/TexasStateLocation.svg.png' alt='Texas'>",
    flag: "<img class='center-block' src='images/state_flag/TexasStateFlag.svg.png' alt='Texas'>"},
  { name: "Utah",
    location: "<img class='center-block' src='images/state_location/UtahStateLocation.svg.png' alt='Utah'>",
    flag: "<img class='center-block' src='images/state_flag/UtahStateFlag.svg.png' alt='Utah'>"},
  { name: "Vermont",
    location: "<img class='center-block' src='images/state_location/VermontStateLocation.svg.png' alt='Vermont'>",
    flag: "<img class='center-block' src='images/state_flag/VermontStateFlag.svg.png' alt='Vermont'>"},
  { name: "Virginia",
    location: "<img class='center-block' src='images/state_location/VirginiaStateLocation.svg.png' alt='Virginia'>",
    flag: "<img class='center-block' src='images/state_flag/VirginiaStateFlag.svg.png' alt='Virginia'>"},
  { name: "Washington",
    location: "<img class='center-block' src='images/state_location/WashingtonStateLocation.svg.png' alt='Washington'>",
    flag: "<img class='center-block' src='images/state_flag/WashingtonStateFlag.svg.png' alt='Washington'>"},
  { name: "WestVirginia",
    location: "<img class='center-block' src='images/state_location/WestVirginiaStateLocation.svg.png' alt='WestVirginia'>",
    flag: "<img class='center-block' src='images/state_flag/WestVirginiaStateFlag.svg.png' alt='WestVirginia'>"},
  { name: "Wisconsin",
    location: "<img class='center-block' src='images/state_location/WisconsinStateLocation.svg.png' alt='Wisconsin'>",
    flag: "<img class='center-block' src='images/state_flag/WisconsinStateFlag.svg.png' alt='Wisconsin'>"},
  { name: "Wyoming",
    location: "<img class='center-block' src='images/state_location/WyomingStateLocation.svg.png' alt='Wyoming'>",
    flag: "<img class='center-block' src='images/state_flag/WyomingStateFlag.svg.png' alt='Wyoming'>"}
];


// end of states array
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var questions = [
  {question: states[0].flag,
    options: [states[0].location, states[9].location, states[4].location, states[12].location, states[21].location, states[22].location],
    answer: states[0].location},
  {question: states[1].flag,
    options: [states[13].location, states[1].location, states[8].location, states[3].location, states[20].location, states[41].location],
    answer: states[1].location},
  {question: states[2].flag,
    options: [states[12].location, states[14].location, states[2].location, states[6].location, states[19].location, states[40].location],
    answer: states[2].location},
  {question: states[3].flag,
    options: [states[10].location, states[15].location, states[31].location, states[3].location, states[18].location, states[42].location],
    answer: states[3].location},
  {question: states[4].flag,
    options: [states[19].location, states[16].location, states[41].location, states[9].location, states[4].location, states[43].location],
    answer: states[4].location},
  {question: states[5].flag,
    options: [states[31].location, states[17].location, states[21].location, states[12].location, states[49].location, states[5].location],
    answer: states[5].location},
  {question: states[6].flag,
    options: [states[32].location, states[18].location, states[11].location, states[15].location, states[16].location, states[6].location],
    answer: states[6].location},
  {question: states[7].flag,
    options: [states[33].location, states[19].location, states[12].location, states[18].location, states[7].location, states[44].location],
    answer: states[7].location},
  {question: states[8].flag,
    options: [states[34].location, states[20].location, states[13].location, states[8].location, states[31].location, states[45].location],
    answer: states[8].location},
  {question: states[9].flag,
    options: [states[35].location, states[40].location, states[9].location, states[21].location, states[32].location, states[39].location],
    answer: states[9].location},
  {question: states[10].flag,
    options: [states[36].location, states[10].location, states[14].location, states[24].location, states[33].location, states[38].location],
    answer: states[10].location},
  {question: states[11].flag,
    options: [states[11].location, states[37].location, states[12].location, states[27].location, states[21].location, states[5].location],
    answer: states[11].location},
  {question: states[12].flag,
    options: [states[13].location, states[12].location, states[15].location, states[30].location, states[44].location, states[37].location],
    answer: states[12].location},
  {question: states[13].flag,
    options: [states[13].location, states[1].location, states[12].location, states[33].location, states[43].location, states[0].location],
    answer: states[13].location},
  {question: states[14].flag,
    options: [states[37].location, states[14].location, states[17].location, states[30].location, states[42].location, states[1].location],
    answer: states[14].location},
  {question: states[15].flag,
    options: [states[38].location, states[15].location, states[18].location, states[36].location, states[41].location, states[2].location],
    answer: states[15].location},
  {question: states[16].flag,
    options: [states[39].location, states[2].location, states[16].location, states[3].location, states[31].location, states[28].location],
    answer: states[16].location},
  {question: states[17].flag,
    options: [states[40].location, states[3].location, states[19].location, states[17].location, states[41].location, states[48].location],
    answer: states[17].location},
  {question: states[18].flag,
    options: [states[41].location, states[4].location, states[20].location, states[18].location, states[21].location, states[18].location],
    answer: states[18].location},
  {question: states[19].flag,
    options: [states[42].location, states[19].location, states[49].location, states[39].location, states[11].location, states[1].location],
    answer: states[19].location},
  {question: states[20].flag,
    options: [states[43].location, states[5].location, states[48].location, states[13].location, states[20].location, states[21].location],
    answer: states[20].location},
  {question: states[21].flag,
    options: [states[44].location, states[6].location, states[47].location, states[43].location, states[0].location, states[21].location],
    answer: states[21].location},
  {question: states[22].flag,
    options: [states[45].location, states[7].location, states[22].location, states[40].location, states[1].location, states[39].location],
    answer: states[22].location},
  {question: states[23].flag,
    options: [states[46].location, states[8].location, states[46].location, states[23].location, states[2].location, states[38].location],
    answer: states[23].location},
  {question: states[24].flag,
    options: [states[47].location, states[9].location, states[11].location, states[2].location, states[3].location, states[24].location],
    answer: states[24].location},
  {question: states[25].flag,
    options: [states[48].location, states[10].location, states[45].location, states[25].location, states[4].location, states[37].location],
    answer: states[25].location},
  {question: states[26].flag,
    options: [states[49].location, states[26].location, states[44].location, states[4].location, states[5].location, states[17].location],
    answer: states[26].location},
  {question: states[27].flag,
    options: [states[20].location, states[27].location, states[2].location, states[42].location, states[6].location, states[16].location],
    answer: states[27].location},
  {question: states[28].flag,
    options: [states[21].location, states[28].location, states[43].location, states[1].location, states[7].location, states[15].location],
    answer: states[28].location},
  {question: states[29].flag,
    options: [states[22].location, states[29].location, states[42].location, states[0].location, states[8].location, states[14].location],
    answer: states[29].location},
  {question: states[30].flag,
    options: [states[23].location, states[41].location, states[30].location, states[5].location, states[9].location, states[13].location],
    answer: states[30].location},
  {question: states[31].flag,
    options: [states[24].location, states[42].location, states[31].location, states[17].location, states[10].location, states[3].location],
    answer: states[31].location},
  {question: states[32].flag,
    options: [states[25].location, states[32].location, states[41].location, states[18].location, states[19].location, states[4].location],
    answer: states[32].location},
  {question: states[33].flag,
    options: [states[33].location, states[43].location, states[40].location, states[22].location, states[18].location, states[5].location],
    answer: states[33].location},
  {question: states[34].flag,
    options: [states[26].location, states[44].location, states[2].location, states[43].location, states[17].location, states[34].location],
    answer: states[34].location},
  {question: states[35].flag,
    options: [states[27].location, states[45].location, states[4].location, states[33].location, states[16].location, states[35].location],
    answer: states[35].location},
  {question: states[36].flag,
    options: [states[11].location, states[28].location, states[6].location, states[13].location, states[36].location, states[6].location],
    answer: states[36].location},
  {question: states[37].flag,
    options: [states[37].location, states[46].location, states[8].location, states[5].location, states[15].location, states[7].location],
    answer: states[37].location},
  {question: states[38].flag,
    options: [states[19].location, states[47].location, states[10].location, states[6].location, states[29].location, states[38].location],
    answer: states[38].location},
  {question: states[39].flag,
    options: [states[30].location, states[39].location, states[12].location, states[7].location, states[28].location, states[9].location],
    answer: states[39].location},
  {question: states[40].flag,
    options: [states[31].location, states[40].location, states[14].location, states[8].location, states[27].location, states[10].location],
    answer: states[40].location},
  {question: states[41].flag,
    options: [states[32].location, states[48].location, states[41].location, states[9].location, states[26].location, states[14].location],
    answer: states[41].location},
  {question: states[42].flag,
    options: [states[33].location, states[49].location, states[16].location, states[29].location, states[42].location, states[16].location],
    answer: states[42].location},
  {question: states[43].flag,
    options: [states[34].location, states[43].location, states[18].location, states[28].location, states[25].location, states[18].location],
    answer: states[43].location},
  {question: states[44].flag,
    options: [states[12].location, states[27].location, states[44].location, states[27].location, states[24].location, states[20].location],
    answer: states[44].location},
  {question: states[45].flag,
    options: [states[10].location, states[3].location, states[20].location, states[26].location, states[45].location, states[22].location],
    answer: states[45].location},
  {question: states[46].flag,
    options: [states[9].location, states[36].location, states[2].location, states[46].location, states[23].location, states[24].location],
    answer: states[46].location},
  {question: states[47].flag,
    options: [states[47].location, states[4].location, states[24].location, states[30].location, states[11].location, states[26].location],
    answer: states[47].location},
  {question: states[48].flag,
    options: [states[8].location, states[5].location, states[26].location, states[44].location, states[11].location, states[48].location],
    answer: states[48].location},
  {question: states[49].flag,
    options: [states[7].location, states[6].location, states[28].location, states[43].location, states[49].location, states[28].location],
    answer: states[49].location}
];

// end of questions array
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


