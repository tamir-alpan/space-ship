var timer;

class ContactGame {
    cssSelector;
    spaceShipSize = 150;
    contactGameContainer;
    interval = 500;

    constructor(cssSelector) {
        this.cssSelector = cssSelector;
    }

    init() {
        this.contactGameContainer = document.querySelector(this.cssSelector)
        var movingObject = this.appendMovingObject(this.contactGameContainer)
        this.play(movingObject);
    }
    
    play(movingObject) {
        this.relocateMovingObject(movingObject)
        timer = setInterval(() => {
            this.relocateMovingObject(movingObject)
        }, this.interval)
    }

    appendPlayAgain() {
        var button = document.createElement("button")
        button.innerHTML = "play again"
        var c = document.querySelector(".contact-container");
        button.onclick = () => this.init();
        c.appendChild(button)
    }

    appendMovingObject(htmlContainer) {
        var movingObject = document.createElement("div")
        var spaceShipImg = document.createElement("img")
        spaceShipImg.setAttribute("src", "images/sars.png");

        movingObject.appendChild(spaceShipImg)
        movingObject.className = "movingObject"
        
        movingObject.onclick = () => {
            movingObject.classList.add("win")
            clearInterval(timer);
            this.appendPlayAgain()
            var messege = document.querySelector(".status")
            messege.classList.add("win")
            messege.innerHTML = "you should'nt have done that!!!"
        }
        htmlContainer.appendChild(movingObject);
        
        return movingObject
    }
    

    relocateMovingObject(movingObjectHtmlElement) {
        var main = document.querySelector('main');
        var offSet = 75
        var x = this.getRandom(0, main.clientWidth - this.spaceShipSize - offSet)
        var y = this.getRandom(0, main.clientHeight - this.spaceShipSize - offSet)
        // TODO: We should limit the distance between x and y to avoid too small movements
        movingObjectHtmlElement.setAttribute("style", `transform: translate(${x}px, ${y}px)`)
    }

    getRandom(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}
