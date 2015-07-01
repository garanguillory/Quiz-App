$(document).ready(function(){


  function randomNumber(){
    return Math.floor((Math.random() * 49) + 1);
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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Sets Random State Options and Random Flag Options

  $("#next, #start").on("click", function(){

    $("#option1").empty().append(states[randomNumber()].location);
    $("#option2").empty().append(states[randomNumber()].location);
    $("#option3").empty().append(states[randomNumber()].location);
    $("#option4").empty().append(states[randomNumber()].location);
    $("#option5").empty().append(states[randomNumber()].location);
    $("#option6").empty().append(states[randomNumber()].location);
    
    $("#flag").empty().append(states[randomNumber()].flag);
    console.log("Flag: " + $("#flag").children('img').attr("alt"));

  });

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Removes Answer Choice Output in "#yourChoice"

  $("#next, #start").on("click", function(){

    $("#yourChoice").empty();

  });

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  $(".options").on("click", "li img", function(){
    $(this).toggleClass("selected");

    $("#yourChoice").append($(this).attr("alt"));
    console.log("State chosen: " + $(this).attr("alt"));
  });


  // $(".options").on("click", "li img", function(){
    
  //   $("#yourChoice").empty();
  //   //console.log("State chosen: " + $(this).attr("alt"));
  // });



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// add green border to answer choice if it is correct (".correctAnswer")
// add red border to answer choice if it is incorrect (".wrongAnswer")


  $("#enter").on("click", function(){
    
    if ($(".selected").attr("alt") == $("#flag").children('img').attr("alt")) {
        $("li img.selected").addClass("correctAnswer").removeClass("selected");
        console.log("That's correct. That's " + $("#flag").children('img').attr("alt") + "'s flag.");
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





