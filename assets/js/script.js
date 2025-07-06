$(document).ready(function () {
    $("#cubo1").on("mouseenter", function () {
        $("#cubo1").hide(1000),
        $("#trail1").hide(1000)
    })
    $("#cubo1").on("mouseleave", function () {
        $("#cubo1").show(1000),
        $("#trail1").show(1000)
    })

    $("#cubo2").on("mouseenter", function () {
        $("#cubo2").hide(1000),
        $("#trail2").hide(1000)
    })
    $("#cubo2").on("mouseleave", function () {
        $("#cubo2").show(1000),
        $("#trail2").show(1000)
    })
});