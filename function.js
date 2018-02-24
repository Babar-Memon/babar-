//functions in java script
// function printMyName(){ creating function
// 	for (let i=0; i<10; i++){
// 		console.log('Babar Ali');
// 	}
// }
// printMyName();calling function

//Javascript interaction with html
// function Add() {
// 	let ad = parseInt(document.getElementById("num").value);
// 	let add = parseInt(document.getElementById("num1").value);
// 	let sum = ad + add;
// 	alert(sum);
// 	}
// function subtract() {
// 	let sub = parseInt(document.getElementById("num").value);
// 	let subone = parseInt(document.getElementById("num1").value);
// 	let result = sub - subone ;
// 	alert(result);
// 	}
// function Multiply() {
// 	let Multi = parseInt(document.getElementById("num").value);
// 	let Multione = parseInt(document.getElementById("num1").value);
// 	let multiply = Multi * Multione ;
// 	alert(multiply);
// 	}
// function Divide() {
// 	let Div = parseInt(document.getElementById("num").value);
// 	let Div1 = parseInt(document.getElementById("num1").value);
// 	let division = Div / Div1 ;
// 	alert(division);
// 	}


//Scope chain

let balance = 40000;
let input;
function withDraw() {
	let dw = parseInt(prompt("Enter Withdarw draw"));
	if (dw > balance) {
		alert("You not have enough balance");
		
	} else if (dw % 500 === 0){
		balance = balance - dw;
		alert("Your transaction has been done Remaining balance is " + balance );
		 

	}
	else {
		alert("You can only withdraw ammount that is multiply by hundred " );
	}
}

function deposit(){
	let de = parseInt(prompt("Enter amount to deposit"));
	balance = balance + de;
	alert("amount deposit" + de);
	
}
function balanceCheck() {
	alert("Your balance is " + balance);
	

}
function main(){
	input = parseInt(prompt("enetr number 1-3"));
	if(input === 1){
		withDraw();
		
	}
	if (input === 2) {
		deposit();
		
	}
	if (input === 3) {
		balanceCheck();
		
	}

}
while(true){
main();
}





