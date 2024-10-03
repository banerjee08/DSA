var romanToInt = function(s){
    let map = new Map()

    // Setting the values in map
    map.set("I", 1)
    map.set("V", 5)
    map.set("X", 10)
    map.set("L", 50)
    map.set("C", 100)
    map.set("D", 500)
    map.set("M", 1000)

    let total = 0

    for(let i = 0; i < s.length; i++){
        let value = map.get(s.charAt(i))
        let nextValue = map.get(s.charAt(i+1))
        
        if(nextValue > value){
            total -= value
        }else{
            total += value
        }
    }
    return total
}


// Test cases
a = "III"
console.log(romanToInt(a))
b = "LVIII"
console.log(romanToInt(b))
c = "MCMXCIV"
console.log(romanToInt(c))