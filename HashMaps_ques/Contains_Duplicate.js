var containsDuplicate = function(nums) {
    let map = new Map()
     for(let i = 0; i < nums.length; i++){
         if(map.has(nums[i])){
             return true
         }else{
             map.set(nums[i])
            }
        } 
    return false 
 };


a = [1,2,3,1]
a_answer = containsDuplicate(a)
console.log(a_answer)

b = [1,2,3,4]
b_answer = containsDuplicate(b)
console.log(b_answer)

c = [1,1,1,3,3,4,3,2,4,2]
c_answer = containsDuplicate(c)
console.log(c_answer)
