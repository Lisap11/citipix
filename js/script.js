// alert('js attached');

var myCities = ['New York', 'LA', 'San Francisco', 'Austin', 'Sydney'];

for(var i = 0; i < myCities.length; i++){
	// console.log(myCities [i]);

// 0 equals New York, You want it to run the whole length of 
// your loop. the i++ adds 1 so it goes to the next city 

$('#city-type').append('<option value="'  + myCities [i] +  '">' + myCities[i] + '</option>');
// adding the city in order of what you listed. Starting with NY since 
// i = New York. Then it continues adding the additional cities 
}
// this adds it automatically to the html instead of inputting it manually 
// <option value="New York">New York</option>

// this changes the background image in the body & class in the css file
$('#city-type').change(function(){
	console.log($('#city-type').val());
	var city = $('#city-type').val();

	if(city === 'New York'){
		$('body').attr('class', 'nyc');
	}
	else if(city === 'LA'){
		$('body').attr('class', 'la');
	}
	else if(city === 'San Francisco'){
		$('body').attr('class', 'sf');
	}
	else if(city === 'Austin'){
		$('body').attr('class', 'austin');
	}
	else if(city === 'Sydney'){
		$('body').attr('class', 'sydney');
	}
});