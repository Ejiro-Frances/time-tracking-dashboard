// const titleEl = document.querySelector("h2");
// const currentEl = document.querySelector("h3");
// const previousEl = document.querySelector("p");
// const listEl = document.querySelectorAll("li");
// const dailyEl = document.querySelectorAll(".daily");
// const weeklyEl = document.querySelectorAll(".weekly");

// listEl.forEach((item) => {
//   item.addEventListener("click", () => {
//     const dayEl = document.querySelector(".day");
//     const weekEl = document.querySelector(".week");

//     dailyEl.forEach((el) => el.classList.add("hide"));
//     weeklyEl.forEach((el) => el.classList.add("hide"));
//     monthlyEl.forEach((el) => el.classList.add("hide"));

//     if (item === "dayEl") {
//       dailyEl.forEach((el) => el.classList.remove("hide"));
//     } else if (item === "week") {
//       weeklyEl.forEach((el) => el.classList.remove("hide"));
//     } else if (item.id === "month") {
//       monthlyEl.forEach((el) => el.classList.remove("hide"));
//     }
//   });
// });

// Select all the necessary elements
const listItems = document.querySelectorAll("li");
const dailyElements = document.querySelectorAll(".daily");
const weeklyElements = document.querySelectorAll(".weekly");
const monthlyElements = document.querySelectorAll(".monthly");

// Function to toggle visibility based on selected time period
const updateVisibility = (period) => {
  // Hide all elements initially
  dailyElements.forEach((el) => el.classList.add("hide"));
  weeklyElements.forEach((el) => el.classList.add("hide"));
  monthlyElements.forEach((el) => el.classList.add("hide"));

  // Show only the selected period
  if (period === "day") {
    dailyElements.forEach((el) => el.classList.remove("hide"));
  } else if (period === "week") {
    weeklyElements.forEach((el) => el.classList.remove("hide"));
  } else if (period === "month") {
    monthlyElements.forEach((el) => el.classList.remove("hide"));
  }
};

// Add click event listeners to each list item
listItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Get the class of the clicked item to determine the period
    const period = item.classList[0];
    updateVisibility(period);
  });
});
