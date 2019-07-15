// https://www.hackerrank.com/challenges/compare-the-triplets/problem

// Complete the compareTriplets function below.
var x_person, y_person = 0;
function compareTriplets(a, b) {
    if (a>b) {
        x_person++;
    }
    else if (a < b) {
        y_person++;
    }
    else if (a == b) {
        // no one will get point
    }
    console.log('[' + x_person +' '+ y_person +']');
}
