import { app } from "./app";

const helper = function(element, attribute, content) {
    const item = document.createElement(`${element}`)
    item.classList.add(`${attribute}`)
    item.textContent = `${content}`

    return item
}

export const display = function() {
    const navbar = document.querySelector(".navbar")
    const mainContainer = document.querySelector(".main-container")

    const inputProjectTitle = helper("input", "project-title", "")
    inputProjectTitle.value = ""
    
    const confirmButton = helper("button","confirm-title-button", "confrim")

    const projectAdder = helper("button", "project-adder", "New Project")
    projectAdder.addEventListener("click", () => {
        navbar.appendChild(inputProjectTitle)
        navbar.appendChild(confirmButton)
    })

    const projectRemover = helper("button", "project-remover", "Remove")
    projectRemover.addEventListener("click", () => {

    })

    navbar.appendChild(projectAdder)
    navbar.appendChild(projectRemover)
}
