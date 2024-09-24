function mergeSortedArrays(a, b){
    let result = []
    let i = 0
    let j = 0

    while(i < a.length && j < b.length){
        if(a[i] > b[j] || a[i]===b[j]){
            result.push(b[j])
            j++
        }else{
            result.push(a[i])
            i++
        }
    }

    // Pushing the remaining items in the array
    while(i < a.length){
        result.push(a[i])
        i++
    }

    // Pushing the remaining items in the array
    while(j < b.length){
        result.push(b[j])
        j++
    }
    console.log(result)
}

mergeSortedArrays([0,3,4,31], [4,6,30]) 