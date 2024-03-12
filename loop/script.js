// 奇数が含まれるかの判定
// function hasOdd(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         // numbersだけでは配列そのものを表すが、配列の長さを取得することはできない
//         // 配列の要素の数だけforで処理を実行する
//         if (numbers[i] % 2 !== 0) {
//             return true;
//         }
//         return false;
//     }
// }

// console.log(hasOdd([1, 2, 3, 4, 5]));

// 奇数の抽出
// function odd(numbers) {
//     const oddNumbers = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 !== 0) {
//             oddNumbers.push(numbers[i]);
//         }
//     }
//     return oddNumbers;
// }

// console.log(odd([1, 2, 3, 4, 5]));

// 2乗の計算
function square(numbers) {
    const squaredNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        squaredNumbers.push(numbers[i] ** 2);
    }
    return squaredNumbers;
}

console.log(square([1, 2, 3, 4, 5]));
