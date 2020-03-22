
// You should implement your task here.

  
module.exports = function towelSort(matrix) {
  let sortedTowel = [];
  
	if (!matrix) {
    return sortedTowel;
  } 
	for (let i = 0; i < matrix.length; i++) {
		if (i % 2 == 0) {
      sortedTowel.push(...matrix[i]);
    } 
		else {
      sortedTowel.push(...matrix[i].reverse());
    }
	}
	return sortedTowel;
};