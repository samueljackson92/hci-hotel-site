
/* Column.js
 * Author: Samuel Jackson (slj11@aber.ac.uk)
 * Date: 28/3/13
 * Description: Quick JS fix for the two column problem.
 */

$(document).ready(function() {
	setLayoutHeight();
});

function setLayoutHeight() {
    var left = $("#nav-box").outerHeight(true);
    var right = $("#content").outerHeight(true);

    var max = Math.max(left, right);

    if(max < $(document).height()-80) {
    	max = $(document).height()-80;
    }

    $("#content").height(max);
    $("#nav-box").height(max);
}