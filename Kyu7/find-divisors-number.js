//Find the number of divisors of a positive integer n.
//
function getDivisorsCnt(n) {
	var z = 0;
	for (var i = 1; i <= n; i++) {
		if (n % i === 0) {
			z++;
		}
	}
	return z;
}

console.log(getDivisorsCnt(1) === 1);
console.log(getDivisorsCnt(10) === 4);
console.log(getDivisorsCnt(11) === 2);
console.log(getDivisorsCnt(54) === 8);