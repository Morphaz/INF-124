//General Methods that can be used to validate Forms. This should be used
//with your script to make it easier to validate.


//regex Email source http://www.regular-expressions.info/email.html
function ValidEmail(Email){
	return new RegExp("\\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}\\b","i").test(Email);
};

/*console.log(ValidEmail('aoeuh@gmail.com'));
console.log(ValidEmail('u0uhetuehu'));
console.log(ValidEmail(''));
console.log(ValidEmail('12432'));
console.log("done");*/

function ValidName(Name){
	return new RegExp("(\\b\\w+\\b)+","i").test(Name);
}

//console.log(ValidName(''));
console.log("Testing ValidName");
console.log(ValidName(''));
console.log(ValidName('abcd abcd'));
console.log(ValidName('] aoeu')); //acceptable? maybe
console.log(ValidName(' '));
console.log(ValidName('aoeueaoueu'));


function ValidPhone(Phonenum){
	Num = Phonenum.replace(/\D/g,'');
	return Num.length==7 || Num.length==10;
};

console.log("Testing ValidPhone");
console.log(ValidPhone("123-4567"));
console.log(ValidPhone("(951) 123-4556"));
console.log(ValidPhone(""));
console.log(ValidPhone("aotehusue"));