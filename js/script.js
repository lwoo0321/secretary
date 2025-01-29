document.addEventListener("DOMContentLoaded", function () {
    const submitForm = document.getElementById("submit-form");
    if (submitForm) {
        submitForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const answer = document.getElementById("answer").value;
            const scriptURL = "https://script.google.com/macros/s/AKfycbx4BaBEl6a5TFoxTmBhx4t1i1DO0sXQxZu2z1fOoVhS-r0DBNlbLeCF0euewL7LMoulWw/exec";  // Google Apps Script URL

            fetch(scriptURL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ answer: answer }),
            })
            .then(response => response.text())
            .then(data => {
                document.getElementById("message").innerText = "제출 완료!";
            })
            .catch(error => console.error("Error:", error));
        });
    }
});
