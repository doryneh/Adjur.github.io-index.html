
     $("#NotificationBTN").click(function () {
    $("#fm_menu").toggle();
     document.getElementById("ProfileNavmenu").style.display = "none";
     document.getElementById("country_menu").style.display = "none";


  });
  $("#ProfileNav").click(function () {
    $("#ProfileNavmenu").toggle();
    document.getElementById("fm_menu").style.display = "none";
    document.getElementById("country_menu").style.display = "none";
 
  });

  $("#country_btn").click(function () {
    $("#country_menu").toggle();
     document.getElementById("ProfileNavmenu").style.display = "none";
     document.getElementById("fm_menu").style.display = "none";


  });
