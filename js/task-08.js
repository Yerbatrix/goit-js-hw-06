const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return alert("Proszę wypełnić wszystkie pola!");
  }

  const user = {
    email: email,
    password: password,
  };

  console.log(user);

  // console.log(`Login: ${email}`);
  // console.log(`Password: ${password}`);
  form.reset();
}
