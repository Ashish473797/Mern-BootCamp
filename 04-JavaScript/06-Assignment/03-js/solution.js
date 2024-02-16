const student = {
	name: 'Alice',
	age: 22,
	major: 'Computer Science',
	GPA: 3.8,
	isEnrolled: true
}

Object.preventExtensions(student)

const extensibleStatus = Object.isExtensible(student)

const teacher = {
    subject:'Math'
}

Object.seal(teacher)

const sealedStatus = Object.isSealed(teacher)

console.log('extensibleStatus:',extensibleStatus,'sealedStatus:',sealedStatus) // extensibleStatus: false sealedStatus: true