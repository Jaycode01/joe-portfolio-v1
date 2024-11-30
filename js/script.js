// Copied Email
const email = "josephlamidijoslam@gmail.com";

const copyButton = document.getElementById("copyEmailButton");
const confirmationMessage = document.getElementById("confirmationMessage");

copyButton.addEventListener("click", () => {
    const tempInput = document.createElement("input");
    tempInput.value = email;
    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand("copy");

    document.body.removeChild(tempInput);

    confirmationMessage.style.display = "block";

    setTimeout(() => {
        confirmationMessage.style.display = "none";
    }, 2000);
});

// AOS Animation
AOS.init({
    offset: 80,
    delay: 200,
    duration: 500,
    easing: 'ease-in',
    once: false,
    mirror: false,
    overflow: 'hidden'
});


// Footer
const footerYear = document.getElementById("footer_year");

const currentYear = new Date().getFullYear();

footerYear.textContent = currentYear;