//startup random joke
fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
.then(response => response.json())
.then(data => {
    console.log(data);
    jokeText.textContent = data.joke || data.setup +"..."+ data.delivery;
});

//programming joke
document.getElementById('programming').addEventListener("click", () => {
    fetch("https://v2.jokeapi.dev/joke/Programming?safe-mode")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('jokeText').textContent = data.joke || data.setup +"..."+ data.delivery;
    });
    document.getElementById('titleText').textContent = "A Random Programming Joke!";
});

//spooky joke
document.getElementById('spooky').addEventListener("click", () => {
    fetch("https://v2.jokeapi.dev/joke/Spooky?safe-mode")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('jokeText').textContent = data.joke || data.setup +"..."+ data.delivery;
    });
    document.getElementById('titleText').textContent = "A Random Spooky Joke!";
});

//christmas joke
document.getElementById('christmas').addEventListener("click", () => {
    fetch("https://v2.jokeapi.dev/joke/Christmas?safe-mode")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('jokeText').textContent = data.joke || data.setup +"..."+ data.delivery;
    });
    document.getElementById('titleText').textContent = "A Random Christmas Joke!";
});

//pun
document.getElementById('pun').addEventListener("click", () => {
    fetch("https://v2.jokeapi.dev/joke/Pun?safe-mode")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('jokeText').textContent = data.joke || data.setup +"..."+ data.delivery;
    });
    document.getElementById('titleText').textContent = "A Random Pun!";
});

//misc
document.getElementById('misc').addEventListener("click", () => {
    fetch("https://v2.jokeapi.dev/joke/Miscellaneous?safe-mode")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('jokeText').textContent = data.joke || data.setup +"..."+ data.delivery;
    });
    document.getElementById('titleText').textContent = "A Random Miscellaneous Joke!";
});