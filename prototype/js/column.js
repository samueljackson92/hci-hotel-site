/*
 * Quick JS fix for the two column problem.
 */

$(document).ready(function() {
	setLayoutHeight();
	$(window).resize(setLayoutHeight);
});

function setLayoutHeight() {
    var left = $("#nav-box").outerHeight(true);
    var right = $("#content").outerHeight(true);

    var max = Math.max(left, right);

    if(max < $(document).height()) {
    	max = $(document).height() - 80;
    }

    $("#content").height(max);
    $("#nav-box").height(max);
}