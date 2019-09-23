function ageCalculator(current,birth) {

   var yourAge = current - birth;
   var yourAge2 = yourAge -1;

   document.write("You are either " + yourAge + " or " + yourAge2)
}

ageCalculator(2019, 2000)



// basic ex 03


function ageCalculator(birth) {

	var year = new Date();
	var current = year.getFullYear();
  	var yourAge = current - birth;
   	var yourAge2 = yourAge -1;
   console.log(year);
   document.write("You are either " + yourAge + " or " + yourAge2);
}

ageCalculator(2000)
