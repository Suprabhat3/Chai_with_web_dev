const cal_tip = document.getElementById("Cal_tip")
const total_tip = document.getElementById("Total_tip")
const Per_person_tip = document.getElementById("Tip_per_person")

cal_tip.addEventListener("click", function () {
  const bil_amount = parseFloat(document.getElementById("Bil_Amount").value);
  const tip_per = parseFloat(document.getElementById("Tip_percentage").value);
  const no_people = parseInt(document.getElementById("no_people").value);

  if (isNaN(bil_amount) || isNaN(tip_per) || isNaN(no_people) || no_people <= 0) {
      alert("Please enter valid numbers!");
      return;
  }
  const totalTip = bil_amount * (tip_per / 100);
  const perPersonTip = totalTip / no_people;

  total_tip.innerText = `Total tip is : ${totalTip.toFixed(2)}₹`;
  Per_person_tip.innerText = `Tip per person is : ${perPersonTip.toFixed(2)}₹`;
});

