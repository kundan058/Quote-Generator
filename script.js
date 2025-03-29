const quote = document.getElementById("quote");
const author = document.getElementById("author");
const apiUrl = "https://api.quotable.io/random";

async function getQuote(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        quote.innerHTML = data.content;
        author.innerHTML = `- ${data.author}`;
    } catch (error) {
        console.error("Error fetching quote:", error);
    }
}

getQuote(apiUrl); // Calling the function
