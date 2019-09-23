function ageCalculator(current,birth) {

   var yourAge = current - birth;
   var yourAge2 = yourAge -1;
   document.write("<br>");
   document.write("You are either " + yourAge + " or " + yourAge2)
}

ageCalculator(2019, 2000)



// Basic 3 | Age Calculator-improved


function ageCalculator(birth) {

	var year = new Date();
	var current = year.getFullYear();
  	var yourAge = current - birth;
   	var yourAge2 = yourAge -1;
   console.log(year);
   document.write("<br>");
   document.write("You are either " + yourAge + " or " + yourAge2);
}

ageCalculator(2000)

// Basic 4 | Degree-Radian Conversion

function convertDegree(degree) {
	
	var oneRadian = Math.PI / 180;
	var result = oneRadian * degree;
	document.write("<br>");
	document.write(result);
}

// Basic 5 | Area and Volume of a box

function getArea(length,width) {
	 
	var resultArea = length * width;
	return resultArea;
	console.log(resultArea);
}

var firstResult = resultArea;

function getVolume(depth) {

	var resultVolume = firstResult * depth;
 	console.log(resultVolume);
}
