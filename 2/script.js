function calculateExpression() {
    const expressionInput = document.getElementById('expression');
    const expressionText = document.getElementById('expressionText');
    const solutionText = document.getElementById('solution');
  
    const expression = expressionInput.value.trim();
    if (!expression) {
      alert('Please enter a valid mathematical expression.');
      return;
    }
  
    try {
      const solution = eval(expression);
      expressionText.innerText = `Expression: ${expression}`;
      solutionText.innerText = `Solution: ${solution}`;
    } catch (error) {
      alert('Invalid mathematical expression. Please try again.');
      console.error(error);
    }
  }
  