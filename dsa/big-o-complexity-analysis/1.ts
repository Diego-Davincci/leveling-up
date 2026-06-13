/*
    Question 1 of 6: what's the time and space complexity of this, and why? Give me both, with reasoning for each.
*/
function hasDuplicate(nums: number[]): boolean {
  const seen = new Set<number>();
  for (const n of nums) {
    if (seen.has(n)) {
      return true;
    }
    seen.add(n);
  }
  return false;
}

/*
    R/. Function includes a single loop, so time complexity would be O(n), space complexity, I'm not too sure
*/
