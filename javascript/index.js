// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction(
//   "mashedPotatoes",
//   0,
//   (step1) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   1,
//   (step2) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   2,
//   (step3) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   3,
//   (step4) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   4,
//   (step5) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//     document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
//   },
//   (error) => console.log(error)
// );

// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction(
    "mashedPotatoes",
    1,
    (step1) => {
      document.querySelector(
        "#mashedPotatoes"
      ).innerHTML += `<li>${step1}</li>`;

      // Get step 2
      getInstruction(
        "mashedPotatoes",
        2,
        (step2) => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>${step2}</li>`;

          // Get step 3
          getInstruction(
            "mashedPotatoes",
            3,
            (step3) => {
              document.querySelector(
                "#mashedPotatoes"
              ).innerHTML += `<li>${step3}</li>`;

              // Get step 4
              getInstruction(
                "mashedPotatoes",
                4,
                (step4) => {
                  document.querySelector(
                    "#mashedPotatoes"
                  ).innerHTML += `<li>${step4}</li>`;
                  document.querySelector(
                    "#mashedPotatoes"
                  ).innerHTML += `<li>mashed potatoes are ready!</li>`;
                  document
                    .getElementById("mashedPotatoesImg")
                    .removeAttribute("hidden");
                },
                (error) => {
                  console.error(error);
                }
              );
            },
            (error) => {
              console.error(error);
            }
          );
        },
        (error) => {
          console.error(error);
        }
      );
    },
    (error) => {
      console.error(error);
    }
  );
});

// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    document.querySelector("#steak").innerHTML += "<li>steak is ready! </li>";
    document.getElementById("steakImg").removeAttribute("hidden");
    return obtainInstruction("steak", 8);
  })
  .catch((error) => {
    console.error(error);
  });
// ... Your code here

// Iteration 3 using async/await
async function makeBroccoli() {
  const recipeContainer = document.querySelector("#broccoli");
  try {
    const step0 = await obtainInstruction("broccoli", 0);
    recipeContainer.innerHTML += `<li>${step0}</li>`;
    const step1 = await obtainInstruction("broccoli", 1);
    recipeContainer.innerHTML += `<li>${step1}</li>`;
    const step2 = await obtainInstruction("broccoli", 2);
    recipeContainer.innerHTML += `<li>${step2}</li>`;
    const step3 = await obtainInstruction("broccoli", 3);
    recipeContainer.innerHTML += `<li>${step3}</li>`;
    const step4 = await obtainInstruction("broccoli", 4);
    recipeContainer.innerHTML += `<li>${step4}</li>`;
    const step5 = await obtainInstruction("broccoli", 5);
    recipeContainer.innerHTML += `<li>${step5}</li>`;
    const step6 = await obtainInstruction("broccoli", 6);
    recipeContainer.innerHTML += `<li>${step6}</li>`;
    recipeContainer.innerHTML += "<li>broccoli is ready! </li>";
    const broccoliImage = document.querySelector("#broccoliImg");
    broccoliImage.removeAttribute("hidden");
  } catch (err) {
    console.log(err);
  }
}
makeBroccoli();

// Bonus 2 - Promise all
async function makeRecipe(recipe, containerId, imageId) {
  const recipeContainer = document.querySelector(`#${containerId}`);
  const recipeImage = document.querySelector(`#${imageId}`);

  try {
    const instructions = await Promise.all(
      recipe.map((_, stepIndex) => obtainInstruction(containerId, stepIndex))
    );

    instructions.forEach((instruction) => {
      recipeContainer.innerHTML += `<li>${instruction}</li>`;
    });
    recipeContainer.innerHTML += "<li>brussels sprouts are ready!</li>";

    recipeImage.removeAttribute("hidden");
  } catch (error) {
    console.error(error);
  }
}
makeRecipe(brusselsSprouts, "brusselsSprouts", "brusselsSproutsImg");
