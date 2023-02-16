$(document).ready(function () {

    $("#flexSwitchCheckDefault").click(function () {
        if ($("body,.WhiteBG,footer.footer").hasClass("dark-mode")) {
            $("body,.WhiteBG,footer.footer").removeClass("dark-mode");
            $(".VideoPage .QNA .Answer .AnswerContent,.VideoPage .QNA .Question .QuestionContent").removeClass("dark - mode")
            $("*").css("color", "");
            $(".VideoPage .accordion-item .accordion-button, .VideoPage .accordion-item").css("background-color", "");
            $(".disabled").css("color", "");
            $(".Green").css("color", "");
            $(".dropdownBtn .dropdown-item,.dropdownBtn.ProfileDropdown .dropdown-menu").css("color", "#7453C6");

        } else {
            $("body,.WhiteBG,footer.footer").addClass("dark-mode");
            $("*").css("color", "white");
            $(".VideoPage .accordion-item .accordion-button, .VideoPage .accordion-item").css("background-color", "transparent");
            $(".disabled").css("color", "white !important");
            $(".Green").css("color", "green ");
            $(".VideoPage .QNA .Answer .AnswerContent,.VideoPage .QNA .Question .QuestionContent").removeClass("dark-mode")
            $(".dropdownBtn .dropdown-item,.dropdownBtn.ProfileDropdown .dropdown-menu").css("color", "#7453C6");

        }
    });
});