async function translateText() {

    let text = document.getElementById("inputText").value;
    let from = document.getElementById("fromLang").value;
    let to = document.getElementById("toLang").value;

    let output = document.getElementById("outputText");

    if (text.trim() === "") {
        alert("Please enter some text!");
        return;
    }

    output.value = "Translating...";

    try {
        let url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${from}|${to}`;

        let response = await fetch(url);
        let data = await response.json();

        if (data.responseStatus === 200) {
            output.value = data.responseData.translatedText;
        } else {
            output.value = "Translation failed. Try again.";
        }

    } catch (error) {
        output.value = "Error! Please check your internet connection.";
    }
}

function copyText() {

    let text = document.getElementById("outputText").value;

    navigator.clipboard.writeText(text)
        .then(() => alert("Text copied successfully!"))
        .catch(() => alert("Unable to copy text."));
}