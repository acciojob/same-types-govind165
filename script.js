function isSameType(value1, value2) {
  //your js code
	 return typeof value1 === typeof value2;
}
console.log (isSameType(10,20));
console.log (isSameType("hey","hello"));
console.log (isSameType(NaN,NaN));
console.log (isSameType("10",10));

