var meal_cost = 10.25;
var tip_percent = 17;
var tax_percent = 5;

  var tip = parseFloat(meal_cost * (tip_percent / 100));
  var tax = parseFloat(meal_cost * (tax_percent / 100));
  console.log(meal_cost);
  console.log(tip);
  console.log(tax);
  console.log(parseInt(meal_cost + tip + tax))

  function solve(meal_cost, tip_percent, tax_percent) {
    const tip = meal_cost * tip_percent / 100;
    const tax = meal_cost * tax_percent / 100;

    const total = Math.round(meal_cost + tip + tax)
    console.log(total);
}