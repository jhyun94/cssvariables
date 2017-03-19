const controls = document.querySelectorAll(".controls input");

controls.forEach(function(input){
  input.addEventListener("change", updateSetting);
  input.addEventListener("mousemove", updateSetting);
});

function updateSetting(){
  const suffix = this.dataset["sizing"] || "";
  document.documentElement.style.setProperty(`--${this.id}`, this.value+suffix);
}

