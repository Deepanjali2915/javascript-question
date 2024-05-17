function getMeaning(word) {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            else {
                throw new Error("Ftech data from the api")
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
                        output += "<p>  <b>Definitions :</b>" + definition.definition + "</p>";

                        if (definition.example) {
                            output += "<p><b>Example: </b>" + definition.example + "</p>"
                        }
                    }
                }
            }

            document.getElementById("output").innerHTML = output;
        })
        .catch(error => console.error("Error", error))

}
document.getElementById("serachbutton").addEventListener("click", function () {
    let word = document.getElementById("wordtext").value
    console.log(word)
    if (word !== "") {
        getMeaning(word)
    }
    else {
        alert("Please enter a word")
    }
})