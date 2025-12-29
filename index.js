const inputANode = document.querySelector(".js-input-a");
const inputBNode = document.querySelector(".js-input-b");
const selectOperationNode = document.querySelector(".js-select-operation");
const buttonResultNode = document.querySelector(".js-button-result");
const outputNode = document.querySelector(".js-output");

buttonResultNode.addEventListener("click", function () {
  const a = Number(inputANode.value);
  const b = Number(inputBNode.value);
  const operation = selectOperationNode.value;

  const result = calculate({ a, b, operation });

  outputNode.innerHTML = result;
});
