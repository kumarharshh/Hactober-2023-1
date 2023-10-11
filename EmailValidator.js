function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

let email = "example@email.com";
if (isValidEmail(email)) {
    console.log("Valid email!");
} else {
    console.log("Invalid email!");
}
