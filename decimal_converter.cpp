#include <iostream>
#include <string>
#include <algorithm> // For reverse
#include <cmath>     // For pow
using namespace std;

// Convert decimal number to binary
string decimalToBinary(int decimal) {
    string binary = "";
    while (decimal > 0) {
        binary = to_string(decimal % 2) + binary; // Append the remainder to the front
        decimal /= 2;
    }
    return binary.empty() ? "0" : binary; // If input is 0, return "0"
}

// Convert binary string to octal string
string BinaryToOctal(const string& binary) {
    string paddedBinary = binary;
    // Pad binary string to make its length a multiple of 3
    while (paddedBinary.length() % 3 != 0) {
        paddedBinary = "0" + paddedBinary;
    }

    string octal = "";
    for (size_t i = 0; i < paddedBinary.length(); i += 3) {
        // Take every 3 bits and convert to octal
        string triplet = paddedBinary.substr(i, 3);
        int value = (triplet[0] - '0') * 4 + (triplet[1] - '0') * 2 + (triplet[2] - '0') * 1;
        octal += to_string(value);
    }
    return octal;
}

// Convert binary string to hexadecimal string
string BinaryToHexadecimal(const string& binary) {
    string paddedBinary = binary;
    // Pad binary string to make its length a multiple of 4
    while (paddedBinary.length() % 4 != 0) {
        paddedBinary = "0" + paddedBinary;
    }

    string hexadecimal = "";
    for (size_t i = 0; i < paddedBinary.length(); i += 4) {
        // Take every 4 bits and convert to hexadecimal
        string quartet = paddedBinary.substr(i, 4);
        int value = (quartet[0] - '0') * 8 + (quartet[1] - '0') * 4 + (quartet[2] - '0') * 2 + (quartet[3] - '0') * 1;
        if (value < 10) {
            hexadecimal += to_string(value);
        } else {
            hexadecimal += char('A' + (value - 10)); // Convert to A-F for values 10-15
        }
    }
    return hexadecimal;
}

int main() {
    int decimal;
    cout << "Enter a decimal number: ";
    cin >> decimal;

    string binary = decimalToBinary(decimal);
    cout << "Binary equivalent: " << binary << endl;

    string octal = BinaryToOctal(binary);
    cout << "Octal equivalent: " << octal << endl;

    string hexadecimal = BinaryToHexadecimal(binary);
    cout << "Hexadecimal equivalent: " << hexadecimal << endl;

    return 0;
}
