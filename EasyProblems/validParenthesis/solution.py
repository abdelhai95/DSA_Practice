def isValid(s):
    open_brackets = {
        '(':  ')',
        '{' : '}',
        '[' : ']'
    }
    stack = []

    if len(s) % 2 != 0:
        return False
    
    for bracket in s:
        
        if bracket in open_brackets.keys():
            stack.append(open_brackets[bracket])
        elif not stack or stack.pop() != bracket:
            return False
            
    return not stack   
