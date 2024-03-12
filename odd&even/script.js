function getOddEven(num) {
    if (num % 2 == 0) {
        return "even";
    } else {
        return "odd";
    }
}

function checkOddEven(num) {
    const answer = getOddEven(num);
    console.log(answer);
}

checkOddEven(2);
