
var questions = [
  {question: states[0].flag, option1: states[0].location, option2: states[randomNumber50()].location, option3: states[randomNumber50()].location, option4: states[randomNumber50()].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[1].flag, option1: states[randomNumber50()].location, option2: states[1].location, option3: states[randomNumber50()].location, option4: states[randomNumber50()].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[2].flag, option1: states[randomNumber50()].location, option2: states[randomNumber50()].location, option3: states[2].location, option4: states[randomNumber50()].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[3].flag, option1: states[randomNumber50()].location, option2: states[randomNumber50()].location, option3: states[randomNumber50()].location, option4: states[3].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[4].flag, option1: states[randomNumber50()].location, option2: states[randomNumber50()].location, option3: states[randomNumber50()].location, option4: states[randomNumber50()].location, option5: states[4].location, option6: states[randomNumber50()].location},
  {question: states[5].flag, option1: states[randomNumber50()].location, option2: states[randomNumber50()].location, option3: states[randomNumber50()].location, option4: states[randomNumber50()].location, option5: states[randomNumber50()].location, option6: states[5].location},
  {question: states[6].flag, option1: states[randomNumber50()].location, option2: states[randomNumber50()].location, option3: states[randomNumber50()].location, option4: states[randomNumber50()].location, option5: states[randomNumber50()].location, option6: states[6].location},
  {question: states[7].flag, option1: states[randomNumber50()].location, option2: states[randomNumber50()].location, option3: states[randomNumber50()].location, option4: states[randomNumber50()].location, option5: states[7].location, option6: states[randomNumber50()].location},
  {question: states[8].flag, option1: states[randomNumber50()].location, option2: states[randomNumber50()].location, option3: states[randomNumber50()].location, option4: states[8].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[9].flag, option1: states[randomNumber50()].location, option2: states[randomNumber50()].location, option3: states[9].location, option4: states[randomNumber50()].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[10].flag, option1: states[randomNumber50()].location, option2: states[10].location, option3: states[randomNumber50()].location, option4: states[randomNumber50()].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[11].flag, option1: states[11].location, option2: states[randomNumber50()].location, option3: states[randomNumber50()].location, option4: states[randomNumber50()].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[12].flag, option1: states[12].location, option2: states[randomNumber50()].location, option3: states[randomNumber50()].location, option4: states[randomNumber50()].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[13].flag, option1: states[13].location, option2: states[randomNumber50()].location, option3: states[randomNumber50()].location, option4: states[randomNumber50()].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[14].flag, option1: states[randomNumber50()].location, option2: states[14].location, option3: states[randomNumber50()].location, option4: states[30].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[15].flag, option1: states[randomNumber50()].location, option2: states[15].location, option3: states[randomNumber50()].location, option4: states[31].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[16].flag, option1: states[randomNumber50()].location, option2: states[randomNumber50()].location, option3: states[16].location, option4: states[3].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[17].flag, option1: states[randomNumber50()].location, option2: states[randomNumber50()].location, option3: states[randomNumber50()].location, option4: states[17].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[18].flag, option1: states[randomNumber50()].location, option2: states[randomNumber50()].location, option3: states[randomNumber50()].location, option4: states[18].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[19].flag, option1: states[randomNumber50()].location, option2: states[19].location, option3: states[randomNumber50()].location, option4: states[30].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[20].flag, option1: states[20].location, option2: states[randomNumber50()].location, option3: states[randomNumber50()].location, option4: states[13].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[21].flag, option1: states[21].location, option2: states[randomNumber50()].location, option3: states[randomNumber50()].location, option4: states[43].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[22].flag, option1: states[randomNumber50()].location, option2: states[randomNumber50()].location, option3: states[22].location, option4: states[40].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[23].flag, option1: states[randomNumber50()].location, option2: states[randomNumber50()].location, option3: states[randomNumber50()].location, option4: states[23].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[24].flag, option1: states[randomNumber50()].location, option2: states[randomNumber50()].location, option3: states[randomNumber50()].location, option4: states[2].location, option5: states[randomNumber50()].location, option6: states[24].location},
  {question: states[25].flag, option1: states[randomNumber50()].location, option2: states[randomNumber50()].location, option3: states[randomNumber50()].location, option4: states[25].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[26].flag, option1: states[randomNumber50()].location, option2: states[26].location, option3: states[randomNumber50()].location, option4: states[4].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[27].flag, option1: states[27].location, option2: states[randomNumber50()].location, option3: states[2].location, option4: states[randomNumber50()].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[28].flag, option1: states[28].location, option2: states[randomNumber50()].location, option3: states[randomNumber50()].location, option4: states[1].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[29].flag, option1: states[randomNumber50()].location, option2: states[29].location, option3: states[randomNumber50()].location, option4: states[0].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[30].flag, option1: states[randomNumber50()].location, option2: states[randomNumber50()].location, option3: states[30].location, option4: states[5].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[31].flag, option1: states[randomNumber50()].location, option2: states[randomNumber50()].location, option3: states[31].location, option4: states[17].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[32].flag, option1: states[randomNumber50()].location, option2: states[32].location, option3: states[randomNumber50()].location, option4: states[18].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[33].flag, option1: states[33].location, option2: states[randomNumber50()].location, option3: states[randomNumber50()].location, option4: states[22].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[34].flag, option1: states[randomNumber50()].location, option2: states[randomNumber50()].location, option3: states[randomNumber50()].location, option4: states[43].location, option5: states[randomNumber50()].location, option6: states[34].location},
  {question: states[35].flag, option1: states[randomNumber50()].location, option2: states[randomNumber50()].location, option3: states[randomNumber50()].location, option4: states[33].location, option5: states[randomNumber50()].location, option6: states[35].location},
  {question: states[36].flag, option1: states[randomNumber50()].location, option2: states[randomNumber50()].location, option3: states[randomNumber50()].location, option4: states[13].location, option5: states[36].location, option6: states[randomNumber50()].location},
  {question: states[37].flag, option1: states[37].location, option2: states[randomNumber50()].location, option3: states[randomNumber50()].location, option4: states[5].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[38].flag, option1: states[randomNumber50()].location, option2: states[38].location, option3: states[randomNumber50()].location, option4: states[6].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[39].flag, option1: states[randomNumber50()].location, option2: states[39].location, option3: states[randomNumber50()].location, option4: states[7].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[40].flag, option1: states[randomNumber50()].location, option2: states[40].location, option3: states[randomNumber50()].location, option4: states[8].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[41].flag, option1: states[randomNumber50()].location, option2: states[randomNumber50()].location, option3: states[41].location, option4: states[9].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[42].flag, option1: states[randomNumber50()].location, option2: states[randomNumber50()].location, option3: states[randomNumber50()].location, option4: states[29].location, option5: states[42].location, option6: states[randomNumber50()].location},
  {question: states[43].flag, option1: states[randomNumber50()].location, option2: states[43].location, option3: states[randomNumber50()].location, option4: states[28].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[44].flag, option1: states[randomNumber50()].location, option2: states[randomNumber50()].location, option3: states[44].location, option4: states[27].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[45].flag, option1: states[randomNumber50()].location, option2: states[randomNumber50()].location, option3: states[randomNumber50()].location, option4: states[26].location, option5: states[45].location, option6: states[randomNumber50()].location},
  {question: states[46].flag, option1: states[randomNumber50()].location, option2: states[randomNumber50()].location, option3: states[randomNumber50()].location, option4: states[46].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[47].flag, option1: states[47].location, option2: states[randomNumber50()].location, option3: states[randomNumber50()].location, option4: states[30].location, option5: states[randomNumber50()].location, option6: states[randomNumber50()].location},
  {question: states[48].flag, option1: states[randomNumber50()].location, option2: states[randomNumber50()].location, option3: states[randomNumber50()].location, option4: states[44].location, option5: states[randomNumber50()].location, option6: states[48].location},
  {question: states[49].flag, option1: states[randomNumber50()].location, option2: states[randomNumber50()].location, option3: states[randomNumber50()].location, option4: states[43].location, option5: states[49].location, option6: states[randomNumber50()].location}
];

var replace = function(){

  for (var i = 0; i < questions.length; i++){

    $("#option1").empty().append(questions[i].option1);
    $("#option2").empty().append(questions[i].option2);
    $("#option3").empty().append(questions[i].option3);
    $("#option4").empty().append(questions[i].option4);
    $("#option5").empty().append(questions[i].option5);
    $("#option6").empty().append(questions[i].option6);
    
    $("#flag").empty().append(questions[i].question);
    console.log("Flag: " + $("#flag").children('img').attr("alt"));

  }

}


// var AlabamaFlag = "<img class='center-block' src='images/state_flag/AlabamaStateFlag.svg.png' alt='Alabama'>";
// var AlaskaFlag = "<img class='center-block' src='images/state_flag/AlaskaStateFlag.svg.png' alt='Alaska'>";
// var ArizonaFlag = "<img class='center-block' src='images/state_flag/ArizonaStateFlag.svg.png' alt='Arizona'>";
// var ArkansasFlag = "<img class='center-block' src='images/state_flag/ArkansasStateFlag.svg.png' alt='Arkansas'>";
// var CaliforniaFlag = "<img class='center-block' src='images/state_flag/CaliforniaStateFlag.svg.png' alt='California'>";
// var ColoradoFlag = "<img class='center-block' src='images/state_flag/ColoradoStateFlag.svg.png' alt='Colorado'>";
// var ConnecticutFlag = "<img class='center-block' src='images/state_flag/ConnecticutStateFlag.svg.png' alt='Connecticut'>";
// var DelawareFlag = "<img class='center-block' src='images/state_flag/DelawareStateFlag.svg.png' alt='Delaware'>";
// var FloridaFlag = "<img class='center-block' src='images/state_flag/FloridaStateFlag.svg.png' alt='Florida'>";
// var GeorgiaFlag = "<img class='center-block' src='images/state_flag/GeorgiaStateFlag.svg.png' alt='Georgia'>";
// var HawaiiFlag =  "<img class='center-block' src='images/state_flag/HawaiiStateFlag.svg.png' alt='Hawaii'>";
// var IdahoFlag = "<img class='center-block' src='images/state_flag/IdahoStateFlag.svg.png' alt='Idaho'>";
// var IllinoisFlag = "<img class='center-block' src='images/state_flag/IllinoisStateFlag.svg.png' alt='Illinois'>";
// var IndianaFlag = "<img class='center-block' src='images/state_flag/IndianaStateFlag.svg.png' alt='Indiana'>";
// var IowaFlag = "<img class='center-block' src='images/state_flag/IowaStateFlag.svg.png' alt='Iowa'>";
// var KansasFlag = "<img class='center-block' src='images/state_flag/KansasStateFlag.svg.png' alt='Kansas'>";
// var KentuckyFlag = "<img class='center-block' src='images/state_flag/KentuckyStateFlag.svg.png' alt='Kentucky'>";
// var LouisianaFlag = "<img class='center-block' src='images/state_flag/LouisianaStateFlag.svg.png' alt='Louisiana'>";
// var MaineFlag = "<img class='center-block' src='images/state_flag/MaineStateFlag.svg.png' alt='Maine'>";
// var MarylandFlag = "<img class='center-block' src='images/state_flag/MarylandStateFlag.svg.png' alt='Maryland'>";
// var MassachusettsFlag = "<img class='center-block' src='images/state_flag/MassachusettsStateFlag.svg.png' alt='Massachusetts'>";
// var MichiganFlag = "<img class='center-block' src='images/state_flag/MichiganStateFlag.svg.png' alt='Michigan'>";
// var MinnesotaFlag = "<img class='center-block' src='images/state_flag/MinnesotaStateFlag.svg.png' alt='Minnesota'>";
// var MississippiFlag = "<img class='center-block' src='images/state_flag/MississippiStateFlag.svg.png' alt='Mississippi'>";
// var MissouriFlag = "<img class='center-block' src='images/state_flag/MissouriStateFlag.svg.png' alt='Missouri'>";
// var MontanaFlag = "<img class='center-block' src='images/state_flag/MontanaStateFlag.svg.png' alt='Montana'>";
// var NebraskaFlag = "<img class='center-block' src='images/state_flag/NebraskaStateFlag.svg.png' alt='Nebraska'>";
// var NevadaFlag = "<img class='center-block' src='images/state_flag/NevadaStateFlag.svg.png' alt='Nevada'>";
// var NewHampshireFlag = "<img class='center-block' src='images/state_flag/NewHampshireStateFlag.svg.png' alt='NewHampshire'>";
// var NewJerseyFlag = "<img class='center-block' src='images/state_flag/NewJerseyStateFlag.svg.png' alt='NewJersey'>";
// var NewMexicoFlag = "<img class='center-block' src='images/state_flag/NewMexicoStateFlag.svg.png' alt='NewMexico'>";
// var NewYorkFlag = "<img class='center-block' src='images/state_flag/NewYorkStateFlag.svg.png' alt='NewYork'>";
// var NorthCarolinaFlag = "<img class='center-block' src='images/state_flag/NorthCarolinaStateFlag.svg.png' alt='NorthCarolina'>";
// var NorthDakotaFlag = "<img class='center-block' src='images/state_flag/NorthDakotaStateFlag.svg.png' alt='NorthDakota'>";
// var OhioFlag = "<img class='center-block' src='images/state_flag/OhioStateFlag.svg.png' alt='Ohio'>";
// var OklahomaFlag = "<img class='center-block' src='images/state_flag/OklahomaStateFlag.svg.png' alt='Oklahoma'>";
// var OregonFlag = "<img class='center-block' src='images/state_flag/OregonStateFlag.svg.png' alt='Oregon'>";
// var PennsylvaniaFlag = "<img class='center-block' src='images/state_flag/PennsylvaniaStateFlag.svg.png' alt='Pennsylvania'>";
// var RhodeIslandFlag = "<img class='center-block' src='images/state_flag/RhodeIslandStateFlag.svg.png' alt='RhodeIsland'>";
// var SouthCarolinaFlag = "<img class='center-block' src='images/state_flag/SouthCarolinaStateFlag.svg.png' alt='SouthCarolina'>";
// var SouthDakotaFlag = "<img class='center-block' src='images/state_flag/SouthDakotaStateFlag.svg.png' alt='SouthDakota'>";
// var TennesseeFlag = "<img class='center-block' src='images/state_flag/TennesseeStateFlag.svg.png' alt='Tennessee'>";
// var TexasFlag = "<img class='center-block' src='images/state_flag/TexasStateFlag.svg.png' alt='Texas'>";
// var UtahFlag = "<img class='center-block' src='images/state_flag/UtahStateFlag.svg.png' alt='Utah'>";
// var VermontFlag = "<img class='center-block' src='images/state_flag/VermontStateFlag.svg.png' alt='Vermont'>";
// var VirginiaFlag = "<img class='center-block' src='images/state_flag/VirginiaStateFlag.svg.png' alt='Virginia'>";
// var WashingtonFlag = "<img class='center-block' src='images/state_flag/WashingtonStateFlag.svg.png' alt='Washington'>";
// var WestVirginiaFlag = "<img class='center-block' src='images/state_flag/WestVirginiaStateFlag.svg.png' alt='WestVirginia'>";
// var WisconsinFlag = "<img class='center-block' src='images/state_flag/WisconsinStateFlag.svg.png' alt='Wisconsin'>";
// var WyomingFlag = "<img class='center-block' src='images/state_flag/WyomingStateFlag.svg.png' alt='Wyoming'>";




// var AlabamaFlag = "<img class='center-block' src='images/state_flag/AlabamaStateFlag.svg.png' alt='Alabama'>";
// var AlaskaFlag = "<img class='center-block' src='images/state_flag/AlaskaStateFlag.svg.png' alt='Alaska'>";
// var ArizonaFlag = "<img class='center-block' src='images/state_flag/ArizonaStateFlag.svg.png' alt='Arizona'>";
// var ArkansasFlag = "<img class='center-block' src='images/state_flag/ArkansasStateFlag.svg.png' alt='Arkansas'>";
// var CaliforniaFlag = "<img class='center-block' src='images/state_flag/CaliforniaStateFlag.svg.png' alt='California'>";
// var ColoradoFlag = "<img class='center-block' src='images/state_flag/ColoradoStateFlag.svg.png' alt='Colorado'>";
// var ConnecticutFlag = "<img class='center-block' src='images/state_flag/ConnecticutStateFlag.svg.png' alt='Connecticut'>";
// var DelawareFlag = "<img class='center-block' src='images/state_flag/DelawareStateFlag.svg.png' alt='Delaware'>";
// var FloridaFlag = "<img class='center-block' src='images/state_flag/FloridaStateFlag.svg.png' alt='Florida'>";
// var GeorgiaFlag = "<img class='center-block' src='images/state_flag/GeorgiaStateFlag.svg.png' alt='Georgia'>";
// var HawaiiFlag =  "<img class='center-block' src='images/state_flag/HawaiiStateFlag.svg.png' alt='Hawaii'>";
// var IdahoFlag = "<img class='center-block' src='images/state_flag/IdahoStateFlag.svg.png' alt='Idaho'>";
// var IllinoisFlag = "<img class='center-block' src='images/state_flag/IllinoisStateFlag.svg.png' alt='Illinois'>";
// var IndianaFlag = "<img class='center-block' src='images/state_flag/IndianaStateFlag.svg.png' alt='Indiana'>";
// var IowaFlag = "<img class='center-block' src='images/state_flag/IowaStateFlag.svg.png' alt='Iowa'>";
// var KansasFlag = "<img class='center-block' src='images/state_flag/KansasStateFlag.svg.png' alt='Kansas'>";
// var KentuckyFlag = "<img class='center-block' src='images/state_flag/KentuckyStateFlag.svg.png' alt='Kentucky'>";
// var LouisianaFlag = "<img class='center-block' src='images/state_flag/LouisianaStateFlag.svg.png' alt='Louisiana'>";
// var MaineFlag = "<img class='center-block' src='images/state_flag/MaineStateFlag.svg.png' alt='Maine'>";
// var MarylandFlag = "<img class='center-block' src='images/state_flag/MarylandStateFlag.svg.png' alt='Maryland'>";
// var MassachusettsFlag = "<img class='center-block' src='images/state_flag/MassachusettsStateFlag.svg.png' alt='Massachusetts'>";
// var MichiganFlag = "<img class='center-block' src='images/state_flag/MichiganStateFlag.svg.png' alt='Michigan'>";
// var MinnesotaFlag = "<img class='center-block' src='images/state_flag/MinnesotaStateFlag.svg.png' alt='Minnesota'>";
// var MississippiFlag = "<img class='center-block' src='images/state_flag/MississippiStateFlag.svg.png' alt='Mississippi'>";
// var MissouriFlag = "<img class='center-block' src='images/state_flag/MissouriStateFlag.svg.png' alt='Missouri'>";
// var MontanaFlag = "<img class='center-block' src='images/state_flag/MontanaStateFlag.svg.png' alt='Montana'>";
// var NebraskaFlag = "<img class='center-block' src='images/state_flag/NebraskaStateFlag.svg.png' alt='Nebraska'>";
// var NevadaFlag = "<img class='center-block' src='images/state_flag/NevadaStateFlag.svg.png' alt='Nevada'>";
// var NewHampshireFlag = "<img class='center-block' src='images/state_flag/NewHampshireStateFlag.svg.png' alt='NewHampshire'>";
// var NewJerseyFlag = "<img class='center-block' src='images/state_flag/NewJerseyStateFlag.svg.png' alt='NewJersey'>";
// var NewMexicoFlag = "<img class='center-block' src='images/state_flag/NewMexicoStateFlag.svg.png' alt='NewMexico'>";
// var NewYorkFlag = "<img class='center-block' src='images/state_flag/NewYorkStateFlag.svg.png' alt='NewYork'>";
// var NorthCarolinaFlag = "<img class='center-block' src='images/state_flag/NorthCarolinaStateFlag.svg.png' alt='NorthCarolina'>";
// var NorthDakotaFlag = "<img class='center-block' src='images/state_flag/NorthDakotaStateFlag.svg.png' alt='NorthDakota'>";
// var OhioFlag = "<img class='center-block' src='images/state_flag/OhioStateFlag.svg.png' alt='Ohio'>";
// var OklahomaFlag = "<img class='center-block' src='images/state_flag/OklahomaStateFlag.svg.png' alt='Oklahoma'>";
// var OregonFlag = "<img class='center-block' src='images/state_flag/OregonStateFlag.svg.png' alt='Oregon'>";
// var PennsylvaniaFlag = "<img class='center-block' src='images/state_flag/PennsylvaniaStateFlag.svg.png' alt='Pennsylvania'>";
// var RhodeIslandFlag = "<img class='center-block' src='images/state_flag/RhodeIslandStateFlag.svg.png' alt='RhodeIsland'>";
// var SouthCarolinaFlag = "<img class='center-block' src='images/state_flag/SouthCarolinaStateFlag.svg.png' alt='SouthCarolina'>";
// var SouthDakotaFlag = "<img class='center-block' src='images/state_flag/SouthDakotaStateFlag.svg.png' alt='SouthDakota'>";
// var TennesseeFlag = "<img class='center-block' src='images/state_flag/TennesseeStateFlag.svg.png' alt='Tennessee'>";
// var TexasFlag = "<img class='center-block' src='images/state_flag/TexasStateFlag.svg.png' alt='Texas'>";
// var UtahFlag = "<img class='center-block' src='images/state_flag/UtahStateFlag.svg.png' alt='Utah'>";
// var VermontFlag = "<img class='center-block' src='images/state_flag/VermontStateFlag.svg.png' alt='Vermont'>";
// var VirginiaFlag = "<img class='center-block' src='images/state_flag/VirginiaStateFlag.svg.png' alt='Virginia'>";
// var WashingtonFlag = "<img class='center-block' src='images/state_flag/WashingtonStateFlag.svg.png' alt='Washington'>";
// var WestVirginiaFlag = "<img class='center-block' src='images/state_flag/WestVirginiaStateFlag.svg.png' alt='WestVirginia'>";
// var WisconsinFlag = "<img class='center-block' src='images/state_flag/WisconsinStateFlag.svg.png' alt='Wisconsin'>";
// var WyomingFlag = "<img class='center-block' src='images/state_flag/WyomingStateFlag.svg.png' alt='Wyoming'>";




















