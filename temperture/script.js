// function checkTemperature(tmp) {
//   if (tmp >= 30) {
//     console.log("HOT");
//   } else if (tmp < 30 && tmp >= 15) {
//     console.log("Warm");
//   } else {
//     console.log("Cold");
//   }
// }

function getTemperatureCategory(temperature) {
  if (temperature >= 30) {
    return "HOT";
  } else if (temperature >= 15) {
    // 15以上の時点で30以下なのは決まってるため
    return "Warm";
  } else {
    return "Cold";
  }
}

function checkTemperature(temperature) {
  const category = getTemperatureCategory(temperature);
  console.log(category);
}

// getTemperatureCategory 関数は温度のカテゴリを判定するための独立した関数として抽出されているため、他の場所でも使用することができます。
// また、checkTemperature 関数は getTemperatureCategory 関数を呼び出して結果を出力するという単一の責任を持っています。

checkTemperature(30);
checkTemperature(20);
checkTemperature(8);
