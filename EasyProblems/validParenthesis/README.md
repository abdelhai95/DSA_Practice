# Valid Parenthesis
(https://leetcode.com/problems/valid-parentheses/)

## Problem Description 
Given a string s containing just the characters ``` '(', ')', '{', '}', '[' and ']' ```, determine if the input string is valid.

An input string is valid if:

* Open brackets must be closed by the same type of brackets.
* Open brackets must be closed in the correct order.
* Every close bracket has a corresponding open bracket of the same type.


## My Solution Explanation 
- Check if the bracket is open --> add the close bracket of that type to stack.
- if the bracket is close --> compare to last stack element which are are close brackets. 
- Stack ensure the right order of the brackets.
- I can enhance my solution by eleminating the `includes()` method and hard code the options.

- Ps. Python solution is faster compared to JavaScript although I tried to implement the same idea.
## Time complexity

    O(n)

## Space complexity

    O(n)    

## Other Solutions
- **[Solution 1](https://leetcode.com/problems/valid-parentheses/solutions/4120796/beats-100-o-n-solution-with-100-acceptance-rate-with-easy-and-detailed-explanation/):**\
The idea is similar to my approach without include method but more efficient.


## Follow me 
Let's connect to share knowledge and journey 🚀

[Twitter](https://twitter.com/abdelhai_jamal)
[Linkedin](https://www.linkedin.com/in/abdelhai95/)
[Personal Website](https://abdelhaijamal.com/)