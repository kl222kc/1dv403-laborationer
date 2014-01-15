"use strict";

var makePerson = function(persArr){

	var sum = 0;
	var names = "";

	// Sorterar namnen i bokstavs ordning
	persArr.sort(function(a, b){
		return a.name.localeCompare(b.name);
	});

	// Kör igenom hela objektet lägger till varje age till sum och varje name till names.
	for(var i = 0; i < persArr.length; i++) {
		sum += persArr[i].age;
		names = names + persArr[i].name;

		// Lägger till ", " efter alla namnen förutom det sista
		if (i !== persArr.length - 1) {
			names = names + ", ";
		}
	}
	// Sorterar åldrarna i storleks ordning
	persArr.sort(function (a, b) {
		return a.age - b.age;
	});

	// Variabler för att få ut högsta och lägsta åldrarna
	var minAge = persArr[0].age;
	var maxAge = persArr[persArr.length - 1].age;

	// Tar ut medelvärdet
	var avg = sum/persArr.length;
	avg = Math.round(avg);

	// Nytt objekt innehållandes resultatet
	var result = {};
	result.names = names;
	result.minAge = minAge;
	result.maxAge = maxAge;
	result.averageAge = avg;

	return result;

};

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}, {name: "Kim Larsson", age: 24}];

var result = makePerson(data);

console.log(result);
