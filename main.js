// Use JavaScript to obtain a reference to the first article header and change its text with textContent property to "Welcome the {insert your name here} blog"

// const article = document.querySelector(".article__header").textContent = "Welcome to Adelaide's Blog"

// console.log("Did this work?", article)

const article = document.querySelector(".article__header")
    console.log("to see", article);

    article.textContent = "Welcome to Adelaide's Blog";
    
//Jisie's code________________________________________________________________________________
const myName = "Jisie"

const articleHeader = documet.querySelector(".article__header")
articleHeader.textContent = `Welcome the ${myName}`

const articleHeader = document.querySelectorAll(".article__header")

for (let i = 0; i < articleHeader.length; i++)
    articleHeader[i].classList.add("important")



// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to "article__header important".

const articleAll = document.querySelectorAll(".article__header");
for (let i = 0; i < articleAll.length; i++){
    articleAll[i].classList.add("important");
    console.log("add in important", articleAll[i].classList);
}



