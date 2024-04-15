function power( x, n)
{
	let pow = 1;
	for (let i = 0; i < n; i++) {
		pow = pow * x;
	}
    console.log( pow );
}
	let result = power(2,3);
