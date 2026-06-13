package main

func hasDuplicate(nums []int) bool {
	seen := make(map[int]bool)
	for _, n := range nums {
		if seen[n] {
			return true
		}
		seen[n] = true
	}
	return false
}

/*
   R/. Function includes a single loop, so time complexity would be O(n), space complexity, I'm not too sure
*/
