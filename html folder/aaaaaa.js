async function getmeanings(word){
    const response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/cow");
    if (response.ok) {
        const data = await response.json();
        console.log(data);
    } else {
        console.error('Error fetching data:', response.status);
        console.error('Error response:', await response.text());
    }
}
