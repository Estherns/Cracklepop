
/*Rc sample code to write a program that prints out the numbers 1 to 100 (inclusive),if the number is divisible by 3, print Crackle instead of the number,
if it's divisible by 5, print Pop, if it's divisible by both 3 and 5, print CracklePop. */
function cracklePop() {
	for (var i = 1; i <= 100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			document.write("CracklePop"+"<br>");
	              /* You can also use the option below
		      if (i % 15 === 0) */
		} else if (i % 5 === 0) {
			document.write("Pop"+"<br>");
		} else if (i % 3 === 0){
			document.write("Crackle"+"<br>");
		} else {
			document.write(i+"<br>");
		}
	}
}
cracklePop(); // it calls the cracklePop function

