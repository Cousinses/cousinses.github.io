function clicked() {
    $(this).css("background-color", "red")
}



  $(document).ready(function(){

    var button = $("#submitemail");

    //console.log("got the buttons: " + button)

   // button.on('click', clicked)

    button.on('click', function(){
      $(this).html("Submitted");
      $(".youremail").hide ();
      $("#feedback").text ("Thanks for joining, we'll keep you updated!");
    })



  })
