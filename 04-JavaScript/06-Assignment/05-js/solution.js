const student = {
	name: 'Alice',
	age: 22,
	major: 'Computer Science',
	GPA: 3.8,
	isEnrolled: true
}

for (let property in student) {
	console.log('Property: ' + property + ', Value: ' + student[property]);
}


/* Output: 

Property: name, Value: Alice
Property: age, Value: 22
Property: major, Value: Computer Science
Property: GPA, Value: 3.8
Property: isEnrolled, Value: true

*/