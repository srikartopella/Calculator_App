const radioInput = document.querySelectorAll(".radio__btn");
const docs = document.body.classList;
const storage = window.localStorage;

function setTheme(theme) {
  docs.add(theme);
}

function updateStorage(theme) {
  storage.setItem("theme", theme);
}

function changeTheme(theme) {
  if (docs.length >= 1) {
    docs.value = null;
    setTheme(theme);
    updateStorage(theme);
  } else {
    setTheme(theme);
    updateStorage(theme);
  }
}

function loadTheme() {
  if (storage.getItem("theme")) {
    if (storage.getItem("theme") == null) {
      updateStorage("default");
      changeTheme(storage.getItem("theme"));
    } else {
      changeTheme(storage.getItem("theme"));
    }
  } else {
    updateStorage("default");
    changeTheme(storage.getItem("theme"));
  }
}

radioInput.forEach((btn) => {
  btn.addEventListener("click", () => {
    changeTheme(btn.value);
  });
});

window.addEventListener("DOMContentLoaded", () => {
  loadTheme();
  let loadedTheme = storage.getItem("theme");
  radioInput.forEach((btn) => {
    if (btn.value == loadedTheme) {
      btn.checked = true;
    }
  });
});
