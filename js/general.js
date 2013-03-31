$(document).ready(function() {
   	if($('.date-num').length) {
   		buildDatePicker();
   	}
   	$('#reg-no-rooms').toggle();
   	$('#reg-no-rooms-label').toggle();
   	
   	if(('#reg-no-rooms').length) {
		$('#reg-type').change(function() {
		   	$('#reg-no-rooms').toggle();
		   	$('#reg-no-rooms-label').toggle();
		});
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

	for (i=2013; i < 2018; i++) {
		$('.date-year').append('<option value="'+i+'">'+i+'</option>');
	}
}