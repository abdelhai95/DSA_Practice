const numIdenticalPairs = function(nums) {
   
    let count = 0;

   if(!Array.isArray(nums)) return 'Unvalid Array';
   
   if(nums.length){
      
       for (let i = 0; i < nums.length - 1; i++) {
           for (let j = i + 1; j < nums.length; j++) {
                if(typeof(nums[i]) === 'number' && typeof(nums[j]) === 'number'){
                    console.log(i,j);
                   if(nums[i] === nums[j]) count++;
                   
                }  else return typeof(nums[i]) !== 'number'? `${nums[i]} is not a number`: `${nums[j]} is not a number}`;  
           }
           
       }
      
   } else  return 'The array is EMPTY';
   
   
   return count;

};