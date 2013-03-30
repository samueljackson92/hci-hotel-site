$(document).ready(function() {
   	if($('.date-num').length) {
   		buildDatePicker();
   	}
});

function buildDatePicker() {
	var months = [ "January", "February", "March", "April", "May", "June", 
               "July", "August", "September", "October", "November", "December" ];

	for (i=1; i <= 31; i++) {
		$('.date-num').append('<option value="'+i+'">'+i+'</option>');
	}

	for (i=0; i < months.length; i++) {
		$('.date-month').append('<option value="'+months[i]+'">'+months[i]+'</option>');
	}
}