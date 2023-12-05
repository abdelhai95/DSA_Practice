# Valid Parenthesis
(https://leetcode.com/problems/longest-common-prefix/description/)

## Problem Description 
Given a string s containing just the characters ``` '(', ')', '{', '}', '[' and ']' ```, determine if the input string is valid.

An input string is valid if:

* Open brackets must be closed by the same type of brackets.
* Open brackets must be closed in the correct order.
* Every close bracket has a corresponding open bracket of the same type.


## My Solution Explanation 
- Consider the array's first element to be our initial common prefix.  
- Use `startsWith()` to check if the second element starts with our common prefix if *`true`* --> check the next element in the array and we do that till we reach the end of the array when `! j < arr.length`.  
- When *`false`* we take the last char from the first element and compare it to the same element till we find the chars it starts with only then we move to next element or we slice all of our fcommon prefix chars which will terminates the loop and return empty string.

## Time complexity

    O(n)

## Other Solutions
- **[Solution 1](https://leetcode.com/problems/longest-common-prefix/solutions/3825300/most-easy-javascript-solution-beat-96/):**\
 Use `every()` to loop over the array elements in a certain position.

- **[Solution 2](https://leetcode.com/problems/longest-common-prefix/solutions/3291991/using-simple-str-sort-method-5-line-code/)**\

Use `sort()` on the array to sort strings alphabetically, then compare the first and last element.

## Follow me 
Let's connect to share knowledge and journey 🚀

[Twitter](https://twitter.com/abdelhai_jamal)
[Linkedin](https://www.linkedin.com/in/abdelhai95/)
[Personal Website](https://abdelhaijamal.com/)