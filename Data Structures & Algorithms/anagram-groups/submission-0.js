class Solution {
    groupAnagrams(strs) {

        const masterMap = {};

        for (const str of strs) {

            const freq = {};

            for (const ch of str) {
                freq[ch] = (freq[ch] || 0) + 1;
            }

            // Build a deterministic key
            const key = Object.keys(freq)
                .sort()
                .map(ch => ch + freq[ch])
                .join("");

            if (!masterMap[key]) {
                masterMap[key] = [];
            }

            masterMap[key].push(str);
        }

        return Object.values(masterMap);
    }
}