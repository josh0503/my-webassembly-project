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
// function updateChart() {
//   const symbol = document.getElementById("stockSymbol").value || "2330.TW";
//   new TradingView.widget({
//     container_id: "tradingview-widget",
//     width: "100%", // 圖表寬度設定為全寬
//     height: 600,   // 增加圖表高度
//     symbol: symbol, // 使用動態輸入的股票代碼
//     interval: "D",  // K 線時間間隔為日線
//     timezone: "Asia/Taipei",
//     theme: "dark",  // 深色主題
//     style: "1",     // K 線圖樣式
//     toolbar_bg: "#f1f3f6",
//     withdateranges: true,
//     allow_symbol_change: true,
//     studies: [
//         "BB@tv-basicstudies",    // 布林通道
//         "MAExp@tv-basicstudies", // 均線
//         "RSI@tv-basicstudies",   // RSI
//         "MACD@tv-basicstudies",  // MACD
//         "Stochastic@tv-basicstudies", // 隨機指標
//         "Volume@tv-basicstudies"  // 成交量
//     ],
//     locale: "zh_TW" // 繁體中文介面
//   });
// }

// // 預設股票代碼選擇
// function selectStock(stock) {
//   document.getElementById("stockSymbol").value = stock;
//   updateChart();
// }

// 替換為您的 Alpha Vantage API 金鑰
const API_KEY = "YOUR_ALPHA_VANTAGE_API_KEY";

// 使用 Alpha Vantage API 獲取股票資料
async function fetchStockData(symbol) {
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data["Error Message"] || !data["Time Series (Daily)"]) {
      alert("無法獲取股票資料，請確認代碼是否正確或稍後再試。");
      return null;
    }
    return data;
  } catch (error) {
    console.error("Error fetching stock data:", error);
    alert("無法獲取股票資料，請檢查網路連線。");
    return null;
  }
}

// 顯示股票資料在圖表
async function updateChart() {
  const symbol = document.getElementById("stockSymbol").value || "AAPL";
  const data = await fetchStockData(symbol);

  if (data) {
    const dailyData = data["Time Series (Daily)"];
    const dates = Object.keys(dailyData).reverse();
    const prices = dates.map(date => ({
      date,
      close: parseFloat(dailyData[date]["4. close"]),
    }));

    // 繪製圖表
    renderChart(symbol, prices);
  }
}

// 繪製簡單圖表
function renderChart(symbol, prices) {
  const ctx = document.getElementById("stockChart").getContext("2d");

  const chartData = {
    labels: prices.map(item => item.date),
    datasets: [
      {
        label: `${symbol} Closing Prices`,
        data: prices.map(item => item.close),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  new Chart(ctx, {
    type: "line",
    data: chartData,
    options: {
      responsive: true,
      scales: {
        x: { title: { display: true, text: "Date" } },
        y: { title: { display: true, text: "Closing Price (USD)" } },
      },
    },
  });
}
