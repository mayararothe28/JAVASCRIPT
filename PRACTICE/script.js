function calculate() {
  let num1 = Number (document.getElementById("num1").value);
  let num2=Number  (document.getElementById("num2").value);
  let operator = document.getElementById("operator").value;

  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;

    case "-":
      result = num1 - num2;
      break;

    case "*":
      result = num1 * num2;
      break;

    case "/":
      if (num2 == 0) {
        result = "cannot dived by 0";
      } else result = num1 / num2;
      break;
  }

  document.getElementById("result").value =result;
}
