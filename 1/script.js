function checkAnagram() {
    const string1 = document.getElementById('string1').value.toLowerCase().replace(/\s/g, '');
    const string2 = document.getElementById('string2').value.toLowerCase().replace(/\s/g, '');
  
    const sortedString1 = string1.split('').sort().join('');
    const sortedString2 = string2.split('').sort().join('');
  
    if (sortedString1 === sortedString2) {
      document.getElementById('result').innerText = 'The strings are anagrams.';
    } else {
      document.getElementById('result').innerText = 'The strings are not anagrams.';
    }
  }
  