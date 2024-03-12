function hasOdd(numbers) {
    for (let i = 0; $i < numbers.length; $i++) {
        // numbersだけでは配列そのものを表すが、配列の長さを取得することはできない
        //
        if (numbers[i] % 2 !== 0) {
            return "true";
        }
        return "false";
    }
}
