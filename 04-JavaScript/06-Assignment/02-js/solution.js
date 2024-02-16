const ages = [19,22,19,24,20,25,26,24,25,24]
const length = ages.length


//First we will sort the array
ages.sort()


const min = ages[0]  //Find minimum

const max = ages[length-1]  //Find maximum

console.log( 'min:', min , 'max:',max) // min:19, max:26

let medianAge = null

if(length % 2 == 0){
    medianAge = (ages[length/2-1] + ages[length/2])/2 //median if length is even
}else{
    medianAge = ages[length/2-1] // median if length is odd
}

console.log('median:',medianAge) // median: 24


let totalSum = ages.reduce((acc,result)=> acc + result , 0) // find sum of the all age

const average = totalSum / length 

console.log('average:',average) // average: 22.8

const range = max - min 

console.log('range:', range) // range: 7


const valueMin = Math.abs(min-average)
const valueMax = Math.abs(max-average)

console.log('valueMax:', valueMax) //valuemax: 3.1999
console.log('valueMin:', valueMin) //valuemin: 3.80