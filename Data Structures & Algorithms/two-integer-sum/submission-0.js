class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const map = new Map();

        for (let i = 0; i<nums.length; i++){
            let compl = target - nums[i];

            if(map.has(nums[i])) return [map.get(nums[i]), i];

            map.set(compl, i);
        }
        
    }
}
