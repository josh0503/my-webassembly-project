function convert() {
  // Get the input value
  const decimal = parseInt(document.getElementById('decimalInput').value);

  // Check if input is valid
  if (isNaN(decimal)) {
      alert("Please enter a valid decimal number.");
      return;
  }

  // Perform conversions
  const binary = decimal.toString(2);
  const octal = decimal.toString(8);
  const hexadecimal = decimal.toString(16).toUpperCase();

  // Display results
  document.getElementById('binaryResult').textContent = "Binary: " + binary;
  document.getElementById('octalResult').textContent = "Octal: " + octal;
  document.getElementById('hexResult').textContent = "Hexadecimal: " + hexadecimal;
}
