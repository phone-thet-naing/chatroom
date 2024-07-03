def calculate_possible_ways(n):
    if n == 1 or n == 2:
        return n
    
    return calculate_possible_ways(n - 1) + calculate_possible_ways(n - 2)

class Solution(object):
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        result = []
        
        for i in range(0, len(nums)):
            for j in range(i + 1, len(nums)):
                if (j + 1 == len(nums)):
                    continue
                if (nums[j] + nums[j + 1] == -nums[i]):
                    temp = [nums[i], nums[j], nums[j + 1]]
                    if i - 1 and temp == result[]
        
        return result            
            
ans = Solution()
print(ans.threeSum([0, 0, 0, 0]))
        