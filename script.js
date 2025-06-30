const buttons = document.querySelectorAll("#project1, #project2, #project3");
const sections = {
  project1: document.getElementById("sec1"),
  project2: document.getElementById("sec2"),
  project3: document.getElementById("sec3"),
};

sections.project1.classList.remove("hidden");
sections.project1.classList.add("grid");
sections.project2.classList.add("hidden");
sections.project3.classList.add("hidden");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Hide all
    Object.values(sections).forEach((sec) => {
      sec.classList.add("hidden");
      sec.classList.remove("grid");
    });

    // Show clicked one
    const secId = btn.id.replace("project", "sec");
    const targetSection = document.getElementById(secId);
    targetSection.classList.remove("hidden");
    targetSection.classList.add("grid");
  });
});

buttons.forEach((btn) => {
  btn.classList.remove("bg-[var(--secondary-blue)]", "text-white");
  btn.classList.add("bg-white", "text-[var(--secondary-blue)]");
});
btn.classList.add("bg-[var(--secondary-blue)]", "text-white");
btn.classList.remove("bg-white", "text-[var(--secondary-blue)]");

