document.addEventListener("DOMContentLoaded", function () {
    const submitForm = document.getElementById("submit-form");
    if (submitForm) {
        submitForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const answer = document.getElementById("answer").value;
            const completed = document.getElementById("confirm").checked; // 체크박스 값 가져오기
            const scriptURL = "YOUR_WEB_APP_URL";  // Google Apps Script URL

            fetch(scriptURL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ answer: answer, completed: completed }),
            })
            .then(response => response.text())
            .then(data => {
                document.getElementById("message").innerText = "✅ 제출되었습니다!";
                document.getElementById("answer").value = ""; // 입력칸 초기화
                document.getElementById("confirm").checked = false; // 체크박스 초기화
            })
            .catch(error => console.error("❌ Error:", error));
        });
    }
});
