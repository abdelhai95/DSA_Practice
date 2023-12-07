def isValid(s):
    # store open and close brackets to compare them
    open_brackets = {
        '(':  ')',
        '{' : '}',
        '[' : ']'
    }
    stack = []

    # if odd number of brackets terminate 

    if len(s) % 2 != 0:
        return False
    
    for bracket in s:
        if bracket in open_brackets.keys():
            stack.append(open_brackets[bracket])
        elif not stack or stack.pop() != bracket:
            return False
        
    
    return True 

# Example usage:
test1 = "()"
test2 = "()[]{}"
test3 = "[}"
print(isValid(test1))  # Output: True
print(isValid(test2))  # Output: True
print(isValid(test3))  # Output: False
