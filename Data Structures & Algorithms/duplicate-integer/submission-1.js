class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        /*bruteforce approach
        for loop --> maintain a container (set) check if element repeating or mot
        
        const visited = new Set();
        for(let num of nums){
            if (visited.has(num)) return true;
            visited.add(num);
        }
        return false
        */

        //using map

        const map = nums.reduce((obj,item)=>{
            obj[item] = (obj[item] ?? 0) + 1;
            return obj;
        },{});

        const hasDuplicates = Object.values(map).some(item => item > 1);

        return hasDuplicates;




    }
}
