document.getElementById('convertButton').addEventListener('click', convert);
document.getElementById('clearCvt').addEventListener('click', clearCvt);
function convert() {
    const decimal = parseInt(document.getElementById('decimalInput').value);

    // 檢查是否輸入有效的數字
    if (isNaN(decimal)) {
        alert("Please enter a valid decimal number.");
        return;
    }

    // 執行轉換
    const binary = decimal.toString(2);
    const octal = decimal.toString(8);
    const hexadecimal = decimal.toString(16).toUpperCase();

    // 顯示結果
    document.getElementById('binaryResult').textContent = "二進位(Binary) : " + binary;
    document.getElementById('octalResult').textContent = "八進位(Octal) : " + "0" + octal;
    document.getElementById('hexResult').textContent = "十六進位(Hexadecimal) : " + "0x" + hexadecimal;
}
function clearCvt() {
  // Clear input fields
  document.getElementById('decimalInput').value = "";

  // Clear output fields
  document.getElementById('binaryResult').textContent = "二進位(Binary) : ";
  document.getElementById('octalResult').textContent = "八進位(Octal) : ";
  document.getElementById('hexResult').textContent = "十六進位(Hexadecimal) : ";
}
// <!-------------------------------------------------------------------------------------------------------->
function calculateBMI() {
  // Get height and weight input values
  const height = parseFloat(document.getElementById('heightInput').value) / 100; // Convert cm to meters
  const weight = parseFloat(document.getElementById('weightInput').value);

  // Validate inputs
  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      alert("Please enter valid height and weight values.");
      return;
  }

  // Calculate BMI
  const bmi = (weight / (height * height)).toFixed(1);

  // Determine BMI category
  let category = "";
  if (bmi < 18.5) {
      category = "Underweight";
  } else if (bmi < 24) {
      category = "Normal";
  } else if (bmi < 27) {
      category = "Overweight";
  } else if (bmi < 30) {
      category = "Obese (Mild)";
  } else if (bmi < 35) {
      category = "Obese (Moderate)";
  } else {
      category = "Obese (Severe)";
  }

  // Display results
  document.getElementById('bmiResult').textContent = "Your BMI: " + bmi;
  document.getElementById('bmiCategory').textContent = "Category: " + category;
}
function clearBMI() {
  // Clear input fields
  document.getElementById('heightInput').value = "";
  document.getElementById('weightInput').value = "";

  // Clear output fields
  document.getElementById('bmiResult').textContent = "Your BMI: ";
  document.getElementById('bmiCategory').textContent = "Category: ";
}
// <!-------------------------------------------------------------------------------------------------------->
// 初始化 TradingView 圖表
function updateChart() {
  const symbol = document.getElementById("stockSymbol").value || "NASDAQ:AAPL";
  new TradingView.widget({
    container_id: "tradingview-widget",
    symbol: "NASDAQ:AAPL", // 替換為你想分析的股票代碼
    interval: "D",
    timezone: "Asia/Taipei",
    theme: "dark",
    style: "1",
    toolbar_bg: "#f1f3f6",
    withdateranges: true,
    allow_symbol_change: true,
    studies: [
        "BB@tv-basicstudies",    // 布林通道
        "MAExp@tv-basicstudies", // 均線
        "RSI@tv-basicstudies",    // RSI
        "MACD@tv-basicstudies",   // MACD
        "Stochastic@tv-basicstudies", // 隨機指標
        "Volume@tv-basicstudies"  // 成交量
    ],
    locale: "zh_TW"
  });
}