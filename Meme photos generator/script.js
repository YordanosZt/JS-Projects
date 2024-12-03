document.querySelector("button").addEventListener("click", () => {
    console.log("button clicked")
    document
        .querySelector("img")
        .setAttribute(
            "src",
            meme.data.memes[Math.floor(Math.random() * meme.data.memes.length)]
                .url
        );
});
