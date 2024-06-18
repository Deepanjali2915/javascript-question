b = document.getElementById("serachbutton")
b.addEventListener("click", function () {
    let word = document.getElementById("wordtext").value
    // console.log(word)
    if (word !== "") {
        fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
        })
        .then(data => {
            let output = ""

            for (let i = 0; i < data.length; i++) {
                let entry = data[i]
                for (let j = 0; j < entry.meanings.length; j++) {
                    let meaning = entry.meanings[j]
                    output += "<h1>" + meaning.partOfSpeech + "</h1>"

                    for (let k = 0; k < meaning.definitions.length; k++) {
                        let definition = meaning.definitions[k]
                        output += "<p>" + definition.definition + "</p>";
                    }
                }
            }
            document.getElementById("output").innerHTML = output;
        })
        .catch(error => console.error("Error", error))

    }
    else {
        alert("Please enter a word")
    }
})