
🌦️ Smart Weather Engine
Task 10 – Consume a Public API Using Fetch API

A next-generation weather application built using HTML, CSS, and JavaScript Fetch API.
Unlike basic weather apps, this project converts weather data into human-centric insights such as mood detection, safety alerts, offline handling, and dynamic UI changes.
live link :  https://ankita292006.github.io/weather_task-_10/
🚀 Project Highlights

🌍 Fetches real-time weather data from a public API

🧠 Converts weather into human mood & alerts

🎨 Dynamic background changes based on weather condition

📡 Offline detection with graceful handling

🔁 API request counter using LocalStorage

⚠️ Weather-based safety suggestions

🧩 Clean UI with meaningful logic (not just data display)

🛠️ Technologies Used

HTML5 – Structure

CSS3 – Styling & dynamic backgrounds

JavaScript (ES6) – Logic & DOM manipulation

Fetch API – API consumption

OpenWeatherMap API – Public weather data

📂 Project Structure
weather-pro/
│── index.html
│── style.css
│── script.js
│── README.md

⚙️ Features Explained
🌤️ Weather → Mood Engine

Weather conditions are converted into human moods:

☀️ Clear → 😄 Happy

🌧️ Rain → 😔 Calm

❄️ Cold → 🥶 Lazy

🎨 Dynamic Background

Background theme automatically changes according to weather:

Sunny → Bright gradient

Rainy → Dark cloudy gradient

Cold → Frosty cool colors

⚠️ Weather Safety Alerts

Smart suggestions based on weather:

High temperature → Stay hydrated

Rain → Carry umbrella

Cold → Wear warm clothes

📡 Offline Mode Handling

Detects internet disconnection

Stops API calls safely

Displays offline status to the user

🔁 API Request Counter

Tracks how many times weather data is fetched using LocalStorage, demonstrating real-world API usage awareness.

▶️ How to Run the Project

Download or clone this repository

Open index.html in any modern browser

Enter a city name

Click Get Weather

View weather, mood, alerts, and UI changes

🔑 API Configuration

This project uses OpenWeatherMap API.

Replace this line in script.js:

appid=YOUR_API_KEY


with your own API key from:
👉 https://openweathermap.org/api

🧪 Testing & Error Handling

Handles invalid city names

Gracefully manages network failures

Uses .catch() for fetch errors

Works smoothly across browsers

🎯 Learning Outcomes

Understanding Fetch API & asynchronous JavaScript

Handling real-world API responses

DOM manipulation using fetched data

Error handling & offline detection

Improving UX using logic instead of raw data

🏆 Why This Project is Different

Most weather apps only show temperature.
This project focuses on user experience, intelligence, and logic, making it stand out from typical Task-10 submissions.

📌 Author

Ankita Negalur
Web Development – Task 10 Project
