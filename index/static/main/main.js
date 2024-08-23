function submitText() {
    var textInput = document.getElementById('text-input');
    var displayArea = document.getElementById('display-area');
    var newText = document.createElement('p');
    newText.textContent = textInput.value;
    displayArea.appendChild(newText);
    textInput.value = ""; // 입력 후 텍스트 필드 초기화
}
