document.getElementById("formatButton").addEventListener("click", formatValue);

function formatValue() {
  var valueInput = document.getElementById("valueInput").value;
  var isNepaliUnits = document.getElementById("nepaliUnits").checked;

  // Check if the input value is a valid number
  if (isNaN(valueInput) || valueInput === "") {
    alert("Please enter a valid numerical value.");
    return;
  }

  // Convert the input value to a floating-point number
  var value = parseFloat(valueInput);

  // Format the value based on the selected units
  var formattedValue;
  if (isNepaliUnits) {
    formattedValue = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "NPR"
    }).format(value);
  } else {
    formattedValue = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(value);
  }

  // Display the formatted value
  document.getElementById("formattedValue").textContent = "Formatted value: " + formattedValue;
}
