// when DOM is ready
$(document).ready(function () {

$(".dropdown-show").hide(); //hides show all button

    // parses xml data
   $.ajax({
       type: "GET",
       url: "http://localhost:1234/TMNT.xml",
      //  cache: false,
       dataType: "xml",
       success: function(data) {
        //  console.log(data);
           $(data).find('turtle').each(function() {
               var  name = $(this).find("name").text(),
                    color = $(this).find("color").text(),
                    weapon = $(this).find("weapon").text(),
                    descr = $(this).find("description").text();
                    turtlePic = $(this).find("imageSource").text();

                    // creates a <div> with an id=name
                    // which fetches name from xml
                    var $turtleWrapper = $('<div></div>');
                    $turtleWrapper.attr("id", name).attr("class", "turtleWrapper");

                    $(".modal-body").append($turtleWrapper); //adds <div> to display xml within

                    var turtleTarget = "#" + name,
                        $turtleColor =  $('<p class="turtle-value"></p>'),
                        $turtleColorLabel = $('<p class="turtle-label">Color:</p>'),
                        $turtleWeapon =  $('<p class="turtle-value"></p>'),
                        $turtleWeaponLabel = $('<p class="turtle-label">Weapon:</p>'),
                        $turtleDescr =  $('<p class="turtle-value"></p>'),
                        $turtleDescrLabel = $('<p class="turtle-label">Description:</p>'),
                        $turtleImg = $('<img class="turtle-img"></img>');

                        //creates 2 more <div>'s inside turtleWrapper to help
                        //with styling modal layout
                    var $modalBodyLeft = $('<div class="modal-body__left"></div>'),
                        $modalBodyRight = $('<div class="modal-body__right"></div>'),
                        tgt = turtleTarget + ".turtleWrapper";

                    $(tgt).append($modalBodyLeft).append($modalBodyRight);

                    //displays images from xml
                    $turtleImg.attr('src', turtlePic);
                    var tgtLeft = turtleTarget + " .modal-body__left";
                    $(tgtLeft).append($turtleImg);

                    var tgtRight = turtleTarget + " .modal-body__right";

                    // displays colors from xml
                    $turtleColor.text(color);
                    $(tgtRight).append($turtleColorLabel);
                    $(tgtRight).append($turtleColor);

                    // displays weapons from xml
                    $turtleWeapon.text(weapon);
                    $(tgtRight).append($turtleWeaponLabel);
                    $(tgtRight).append($turtleWeapon);

                    // displays descriptions from xml
                    $turtleDescr.text(descr);
                    $(tgtRight).append($turtleDescrLabel);
                    $(tgtRight).append($turtleDescr);
           });
       }
   });

  // this on click func. only shows the xml data in modal
  // based off of which turtle you click
  $(".turtles-img").click(function(e) {
    $('.turtleWrapper').css("display", "none"); // hides xml by default

    var turtleName = $(this).attr('alt'),
        turtleId = "#" + turtleName;

    $(turtleId).css("display", "block");
    $('#myModalLabel').text(turtleName);
    $('#turtleModal').modal('show'); //show modal
  });

  // Filtering TMNT by name, color, and weapon
  $(".nav-wrapper a").on("click", function(event) {
    $(".dropdown-show").show(); //show all button is now seen
    var tgtEl = $(event.target).attr('class'), //grabs class names of <a>'s
        thisTurtleArr = tgtEl.split("-"), //splits class names into string
        thisTurtle = "." + thisTurtleArr[1]; //turns names into class (.don, .raph, etc.)
    $(".turtles").hide(); //hides all turtles
    $(thisTurtle).show().css("text-align", "center"); //shows chosen turtle and centers the image
  });

  //show all button action
  $(".dropdown-show").on("click", function(e) {
    $(".turtles").show(); //on click of show all button, show all turtles
    $(".dropdown-show").hide(); //then hide show all button again
  });
});
