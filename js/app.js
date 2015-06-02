$(document).ready(function(){







  $("#next1").on("click", function(){
      $("#howToPlay1").addClass('hidden');
      $("#howToPlay2").removeClass('hidden');
      console.log("it worked");
  });


  $("#next2").on("click", function(){
      $("#howToPlay2").addClass('hidden');
      $("#howToPlay3").removeClass('hidden');
      console.log("it worked again");
  });

  $("#next3").on("click", function(){
      $("#howToPlay2").addClass('hidden');
      $("#howToPlay3").addClass('hidden');
      console.log("third time is a charm");
  });


  $("#enter").on("click", function(){
    $("#one").empty().append(state_location[4]);
    $("#two").empty().append(state_location[6]);
    $("#three").empty().append(state_location[19]);
    $("#four").empty().append(state_location[6]);
    $("#five").empty().append(state_location[36]);
    $("#six").empty().append(state_location[45]);
    
    $("#flag").empty().append("<img class='center-block' src='images/state_flag/MaineStateFlag.svg.png' alt='Maine'>");

  });

  
});


var Alabama = "<img class='center-block' src='images/state_location/AlabamaStateLocation.svg.png' alt='Alabama'>";
var Alaska = "<img class='center-block' src='images/state_location/AlaskaStateLocation.svg.png' alt='Alaska'>";
var Arizona = "<img class='center-block' src='images/state_location/ArizonaStateLocation.svg.png' alt='Arizona'>";
var Arkansas = "<img class='center-block' src='images/state_location/ArkansasStateLocation.svg.png' alt='Arkansas'>";
var California = "<img class='center-block' src='images/state_location/CaliforniaStateLocation.svg.png' alt='California'>";
var Colorado = "<img class='center-block' src='images/state_location/ColoradoStateLocation.svg.png' alt='Colorado'>";
var Connecticut = "<img class='center-block' src='images/state_location/ConnecticutStateLocation.svg.png' alt='Connecticut'>";
var Delaware = "<img class='center-block' src='images/state_location/DelawareStateLocation.svg.png' alt='Delaware'>";
var Florida = "<img class='center-block' src='images/state_location/FloridaStateLocation.svg.png' alt='Florida'>";
var Georgia = "<img class='center-block' src='images/state_location/GeorgiaStateLocation.svg.png' alt='Georgia'>";
var Hawaii =  "<img class='center-block' src='images/state_location/HawaiiStateLocation.svg.png' alt='Hawaii'>";
var Idaho = "<img class='center-block' src='images/state_location/IdahoStateLocation.svg.png' alt='Idaho'>";
var Illinois = "<img class='center-block' src='images/state_location/IllinoisStateLocation.svg.png' alt='Illinois'>";
var Indiana = "<img class='center-block' src='images/state_location/IndianaStateLocation.svg.png' alt='Indiana'>";
var Iowa = "<img class='center-block' src='images/state_location/IowaStateLocation.svg.png' alt='Iowa'>";
var Kansas = "<img class='center-block' src='images/state_location/KansasStateLocation.svg.png' alt='Kansas'>";
var Kentucky = "<img class='center-block' src='images/state_location/KentuckyStateLocation.svg.png' alt='Kentucky'>";
var Louisiana = "<img class='center-block' src='images/state_location/LouisianaStateLocation.svg.png' alt='Louisiana'>";
var Maine = "<img class='center-block' src='images/state_location/MaineStateLocation.svg.png' alt='Maine'>";
var Maryland = "<img class='center-block' src='images/state_location/MarylandStateLocation.svg.png' alt='Maryland'>";
var Massachusetts = "<img class='center-block' src='images/state_location/MassachusettsStateLocation.svg.png' alt='Massachusetts'>";
var Michigan = "<img class='center-block' src='images/state_location/MichiganStateLocation.svg.png' alt='Michigan'>";
var Minnesota  = "<img class='center-block' src='images/state_location/MinnesotaStateLocation.svg.png' alt='Minnesota'>";
var Mississippi = "<img class='center-block' src='images/state_location/MississippiStateLocation.svg.png' alt='Mississippi'>";
var Missouri = "<img class='center-block' src='images/state_location/MissouriStateLocation.svg.png' alt='Missouri'>";
var Montana = "<img class='center-block' src='images/state_location/MontanaStateLocation.svg.png' alt='Montana'>";
var Nebraska = "<img class='center-block' src='images/state_location/NebraskaStateLocation.svg.png' alt='Nebraska'>";
var Nevada = "<img class='center-block' src='images/state_location/NevadaStateLocation.svg.png' alt='Nevada'>";
var NewHampshire = "<img class='center-block' src='images/state_location/NewHampshireStateLocation.svg.png' alt='NewHampshire'>";
var NewJersey = "<img class='center-block' src='images/state_location/NewJerseyStateLocation.svg.png' alt='NewJersey'>";
var NewMexico = "<img class='center-block' src='images/state_location/NewMexicoStateLocation.svg.png' alt='NewMexico'>";
var NewYork = "<img class='center-block' src='images/state_location/NewYorkStateLocation.svg.png' alt='NewYork'>";
var NorthCarolina = "<img class='center-block' src='images/state_location/NorthCarolinaStateLocation.svg.png' alt='NorthCarolina'>";
var NorthDakota = "<img class='center-block' src='images/state_location/NorthDakotaStateLocation.svg.png' alt='NorthDakota'>";
var Ohio = "<img class='center-block' src='images/state_location/OhioStateLocation.svg.png' alt='Ohio'>";
var Oklahoma = "<img class='center-block' src='images/state_location/OklahomaStateLocation.svg.png' alt='Oklahoma'>";
var Oregon = "<img class='center-block' src='images/state_location/OregonStateLocation.svg.png' alt='Oregon'>";
var Pennsylvania = "<img class='center-block' src='images/state_location/PennsylvaniaStateLocation.svg.png' alt='Pennsylvania'>";
var RhodeIsland = "<img class='center-block' src='images/state_location/RhodeIslandStateLocation.svg.png' alt='RhodeIsland'>";
var SouthCarolina = "<img class='center-block' src='images/state_location/SouthCarolinaStateLocation.svg.png' alt='SouthCarolina'>";
var SouthDakota = "<img class='center-block' src='images/state_location/SouthDakotaStateLocation.svg.png' alt='SouthDakota'>";
var Tennessee = "<img class='center-block' src='images/state_location/TennesseeStateLocation.svg.png' alt='Tennessee'>";
var Texas = "<img class='center-block' src='images/state_location/TexasStateLocation.svg.png' alt='Texas'>";
var Utah = "<img class='center-block' src='images/state_location/UtahStateLocation.svg.png' alt='Utah'>";
var Vermont = "<img class='center-block' src='images/state_location/VermontStateLocation.svg.png' alt='Vermont'>";
var Virginia = "<img class='center-block' src='images/state_location/VirginiaStateLocation.svg.png' alt='Virginia'>";
var Washington = "<img class='center-block' src='images/state_location/WashingtonStateLocation.svg.png' alt='Washington'>";
var WestVirginia = "<img class='center-block' src='images/state_location/WestVirginiaStateLocation.svg.png' alt='WestVirginia'>";
var Wisconsin  = "<img class='center-block' src='images/state_location/WisconsinStateLocation.svg.png' alt='Wisconsin'>";
var Wyoming  = "<img class='center-block' src='images/state_location/WyomingStateLocation.svg.png' alt='Wyoming'>";



var state_location = [
Alabama, Alaska, Arizona, Arkansas,
California, Colorado, Connecticut, 
Delaware, Florida, Georgia, Hawaii, 
Idaho, Illinois, Indiana, Iowa,
Kansas, Kentucky, Louisiana, Maine,
Maryland, Massachusetts, Michigan,
Minnesota, Mississippi, Missouri,
Montana, Nebraska, Nevada, NewHampshire,
NewJersey, NewMexico, NewYork,
NorthCarolina, NorthDakota, Ohio,
Oklahoma, Oregon, Pennsylvania,
RhodeIsland, SouthCarolina,
SouthDakota, Tennessee, Texas,
Utah, Vermont, Virginia, Washington,
WestVirginia, Wisconsin, Wyoming
];





































































