let count = localStorage.getItem("count") || 0;
document.getElementById("count").textContent = count;

function getWeather() {
  const city = document.getElementById("city").value;
  if (!city) return;

  if (!navigator.onLine) {
    document.getElementById("status").textContent = "⚠️ Offline mode";
    return;
  }

  count++;
  localStorage.setItem("count", count);
  document.getElementById("count").textContent = count;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=YOUR_API_KEY`)
    .then(res => res.json())
    .then(data => showWeather(data))
    .catch(() => {
      document.getElementById("status").textContent = "Error fetching data";
    });
}

function showWeather(data) {
  document.getElementById("card").classList.remove("hidden");

  const temp = data.main.temp;
  const feels = data.main.feels_like;
  const condition = data.weather[0].main;

  document.getElementById("location").textContent =
    data.name + ", " + data.sys.country;

  document.getElementById("temp").textContent = temp + "°C";
  document.getElementById("feels").textContent =
    feels > temp ? "Feels hotter than actual 🌡️" : "Feels cooler ❄️";

  setMood(condition, temp);
}

function setMood(condition, temp) {
  let mood = "";
  let alert = "";
  let bg = "";

  if (condition === "Clear") {
    mood = "😄 Sunny mood";
    alert = "Stay hydrated ☀️";
    bg = "sunny";
  } else if (condition === "Rain") {
    mood = "😔 Calm rainy mood";
    alert = "Carry umbrella 🌧️";
    bg = "rainy";
  } else if (temp < 15) {
    mood = "🥶 Cold lazy mood";
    alert = "Wear warm clothes ❄️";
    bg = "cold";
  }

  document.body.className = bg;
  document.getElementById("mood").textContent = mood;
  document.getElementById("alert").textContent = alert;
}
