
const test1 = "()[]{}";
const test2 = "()";
const test3 = '(]'


function isValid(s) {

    const valid = {
        '(': ')',
        '{' : '}',
        '[' : ']'
    }

    for(let i = 0; i <= s.length - 2; i+=2) {
        let j = i + 1;

        if(valid[s[i]] !== s[j]) return false;    
    }

    return true;
}


isValid(test1);
