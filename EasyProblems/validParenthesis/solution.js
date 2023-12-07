function isValid(s) {

    const valid = {
        '(':  ')',
        '{' : '}',
        '[' : ']'
    };

    let stack = [];
    
    if(s.length % 2 !== 0) return false;

    for (let i = 0; i < s.length; i++) {
        if(Object.keys(valid).includes(s[i])) stack.push(valid[s[i]]);
        else if (stack.pop() !== s[i]) {
            console.log('failed')
            return false;
        };
        
    };
    if(stack.length) return false 
    else return true;     
}



