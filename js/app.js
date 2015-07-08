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


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Sets next state flag "question" and its corresponding 6 options


  $("#next").on("click", function(){

      var num = $('#questionNumber').text();
     
      $("#option1").empty().append(questions[num].option1);
      $("#option2").empty().append(questions[num].option2);
      $("#option3").empty().append(questions[num].option3);
      $("#option4").empty().append(questions[num].option4);
      $("#option5").empty().append(questions[num].option5);
      $("#option6").empty().append(questions[num].option6);
      
      $("#flag").empty().append(questions[num].question);
      
      update();
      

      // if (num > 50){
      //   $('#gameOver').removeClass('hidden');
      // }
    
  });

// $("#next").on("click", function(){
//   replace();
// })

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Update Question Number

  $("#next").on("click", function(){
    $('#questionNumber').empty().append(quesNum);
    console.log("Flag: " + $("#flag").children('img').attr("alt") + " || Question: " + quesNum);
  })


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Removes Answer Choice Output in "#yourChoice"

  $("#next").on("click", function(){
    
    $("#yourChoice").empty();
  });


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Adds a class of 'selected' to the user's choice

  $(".options").on("click", "li img", function(){
    $(this).addClass("selected");

    $("#yourChoice").empty().append($(this).attr("alt"));
    console.log("State chosen: " + $(this).attr("alt"));
  });



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// add green border to answer choice if it is correct (".correctAnswer")
// add red border to answer choice if it is incorrect (".wrongAnswer")


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
// Global Variables

var quesNum = 1; // index based... started at 0

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Global Functions

function update(){
  quesNum += 1;
  return quesNum;
}



// function replace(){

//   for (var i = 1; i < questions.length; i++){

//     $("#option1").empty().append(questions[i].option1);
//     $("#option2").empty().append(questions[i].option2);
//     $("#option3").empty().append(questions[i].option3);
//     $("#option4").empty().append(questions[i].option4);
//     $("#option5").empty().append(questions[i].option5);
//     $("#option6").empty().append(questions[i].option6);
    
//     $("#flag").empty().append(questions[i].question);
//     console.log("Flag: " + $("#flag").children('img').attr("alt") + " || Question: " + i);
    
//     $('#questionNumber').empty().append(i);
//   }
// }


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// $("#submitAnswer").on("click", function(){
//   console.log($("#flag").children('img').attr("alt") + "*");
// });








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
  {question: states[0].flag, option1: states[0].location, option2: states[9].location, option3: states[4].location, option4: states[12].location, option5: states[21].location, option6: states[22].location},
  {question: states[1].flag, option1: states[13].location, option2: states[1].location, option3: states[8].location, option4: states[3].location, option5: states[20].location, option6: states[41].location},
  {question: states[2].flag, option1: states[12].location, option2: states[14].location, option3: states[2].location, option4: states[6].location, option5: states[19].location, option6: states[40].location},
  {question: states[3].flag, option1: states[10].location, option2: states[15].location, option3: states[31].location, option4: states[3].location, option5: states[18].location, option6: states[42].location},
  {question: states[4].flag, option1: states[19].location, option2: states[16].location, option3: states[41].location, option4: states[9].location, option5: states[4].location, option6: states[43].location},
  {question: states[5].flag, option1: states[31].location, option2: states[17].location, option3: states[21].location, option4: states[12].location, option5: states[49].location, option6: states[5].location},
  {question: states[6].flag, option1: states[32].location, option2: states[18].location, option3: states[11].location, option4: states[15].location, option5: states[16].location, option6: states[6].location},
  {question: states[7].flag, option1: states[33].location, option2: states[19].location, option3: states[12].location, option4: states[18].location, option5: states[7].location, option6: states[44].location},
  {question: states[8].flag, option1: states[34].location, option2: states[20].location, option3: states[13].location, option4: states[8].location, option5: states[31].location, option6: states[45].location},
  {question: states[9].flag, option1: states[35].location, option2: states[40].location, option3: states[9].location, option4: states[21].location, option5: states[32].location, option6: states[39].location},
  {question: states[10].flag, option1: states[36].location, option2: states[10].location, option3: states[14].location, option4: states[24].location, option5: states[33].location, option6: states[38].location},
  {question: states[11].flag, option1: states[11].location, option2: states[37].location, option3: states[12].location, option4: states[27].location, option5: states[21].location, option6: states[5].location},
  {question: states[12].flag, option1: states[13].location, option2: states[12].location, option3: states[15].location, option4: states[30].location, option5: states[44].location, option6: states[37].location},
  {question: states[13].flag, option1: states[13].location, option2: states[1].location, option3: states[12].location, option4: states[33].location, option5: states[43].location, option6: states[0].location},
  {question: states[14].flag, option1: states[37].location, option2: states[14].location, option3: states[17].location, option4: states[30].location, option5: states[42].location, option6: states[1].location},
  {question: states[15].flag, option1: states[38].location, option2: states[15].location, option3: states[18].location, option4: states[36].location, option5: states[41].location, option6: states[2].location},
  {question: states[16].flag, option1: states[39].location, option2: states[2].location, option3: states[16].location, option4: states[3].location, option5: states[31].location, option6: states[28].location},
  {question: states[17].flag, option1: states[40].location, option2: states[3].location, option3: states[19].location, option4: states[17].location, option5: states[41].location, option6: states[48].location},
  {question: states[18].flag, option1: states[41].location, option2: states[4].location, option3: states[20].location, option4: states[18].location, option5: states[21].location, option6: states[18].location},
  {question: states[19].flag, option1: states[42].location, option2: states[19].location, option3: states[49].location, option4: states[39].location, option5: states[11].location, option6: states[1].location},
  {question: states[20].flag, option1: states[43].location, option2: states[5].location, option3: states[48].location, option4: states[13].location, option5: states[20].location, option6: states[21].location},
  {question: states[21].flag, option1: states[44].location, option2: states[6].location, option3: states[47].location, option4: states[43].location, option5: states[0].location, option6: states[21].location},
  {question: states[22].flag, option1: states[45].location, option2: states[7].location, option3: states[22].location, option4: states[40].location, option5: states[1].location, option6: states[39].location},
  {question: states[23].flag, option1: states[46].location, option2: states[8].location, option3: states[46].location, option4: states[23].location, option5: states[2].location, option6: states[38].location},
  {question: states[24].flag, option1: states[47].location, option2: states[9].location, option3: states[11].location, option4: states[2].location, option5: states[3].location, option6: states[24].location},
  {question: states[25].flag, option1: states[48].location, option2: states[10].location, option3: states[45].location, option4: states[25].location, option5: states[4].location, option6: states[37].location},
  {question: states[26].flag, option1: states[49].location, option2: states[26].location, option3: states[44].location, option4: states[4].location, option5: states[5].location, option6: states[17].location},
  {question: states[27].flag, option1: states[20].location, option2: states[27].location, option3: states[2].location, option4: states[42].location, option5: states[6].location, option6: states[16].location},
  {question: states[28].flag, option1: states[21].location, option2: states[28].location, option3: states[43].location, option4: states[1].location, option5: states[7].location, option6: states[15].location},
  {question: states[29].flag, option1: states[22].location, option2: states[29].location, option3: states[42].location, option4: states[0].location, option5: states[8].location, option6: states[14].location},
  {question: states[30].flag, option1: states[23].location, option2: states[41].location, option3: states[30].location, option4: states[5].location, option5: states[9].location, option6: states[13].location},
  {question: states[31].flag, option1: states[24].location, option2: states[42].location, option3: states[31].location, option4: states[17].location, option5: states[10].location, option6: states[3].location},
  {question: states[32].flag, option1: states[25].location, option2: states[32].location, option3: states[41].location, option4: states[18].location, option5: states[19].location, option6: states[4].location},
  {question: states[33].flag, option1: states[33].location, option2: states[43].location, option3: states[40].location, option4: states[22].location, option5: states[18].location, option6: states[5].location},
  {question: states[34].flag, option1: states[26].location, option2: states[44].location, option3: states[2].location, option4: states[43].location, option5: states[17].location, option6: states[34].location},
  {question: states[35].flag, option1: states[27].location, option2: states[45].location, option3: states[4].location, option4: states[33].location, option5: states[16].location, option6: states[35].location},
  {question: states[36].flag, option1: states[11].location, option2: states[28].location, option3: states[6].location, option4: states[13].location, option5: states[36].location, option6: states[6].location},
  {question: states[37].flag, option1: states[37].location, option2: states[46].location, option3: states[8].location, option4: states[5].location, option5: states[15].location, option6: states[7].location},
  {question: states[38].flag, option1: states[19].location, option2: states[47].location, option3: states[10].location, option4: states[6].location, option5: states[29].location, option6: states[38].location},
  {question: states[39].flag, option1: states[30].location, option2: states[39].location, option3: states[12].location, option4: states[7].location, option5: states[28].location, option6: states[9].location},
  {question: states[40].flag, option1: states[31].location, option2: states[40].location, option3: states[14].location, option4: states[8].location, option5: states[27].location, option6: states[10].location},
  {question: states[41].flag, option1: states[32].location, option2: states[48].location, option3: states[41].location, option4: states[9].location, option5: states[26].location, option6: states[14].location},
  {question: states[42].flag, option1: states[33].location, option2: states[49].location, option3: states[16].location, option4: states[29].location, option5: states[42].location, option6: states[16].location},
  {question: states[43].flag, option1: states[34].location, option2: states[43].location, option3: states[18].location, option4: states[28].location, option5: states[25].location, option6: states[18].location},
  {question: states[44].flag, option1: states[12].location, option2: states[27].location, option3: states[44].location, option4: states[27].location, option5: states[24].location, option6: states[20].location},
  {question: states[45].flag, option1: states[10].location, option2: states[3].location, option3: states[20].location, option4: states[26].location, option5: states[45].location, option6: states[22].location},
  {question: states[46].flag, option1: states[9].location, option2: states[36].location, option3: states[2].location, option4: states[46].location, option5: states[23].location, option6: states[24].location},
  {question: states[47].flag, option1: states[47].location, option2: states[4].location, option3: states[24].location, option4: states[30].location, option5: states[11].location, option6: states[26].location},
  {question: states[48].flag, option1: states[8].location, option2: states[5].location, option3: states[26].location, option4: states[44].location, option5: states[11].location, option6: states[48].location},
  {question: states[49].flag, option1: states[7].location, option2: states[6].location, option3: states[28].location, option4: states[43].location, option5: states[49].location, option6: states[28].location}
];

// end of questions array
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~







