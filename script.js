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
      category = "體重過輕(Underweight)";
  } else if (bmi < 24) {
      category = "正常(Normal)";
  } else if (bmi < 27) {
      category = "過重(Overweight)";
  } else if (bmi < 30) {
      category = "輕度肥胖(Obese-mild)";
  } else if (bmi < 35) {
      category = "中度肥胖(Obese-moderate)";
  } else {
      category = "重度肥胖(Obese-severe)";
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
document.addEventListener("DOMContentLoaded", () => {
  updateChart("NVDA"); // 預設顯示 Apple (AAPL) 的圖表
});
function updateChart(symbol) {
  const widgetContainer = document.getElementById("tradingview-widget");
  widgetContainer.innerHTML = ""; // 清除舊圖表

  // 新增 TradingView 圖表
  new TradingView.widget({
    container_id: "tradingview-widget",
    width: "90%",
    height: "700",
    symbol: symbol,
    interval: "D", // 日線
    timezone: "Asia/Taipei",
    theme: "dark",
    style: "1", // K線圖樣式
    toolbar_bg: "#f1f3f6",
    withdateranges: true,
    allow_symbol_change: true,
    studies: [
      "BB@tv-basicstudies",           // 布林通道
      "RSI@tv-basicstudies",          // RSI
      "PPO@tv-basicstudies",          // 乖離率 (Percentage Price Oscillator)
      "Volume@tv-basicstudies"        // 成交量
  ],
    locale: "zh_TW",
  });
}
// <!-------------------------------------------------------------------------------------------------------->
// Note
document.addEventListener("DOMContentLoaded", () => {
  // 初始化 Quill 編輯器
  const quill = new Quill("#editor-container", {
    theme: "snow",
    modules: {
      toolbar: [
        ["bold", "italic", "underline"], // 粗體、斜體、下劃線
        ["code-block"],                 // 程式碼塊
        [{ list: "ordered" }, { list: "bullet" }], // 有序/無序列表
        ["link"],                       // 插入連結
      ],
    },
  });

  const saveNoteButton = document.getElementById("saveNoteButton");
  const clearNoteButton = document.getElementById("clearNoteButton");
  const previewContainer = document.getElementById("preview-container");

  // 保存筆記
  saveNoteButton.addEventListener("click", () => {
    const noteContent = quill.root.innerHTML; // 獲取編輯器的 HTML 內容
    localStorage.setItem("noteContent", noteContent); // 存入 LocalStorage
    previewContainer.innerHTML = noteContent; // 顯示在預覽區
    alert("筆記已保存！");
  });

  // 清除筆記
  clearNoteButton.addEventListener("click", () => {
    quill.root.innerHTML = ""; // 清空編輯器內容
    previewContainer.innerHTML = ""; // 清空預覽區
    localStorage.removeItem("noteContent"); // 從 LocalStorage 移除
    alert("筆記已清除！");
  });

  // 頁面加載時載入已保存的筆記
  const savedNote = localStorage.getItem("noteContent");
  if (savedNote) {
    quill.root.innerHTML = savedNote;
    previewContainer.innerHTML = savedNote;
  }
});


// <!-------------------------------------------------------------------------------------------------------->
// <!-------------------------------------------------------------------------------------------------------->
// <!-------------------------------------------------------------------------------------------------------->
// <!-------------------------------------------------------------------------------------------------------->
// <!-------------------------------------------------------------------------------------------------------->