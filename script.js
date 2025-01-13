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
    document.getElementById('binaryResult').textContent = "二進位(Binary): " + binary;
    document.getElementById('octalResult').textContent = "八進位(Octal): " + "0" + octal;
    document.getElementById('hexResult').textContent = "十六進位(Hexadecimal): " + "0x" + hexadecimal;
}
