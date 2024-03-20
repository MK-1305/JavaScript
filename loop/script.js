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
function odd(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            oddNumbers.push(numbers[i]);
        }
    }
    return oddNumbers;
}

console.log(odd([1, 2, 3, 4, 5]));

// 2乗の計算
// function square(numbers) {
//     const squaredNumbers = [];
//     for (let i = 0; i < numbers.length; i++) {
//         squaredNumbers.push(numbers[i] ** 2);
//     }
//     return squaredNumbers;
// }

console.log(square([1, 2, 3, 4, 5]));

const popFruits = ["apple", "banana", "orange"];
// popで末尾の要素を一つ取り出す
const removedFruit = popFruits.pop();
console.log(popFruits); // ['apple', 'banana']
console.log(removedFruit); // 'orange'

const pushFruits = ["apple", "banana"];
// pushで末尾の要素を一つ入れる
const newLength = pushFruits.push("orange");
console.log(pushFruits); // ['apple', 'banana', 'orange']
console.log(newLength); // 3

// 1. データ型とは
// データ型とは、プログラミングにおいて扱うデータの種類を表すものです。例えば、数値、文字列、真偽値などがあります。

// データに「型」があるのは、コンピュータが異なるデータを適切に処理するためです。
// 数値と文字列では、コンピュータ内部での表現方法や操作方法が異なります。
// データ型を指定することで、コンピュータはデータの種類を認識し、適切な方法でメモリを割り当て、演算や操作を行うことができます。

// また、データ型を指定することで、プログラマは意図しない操作を防ぐことができます。
// 例えば、数値型の変数に文字列を代入しようとするとエラーが発生します。これにより、プログラムの誤動作を防ぎ、バグを減らすことができます。

// 2. データ型の種類
// JavaScriptのデータ型には以下の種類があります。

// 1. 数値型（Number）：整数や浮動小数点数を表します。例：1, 3.14, -10

// 2. 文字列型（String）：文字の並びを表します。シングルクォートまたはダブルクォートで囲みます。例：'Hello', "JavaScript"

// 3. 真偽値型（Boolean）：trueまたはfalseの2つの値を取ります。条件分岐などで使用されます。

// 4. undefined型：変数が宣言されているが、値が代入されていない状態を表します。

// 5. null型：変数が意図的に何も参照していないことを表します。

// 6. シンボル型（Symbol）：ES2015で追加された一意で不変な値を表します。

// 7. オブジェクト型（Object）：複数のデータをまとめて扱うことができる型です。配列、関数、日付など、様々なオブジェクトがあります。

// これらのデータ型を理解し、適切に使い分けることがプログラミングにおいて重要です。
