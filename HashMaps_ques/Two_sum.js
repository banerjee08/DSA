var twoSum = function(nums, target) {
    let map = {};
    for(let i = 0; i < nums.length; i++){
        let complement = target - nums[i]

        if(map.hasOwnProperty(complement)){
            return [map[complement], i]
        }

        map[nums[i]] = i;
    }  
    return []
}

console.log(twoSum([2,7,11,15], 9))