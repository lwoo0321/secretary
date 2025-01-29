document.addEventListener("DOMContentLoaded", function () {
    const submitForm = document.getElementById("submit-form");
    if (submitForm) {
        submitForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const answer = document.getElementById("answer").value;
            const completed = document.getElementById("confirm").checked; // 체크박스 값 가져오기
            const scriptURL = "https://script.google.com/macros/s/AKfycbx4BaBEl6a5TFoxTmBhx4t1i1DO0sXQxZu2z1fOoVhS-r0DBNlbLeCF0euewL7LMoulWw/exec";  // Google Apps Script URL

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

// 🔥 새로운 `checkProgress()` 함수 추가 (맨 아래에 삽입)
function checkProgress() {
    const email = document.getElementById("user-email").value.trim();
    if (!email) {
        document.getElementById("message").innerText = "⚠️ 이메일을 입력하세요.";
        return;
    }

    // 이메일과 Google Sheet URL 매핑 (예제)
    const userSheets = {
        "user1@gmail.com": "https://docs.google.com/spreadsheets/d/1CjzSYDF-6fUqGwEkx-cc0o7DA1OSashUKy_BsOHMTyA",
        "user2@gmail.com": "https://docs.google.com/spreadsheets/d/YOUR_OTHER_SHEET_ID"
    };

    if (userSheets[email]) {
        document.getElementById("sheet-link").href = userSheets[email];
        document.getElementById("link-container").style.display = "block";
        document.getElementById("message").innerText = "✅ 로그인 성공!";
    } else {
        document.getElementById("message").innerText = "❌ 등록되지 않은 이메일입니다.";
        document.getElementById("link-container").style.display = "none";
    }
}

