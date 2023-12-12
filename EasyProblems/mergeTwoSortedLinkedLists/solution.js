function mergeTwoLists(list1, list2) {
    let newList = [];

    if(list1.length === 0 && list2.length > 0) return newList = list2;
    else if(list2.length === 0 && list1.length) return newList = list1;

    if(list1.length === 0 && list2.length === 0) return newList;
    
    let i = 0;
    while(list1.length) {
            if(list1[i] < list2[i]) {
                newList.push(list1[i]);
                list1.splice(i,1)
            }
            else if(list1[i] === list2[i]) {
                newList.push(list1[i]);
                newList.push(list2[i]);
                list1.splice(i,1);
                list2.splice(i,1);
            }
            else {
                newList.push(list2[i]);
                list2.splice(i,1)
            }
            
    }

    if(list2.length) {
        newList.push([...list2])
    }

    return newList;

}


// test 1  list1 = [1,2,4], list2 = [1,3,4]
// test 2 list1 = [], list2 = []
// list1 = [], list2 = [0]
mergeTwoLists([],[0])