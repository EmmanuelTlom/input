$(".options-02 a").click(function () {
  $("form").animate(
    {
      height: "toggle",
      opacity: "toggle",
    },
    "slow"
  );
});

// const opt = document.querySelector(".options-02 a");
// const form = document.querySelector("form");

// opt.addEventListener("click", () => {
//   console.log("hello");
//   form.animate(
//     {
//       height: "toggle",
//       opacity: "toggle",
//     },
//     "slow"
//   );
// });
