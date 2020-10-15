function sendMail(contactForm) {
    emailjs.send("gmail", "template_rcul85b", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    }, "user_jfuNxoDK6wX81cySoWxiP")
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
    return false;
}