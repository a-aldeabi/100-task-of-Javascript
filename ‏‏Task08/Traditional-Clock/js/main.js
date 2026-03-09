// 🕰️ Traditional Clock

// Elements
const HourHand = document.getElementById("Hour-Hand");
const MinuteHand = document.getElementById("Minute-Hand");
const secondHand = document.getElementById("second-Hand");
const display = document.getElementById("display");

// Update clock hands and display
function updateTime() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  // Angles (-90 to start from 12)
  const degHour = (hour % 12) * 30 + minute * 0.5 - 90;
  const degMinute = minute * 6 + second * 0.1 - 90;
  const degSecond = second * 6 - 90;

  // Rotate hands
  HourHand.style.transform = `rotate(${degHour}deg)`;
  MinuteHand.style.transform = `rotate(${degMinute}deg)`;
  secondHand.style.transform = `rotate(${degSecond}deg)`;

  // Digital display
  display.innerHTML = [hour, minute, second]
    .map((t) => t.toString().padStart(2, "0"))
    .join(":");
}

updateTime();
setInterval(updateTime, 1000);
