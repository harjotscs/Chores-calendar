const startDate = new Date("2023-01-01");

const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const tennantNames = ["Harjot", "Kushagr"];
const generateMonthlyCalendar = (currentDate) => {
  console.log(currentDate);
  const monthName = document.getElementById("monthName");
  monthName.innerHTML = `${monthNames[currentDate.getMonth()]}<br />
  <span id="year" style="font-size: 18px">${currentDate.getFullYear()}</span>`;
  const days = document.getElementById("days");
  days.innerHTML = "";
  currentDate.setHours(0, 0, 0, 0);
  startDate.setHours(0, 0, 0, 0);

  for (let i = 0; i < monthDays[currentDate.getMonth()]; i++) {
    const dayNode = document.createElement("li");
    dayNode.setAttribute("class", "days");
    let text = `${i + 1}`;
    if (
      currentDate.getTime() + i * (1000 * 60 * 60 * 24) >=
      startDate.getTime()
    ) {
      const days = Math.floor(
        Math.abs(
          startDate.getTime() -
            currentDate.getTime() +
            i * (1000 * 60 * 60 * 24)
        ) /
          (1000 * 60 * 60 * 24)
      );
      if (i == 0) {
        console.log(
          "dx ",
          days,
          "mod ",
          days % 2,
          "dy ",
          Math.abs(
            startDate.getTime() -
              currentDate.getTime() +
              i * (1000 * 60 * 60 * 24)
          ) /
            (1000 * 60 * 60 * 24)
        );
      }
      text += ` ${days % 2 == 0 ? tennantNames[0] : tennantNames[1]} `;
    } else {
      console.log(
        currentDate.getTime() + i * (1000 * 60 * 60 * 24),
        startDate.getTime(),
        currentDate,
        startDate
      );
    }
    const textnode = document.createTextNode(text);
    dayNode.appendChild(textnode);
    days.appendChild(dayNode);
  }
};

const generateNextMonthlyCalendar = () => {
  presentDate.setMonth(presentDate.getMonth() + 1) &&
    generateMonthlyCalendar(
      new Date(presentDate.getFullYear(), presentDate.getMonth(), 1)
    );
};

let presentDate = new Date();

generateMonthlyCalendar(presentDate);
