const url = "../js/data.json";

const days = document.querySelectorAll(".bar_day");
const amounts = document.querySelectorAll(".bar_amount");
const bars = document.querySelectorAll(".bar");

async function Datajson() {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);

  days.forEach((element, i) => {
    element.innerHTML = data[i].day;
  });

  amounts.forEach((element, i) => {
    element.innerHTML = `$${data[i].amount}`;
  });
}

for (let i = 0; i < bars.length; i++) {
  for (let j = 0; j < amounts.length; j++) {
    bars[i].addEventListener("mouseenter", () => {
      amounts[i].classList.remove("inactive");
    });
    bars[i].addEventListener("mouseleave", () => {
      amounts[i].classList.add("inactive");
    });
  }
}

Datajson();
