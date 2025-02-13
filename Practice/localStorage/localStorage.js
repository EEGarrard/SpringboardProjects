const toggleSwitch = document.querySelector('input[type="checkbox"]');


if (localStorage.getItem("dark-mode")) {
  document.body.className = "dark-mode";
  toggleSwitch.checked = true;
} else {
  document.body.className = "light-mode";
  toggleSwitch.checked = false;
}


toggleSwitch.addEventListener("click", function (e) {
  const { checked } = toggleSwitch;
  if (checked) {
    localStorage.setItem("dark-mode", true);
    localStorage.removeItem("light-mode");
  } else {
    localStorage.setItem("light-mode", true);
    localStorage.removeItem("dark-mode");
  }
  document.body.className = checked ? "dark-mode" : "light-mode";
});
