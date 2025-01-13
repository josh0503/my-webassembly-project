document.getElementById('convertButton').addEventListener('click', convert);

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
    document.getElementById('binaryResult').textContent = "Binary: " + binary;
    document.getElementById('octalResult').textContent = "Octal: " + "0" + octal;
    document.getElementById('hexResult').textContent = "Hexadecimal: " + "0x" + hexadecimal;
}
