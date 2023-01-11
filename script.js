// //SELECT ELEMEMTS
// const inputElement = document.querySelector(".input");
// const outputOperationElement = document.querySelector(".operation.value");
// const outputResultElement = document.querySelector(".result.value");
// //some variables
// const OPERATORS = ["+", "-", "*", "/"];
// const POWER = "POWER(",
//   FACTORIAL = "FACTORIAL";
// let data = {
//   operation: [],
//   formula: [],
// };

// let calculator_butns = [
//   {
//     name: "Rad",
//     symbol: "rad",
//     formula: false,
//     type: "operator",
//   },
//   {
//     name: "deg",
//     symbol: "deg",
//     formula: false,
//     type: "operator",
//   },
//   {
//     name: "square-root",
//     symbol: "√",
//     formula: "Math.sqrt",
//     type: "math_function",
//   },
//   {
//     name: "square",
//     symbol: "x²",
//     formula: POWER,
//     type: "math_function",
//   },
//   {
//     name: "open-parenthesis",
//     symbol: "(",
//     formula: "(",
//     type: "number",
//   },
//   {
//     name: "close-parenthesis",
//     symbol: ")",
//     formula: ")",
//     type: "number",
//   },
//   {
//     name: "clear",
//     symbol: "C",
//     formula: false,
//     type: "key",
//   },
//   {
//     name: "delete",
//     symbol: "⌫",
//     formula: false,
//     type: "key",
//   },
//   {
//     name: "pi",
//     symbol: "π",
//     formula: "Math.PI",
//     type: "number",
//   },
//   {
//     name: "cos",
//     symbol: "cos",
//     formula: "trigo(Math.cos,",
//     type: "trigo_function",
//   },
//   {
//     name: "sin",
//     symbol: "sin",
//     formula: "trigo(Math.sin,",
//     type: "trigo_function",
//   },
//   {
//     name: "tan",
//     symbol: "tan",
//     formula: "trigo(Math.tan,",
//     type: "trigo_function",
//   },
//   {
//     name: "7",
//     symbol: 7,
//     formula: 7,
//     type: "number",
//   },
//   {
//     name: "8",
//     symbol: 8,
//     formula: 8,
//     type: "number",
//   },
//   {
//     name: "9",
//     symbol: 9,
//     formula: 9,
//     type: "number",
//   },
//   {
//     name: "division",
//     symbol: "÷",
//     formula: "/",
//     type: "operator",
//   },
//   {
//     name: "e",
//     symbol: "e",
//     formula: "Math.E",
//     type: "number",
//   },
//   {
//     name: "acos",
//     symbol: "acos",
//     formula: "inv_trigo(Math.acos,",
//     type: "trigo_function",
//   },
//   {
//     name: "asin",
//     symbol: "asin",
//     formula: "inv_trigo(Math.asin,",
//     type: "trigo_function",
//   },
//   {
//     name: "atan",
//     symbol: "atan",
//     formula: "inv_trigo(Math.atan,",
//     type: "trigo_function",
//   },
//   {
//     name: "4",
//     symbol: 4,
//     formula: 4,
//     type: "number",
//   },
//   {
//     name: "5",
//     symbol: 5,
//     formula: 5,
//     type: "number",
//   },
//   {
//     name: "6",
//     symbol: 6,
//     formula: 6,
//     type: "number",
//   },
//   {
//     name: "multiplication",
//     symbol: "×",
//     formula: "*",
//     type: "operator",
//   },
//   {
//     name: "factorial",
//     symbol: "×!",
//     formula: FACTORIAL,
//     type: "math_function",
//   },
//   {
//     name: "exp",
//     symbol: "exp",
//     formula: "Math.exp",
//     type: "math_function",
//   },
//   {
//     name: "ln",
//     symbol: "ln",
//     formula: "Math.log",
//     type: "math_function",
//   },
//   {
//     name: "log",
//     symbol: "log",
//     formula: "Math.log10",
//     type: "math_function",
//   },
//   {
//     name: "1",
//     symbol: 1,
//     formula: 1,
//     type: "number",
//   },
//   {
//     name: "2",
//     symbol: 2,
//     formula: 2,
//     type: "number",
//   },
//   {
//     name: "3",
//     symbol: 3,
//     formula: 3,
//     type: "number",
//   },
//   {
//     name: "subtraction",
//     symbol: "–",
//     formula: "-",
//     type: "operator",
//   },
//   {
//     name: "power",
//     symbol: "x<span>y</span>",
//     formula: POWER,
//     type: "math_function",
//   },
//   {
//     name: "ANS",
//     symbol: "ANS",
//     formula: "ans",
//     type: "number",
//   },
//   {
//     name: "percent",
//     symbol: "%",
//     formula: "/100",
//     type: "number",
//   },
//   {
//     name: "point",
//     symbol: ".",
//     formula: ".",
//     type: "number",
//   },
//   {
//     name: "0",
//     symbol: 0,
//     formula: 0,
//     type: "number",
//   },
//   {
//     name: "calculate",
//     symbol: "=",
//     formula: "=",
//     type: "calculate",
//   },
//   {
//     name: "addition",
//     symbol: "+",
//     formula: "+",
//     type: "operator",
//   },
// ];
// //CREATE CALCULATOR BTNS
// function createCalculatorButtons() {
//   const buttons_per_row = 5;
//   let added_buttons = 0;

//   calculator_butns.forEach((button) => {
//     if (added_buttons % buttons_per_row == 0) {
//       inputElement.innerHTML + -`<div class = "row"></div>`;
//     }
//     const row = document.querySelector(".row:last-child");
//     row.innerHTML + -`<button id = "${button.name}"> ${button.symbol}</button>`;
//     added_buttons++;
//   });
// }
// createCalculatorButtons();
// //rad and deg
// let RADIAN = true;
// const rad_btn = document.getElementById("rad");
// const deg_btn = document.getElementById("deg");
// rad_btn.classList.add("active-angle");
// function angleToggler() {
//   rad_btn.classList.toggle("active-angle");
//   deg_btn.classList.toggle("active-angle");
// }
// // click event listener
// inputElement.addEventListener("click", (event) => {
//   const target_btns = event.target;
//   calculator_butns.forEach((button) => {
//     if (button.name == target_btns.id) calculator(button);
//   });
// });
// // calculator
// function calculator(button) {
//   if (button.type == "operator") {
//     data.operation.push(button.symbol);
//     data.formula.push(button.formula);
//   } else if (button.type == "number") {
//     data.operation.push(button.symbol);
//     data.formula.push(button.formula);
//   } else if (button.type == "trigo_function") {
//     data.operation.push(button.symbol + "(");
//     data.operation.push(button.formula);
//   } else if (button.type == "math_function") {
//     let symbol, formula;
//     if (button.name == "factorial") {
//       symbol = "!";
//       formula = button.formula;
//       data.operation.push(symbol);
//       data.operation.push(formula);
//     } else if (button.name == "power") {
//       symbol = "^(";
//       formula = button.formula;
//       data.operation.push(symbol);
//       data.operation.push(formula);
//     } else if (button.name == "square") {
//       symbol = "^(";
//       formula = button.formula;
//       data.operation.push("2)");
//       data.operation.push("2)");
//     } else {
//       symbol = button.symbol + "(";
//       formula = button.formula + "(";
//       data.operation.push(symbol);
//       data.operation.push(formula);
//     }
//   } else if (button.type == "key") {
//     if (button.name == "clear") {
//       data.operation = [];
//       data.formula = [];
//       updateOutputResult(0);
//     } else if (button.name == "delete") {
//       data.operation.pop();
//       data.formula.pop();
//     } else if (button.name == "Rad") {
//       RADIAN = true;
//       angleToggler();
//     } else if (button.name == "deg") {
//       RADIAN = false;
//       angleToggler();
//     }
//   } else if (button.type == "calculate") {
//     formula_str = data.formula.join("");
//     //fic power and factorial issue
//     /* SEARCH FOR FACTORIAL AND POWER FUNCTION */
//     let POWER_SEARCH_RESULT = search(data.formula, POWER);
//     let FACTORIAL_SEARCH_RESULT = search(data.formula, FACTORIAL);
//     /* GET POWER BASES AND REPLACE WITH THE RIGHT FORMULA*/
//     const BASES = PowerBaseGetter(data.formula, POWER_SEARCH_RESULT);
//     BASES.forEach((base) => {
//       let toReplace = base + POWER;
//       let replacement = "Math.pow(" + base + "," + toReplace + ")";
//       formula_str = formula_str.replace(toReplace, replacement);
//     });
//     /* GET FACTORIAL NUMBERS AND REPLACE WITH THE RIGHT FORMULA*/
//     const NUMBERS = factorialNumberGetter(
//       data.formula,
//       FACTORIAL_SEARCH_RESULT
//     );
//     NUMBERS.forEach((factorial) => {
//       formula_str = formula_str.replace(
//         factorial.toReplace,
//         factorial.replacement
//       );
//     });

//     let result;
//     try {
//       result = eval(formula_str);
//     } catch (error) {
//       if (error instanceof SyntaxError) {
//         result = syntaxError;
//         updateOutputResult(result);
//       }
//     }
//     //save result for later use
//     ans = result;
//     data.operation = [result];
//     data.formula = [result];
//     updateOutputResult(result);
//     return;
//   }
//   updateOutputOperation(data.operation.join(""));
// }
// //factorial function getter
// function factorialNumberGetter(formula, FACTORIAL_SEARCH_RESULT) {
//   let numbers = []; //save all the numbers in the array

//   FACTORIAL_SEARCH_RESULT.forEach((factorial_index) => {
//     let number = [];
//     let factorial_sequence = 0;

//     let next_index = factorial_index + 1;
//     let next_input = formula[next_index];
//     if (next_input == FACTORIAL) {
//       factorial_sequence += 1;
//       return;
//     }
//     let first_factorial_index = factorial_index - factorial_sequence;
//     let previous_index = first_factorial_index - 1;
//     let parenthesis_count = 0;
//     while (previous_index >= 0) {
//       if (formula[previous_index] == "(") parenthesis_count--;
//       if (formula[previous_index] == ")") parenthesis_count++;
//       let is_operator = false;
//       OPERATORS.forEach((OPERATOR) => {
//         if (formula[previous_index] == OPERATOR) is_operator = true;
//       });

//       if (is_operator && parenthesis_count == 0) break;
//       number.unshift(formula[previous_index]);
//       previous_index--;
//     }
//     let number_str = number.join(" ");
//     const factorial = "factorial(",
//       close_parenthesis = ")";
//     let times = factorial_sequence + 1;
//     let toReplace = number_str + FACTORIAL.repeat(times);
//     let replacement =
//       FACTORIAL.repeat(times) + number_str + close_parenthesis.repeat(times);

//     numbers.push({
//       toReplace: toReplace,
//       replacement: replacement,
//     });
//     // Reset factorial sequence to zero
//     factorial_sequence = 0;
//   });
//   return numbers;
// }
// //get powerbase
// function PowerBaseGetter(formula, POWER_SEARCH_RESULT) {
//   let power_base = [];

//   POWER_SEARCH_RESULT.forEach((power_index) => {
//     let base = [];
//     let parenthesis_count = 0;
//     let previous_index = power_index - 1;
//     while (previous_index >= 0) {
//       if (formula[previous_index] == "(") parenthesis_count--;
//       if (formula[previous_index] == ")") parenthesis_count++;
//       let is_operator = false;
//       OPERATORS.forEach((OPERATOR) => {
//         if (formula[previous_index] == OPERATOR) is_operator = true;
//       });
//       let is_power = formula[previous_index] == POWER;
//       if ((is_operator && parenthesis_count == 0) || is_power) break;
//       base.unshift(formula[previous_index]);
//       previous_index--;
//     }
//     power_base.push(base.join(""));
//   });
//   return power_base;
// }
// // SEARCH AN ARRAY
// function search(array, keyword) {
//   let searchResult = [];
//   array.forEach((element, index) => {
//     if (element === keyword) searchResult.push(index);
//   });
//   return searchResult;
// }
// //update output
// function updateOutputOperation(operation) {
//   outputOperationElement.innerHTML = operation;
// }
// function updateOutputResult(result) {
//   outputResultElement.innerHTML = result;
// }
// //factorial function
// function factorial(numbers) {
//   if (numbers % 1 != 0) return gamma(number + 1);
//   if (numbers === 0 || numbers === 1) return 1;
//   let result = 1;
//   for (let i = 0; i <= numbers; i++) {
//     result *= i;
//     if (result === Infinity) return Infinity;
//   }
//   return result;
// }
// function gamma(n) {
//   // accurate to about 15 decimal places
//   //some magic constants
//   var g = 7, // g represents the precision desired, p is the values of p[i] to plug into Lanczos' formula
//     p = [
//       0.99999999999980993, 676.5203681218851, -1259.1392167224028,
//       771.32342877765313, -176.61502916214059, 12.507343278686905,
//       -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7,
//     ];
//   if (n < 0.5) {
//     return Math.PI / Math.sin(n * Math.PI) / gamma(1 - n);
//   } else {
//     n--;
//     const x = p[0];
//     for (const i = 1; i < g + 2; i++) {
//       x += p[i] / (n + i);
//     }
//     const t = n + g + 0.5;
//     return Math.sqrt(2 * Math.PI) * Math.pow(t, n + 0.5) * Math.exp(-t) * x;
//   }
// }
// //Trigo function
// function trigo(callback, angle) {
//   if (!RADIAN) {
//     angle = (angle * math.PI) / 180;
//   }
//   return callback(angle);
// }
// function inv_trigo(callback, value) {
//   let angle = callback(value);
//   if (!RADIAN) {
//     angle = (angle * 180) / math.PI;
//   }
//   return angle;
// }

let app = new Vue({
  el: "#app",
  data() {
    return {
      current: "",
      changeMode: true,
    };
  },
  methods: {
    press: function (event) {
      let me = this;
      let key = event.target.textContent;

      if (
        key != "=" &&
        key != "C" &&
        key != "*" &&
        key != "/" &&
        key != "√" &&
        key != "x ²" &&
        key != "%" &&
        key != "<=" &&
        key != "±" &&
        key != "sin" &&
        key != "cos" &&
        key != "tan" &&
        key != "log" &&
        key != "ln" &&
        key != "x^" &&
        key != "x !" &&
        key != "π" &&
        key != "e" &&
        key != "rad" &&
        key != "deg"
      ) {
        me.current += key;
      } else if (key === "=") {
        if (me.current.indexOf("^") > -1) {
          let base = me.current.slice(0, me.current.indexOf("^"));
          let exponent = me.current.slice(me.current.indexOf("^") + 1);
          me.current = eval("Math.pow(" + base + "," + exponent + ")");
        } else {
          me.current = eval(me.current);
        }
      } else if (key === "C") {
        me.current = "";
      } else if (key === "*") {
        me.current += "*";
      } else if (key === "/") {
        me.current += "/";
      } else if (key === "+") {
        me.current += "+";
      } else if (key === "-") {
        me.current += "-";
      } else if (key === "±") {
        if (me.current.charAt(0) === "-") {
          me.current = me.current.slice(1);
        } else {
          me.current = "-" + me.current;
        }
      } else if (key === "<=") {
        me.current = me.current.substring(0, me.current.length - 1);
      } else if (key === "%") {
        me.current = me.current / 100;
      } else if (key === "π") {
        me.current = me.current * Math.PI;
      } else if (key === "x ²") {
        me.current = eval(me.current * me.current);
      } else if (key === "√") {
        me.current = Math.sqrt(me.current);
      } else if (key === "sin") {
        me.current = Math.sin(me.current);
      } else if (key === "cos") {
        me.current = Math.cos(me.current);
      } else if (key === "tan") {
        me.current = Math.tan(me.current);
      } else if (key === "log") {
        me.current = Math.log10(me.current);
      } else if (key === "ln") {
        me.current = Math.log(me.current);
      } else if (key === "x^") {
        me.current += "^";
      } else if (key === "x !") {
        let number = 1;
        if (me.current === 0) {
          me.current = "1";
        } else if (me.current < 0) {
          me.current = NaN;
        } else {
          let number = 1;
          for (let i = me.current; i > 0; i--) {
            number *= i;
          }
          me.current = number;
        }
      } else if (key === "e") {
        me.current = Math.exp(me.current);
      } else if (key === "rad") {
        me.current = me.current * (Math.PI / 180);
      } else if (key === "deg") {
        me.current = me.current * (180 / Math.PI);
      }
    },
    changeModeEvent: function () {
      let me = this;
      me.changeMode = !me.changeMode;
    },
  },
});
