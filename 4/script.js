function convertToWord() {
    const numberInput = document.getElementById('numberInput').value;
    const resultElement = document.getElementById('result');
  
    // Define word representations for numbers 0 to 19
    const numbersToWords = [
      'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
      'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
    ];
  
    // Define word representations for tens from 20 to 90
    const tensToWords = [
      '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
    ];
  
    if (numberInput >= 0 && numberInput < 20) {
      // Numbers 0 to 19
      resultElement.textContent = numbersToWords[numberInput];
    } else if (numberInput >= 20 && numberInput < 100) {
      // Numbers from 20 to 99
      const tens = Math.floor(numberInput / 10);
      const ones = numberInput % 10;
      resultElement.textContent = tensToWords[tens] + (ones !== 0 ? '-' + numbersToWords[ones] : '');
    } else {
      resultElement.textContent = 'Number out of range. Please enter a number between 0 and 99.';
    }
  }
  