function isVaild(start, end) {
    return start <= end && start > 0 && end < 1000;
}

function getTableString(start, end) {
    var result = "";
    for (let i = start; i <= end; i++) {
        for (let j = start; j <= i; j++) {
            if (j == i) {
                result += j + "*" + i + "=" + i * j;
            } else {
                result += j + "*" + i + "=" + i * j + "\t";
            }
        }
        result += "\n";
    }
    return result;
}

function createMultiplicationTable(start,end) {

    if(isVaild(start, end)){
		var result = getTableString(start, end);

		return result;
        
    }
	return null;
    
}
module.exports = createMultiplicationTable;