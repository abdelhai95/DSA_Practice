function longestCommonPrefix(arr) {
    let firstElement = arr[0];
    let j = 1;
    while(firstElement && j < arr.length) {
            if(! arr[j].startsWith(firstElement)) {
                firstElement = firstElement.slice(0, -1);
            }
            else {
                longestPrefix = firstElement;
                j++
            }
    }
    return firstElement;
}

longestCommonPrefix(["dog","racecar","car"]);