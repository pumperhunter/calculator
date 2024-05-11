document.querySelector(".calc")?.addEventListener("submit", (e) => {
    e.preventDefault();
    document.calculator.ans.value = eval(document.calculator.ans.value);
  });
  