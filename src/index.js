module.exports = function solveEquation(equation) {
  var answer = [],
  D,
  eq = equation.split("^2").join("").split(" * x "); //split the equation into parts without "x" and "^2"
  for (let i = 0; i < eq.length; i++) {
    eq[i] = eq[i].split("");
    for (let g = 0; g < eq[i].length; g++) {
      if (eq[i][g] == " ") { //delete gaps in array
        eq[i].splice(g, 1);
      }
    }
    eq[i] = eq[i].join("");
  } //after the above actions, we have an array with values a, b, c from the quadratic equation
  D = +eq[1] * +eq[1] - 4 * +eq[0] * +eq[2]; //discriminant
  if (D > 0) {
    answer[0] = (+-eq[1] + Math.round(Math.sqrt(Math.pow(+eq[1], 2) - 4 * +eq[0] * +eq[2]))) / (2 * +eq[0]);
    answer[1] = (+-eq[1] - Math.round(Math.sqrt(Math.pow(+eq[1], 2) - 4 * +eq[0] * +eq[2]))) / (2 * +eq[0]);
  }
  answer.sort(function (a,b) {return a-b;});
  return answer;
}
