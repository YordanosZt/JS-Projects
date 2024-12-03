const quoteEl = document.querySelector(".quote"),
    authorEl = document.querySelector(".author"),
    newBtn = document.querySelector(".btn");

function randomQuote() {
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "1fe135faf0mshee95194cb58b146p17f5fdjsn5e60186b49fc",
            "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
        },
    };

    fetch("https://quotes15.p.rapidapi.com/quotes/random/", options)
        .then((response) => response.json())
        .then((response) => {
            quoteEl.textContent = response.content;
            authorEl.textContent = response.originator.name;
        })
        .catch((err) => console.error(err));
}

randomQuote();

newBtn.addEventListener("click", randomQuote);
