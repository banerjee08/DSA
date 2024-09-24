let greeting = "Hi My name is Bond"

function reverse(str) {
    let result = ""
    greet_arr = [...str]
    for (let i = greet_arr.length - 1; i >= 0; i--){
        result += greet_arr[i]
    }
    console.log(result)
}

reverse(greeting)