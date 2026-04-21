function toggleMenu(header) {

  const section = header.parentElement.querySelector(".submenu");

  document.querySelectorAll(".submenu").forEach(menu => {
    if (menu !== section) {
      menu.classList.remove("open");
    }
  });

  section.classList.toggle("open");
}


function showContent(key, btn) {
  document.querySelectorAll(".item button").forEach(button => {
    button.classList.remove("active");
  });

  if (btn) btn.classList.add("active");

  const content = document.getElementById("content");

  content.innerHTML = `<p>Loading...</p>`;

  setTimeout(() => {

    const parts = key.split("-");

    const main = parts[0];
    const sub = parts[1];  
    const section = data[main];
    const result = section ? section[sub] : null;
 content.innerHTML = result || "<h2>Not Found</h2>";
  }, 300);
}


const data = {
  nutrition: {
  basics: `
    <h2>Nutrition Basics</h2>
    <img src="Building Balanced Diet.jpeg" class="content-img">
    <p>Food is the foundation of energy and body repair.</p>
    <p>Macronutrients: Carbs, Proteins, Fats</p>
    <p>Micronutrients: Vitamins & Minerals</p>
    <p>💡 Eat real food, not processed substitutes.</p>
  `,
  facts: `
    <h2>Nutrition Facts</h2>
    <img src="Building Balanced Diet.jpeg" class="content-img" id="Nfact">
    <p>• Protein repairs tissues</p>
    <p>• Fats support hormones</p>
    <p>• Fiber improves digestion</p>
    <p>💡 Your gut affects your mood.</p>
  `
},
  exercise: {
  types: `
    <u><h2>Exercise Types</h2></u>
    <img src="runner.jpeg" class="content-img" id="run">
    <p>🏋️ Strength builds muscle</p>
    <p>🏃 Cardio improves heart health</p>
    <p>🧘 Flexibility improves mobility</p>
  `,
  routines: `
    <u><h2>Training Routines</h2></u>
    <img src="success path.jpeg" class="content-img" id="TRoutine">
    <p>✔ 3–5 workouts weekly</p>
    <p>✔ Mix strength + cardio</p>
    <p>✔ Stretch after workouts</p>
  `
},
hydration: {
  basics: `
    <u><h2>Hydration Basics</h2></u>
    <img src="Hydration.jpeg" class="content-img" id="Hbasic">
    <p>Water is essential for every body function.</p>
    <p>✔ Energy, focus, digestion</p>
    <p>💡 Even 2% dehydration reduces performance</p>
  `,
  tips: `
    <u><h2>Hydration Tips</h2></u>
    <img src="hydationmotiv.jpeg" class="content-img" id="Htips">
    <p>• Drink water before you feel thirsty</p>
    <p>• Start your morning with water</p>
    <p>• Increase intake during exercise</p>
  `
},
  daily_routine: {
    habits: `
      <u><h2>Daily Routine</h2></u>
      <p>Your day structure affects your life outcome.</p>
      <p>✔ Morning routine = better productivity</p>
      <p>💡 Small habits repeated = big results</p>
    `,
    balance: `
      <u><h2>Life Balance</h2></u>
      <p>Balance work, rest, and health.</p>
      <p>• Avoid overworking</p>
      <p>• Take breaks often</p>
    `
  }
};
