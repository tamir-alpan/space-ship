var timer;

class ContactGame {
    cssSelector;
    spaceShipSize = 150;
    contactGameContainer;

    constructor(cssSelector) {
        this.cssSelector = cssSelector;
    }

    init() {
        
        this.contactGameContainer = document.querySelector(this.cssSelector)
        var movingObject = this.appendMovingObject(this.contactGameContainer)
        movingObject.setAttribute("style", `width: ${this.spaceShipSize}px; height: ${this.spaceShipSize}px`)
        this.relocateMovingObject(movingObject)
        timer = setInterval(() => {
            this.relocateMovingObject(movingObject)
        }, 3000)
    }

    appendPlayAgain() {
        
        var button = document.createElement("button")
        button.innerHTML = "play again"
        var c = document.querySelector(".movingObject");
        button.onclick = () => this.init();
        c.appendChild(button)
    }
    
    appendMovingObject(htmlElement) {
        var movingObject = document.createElement("div")
        var spaceShipImg = document.createElement("img")
        spaceShipImg.setAttribute ("src", "images/flying-saucer.png");
        spaceShipImg.setAttribute("height", "100");
        spaceShipImg.setAttribute("width", "100");
        movingObject.appendChild(spaceShipImg)
        movingObject.className = "movingObject"
        htmlElement.onclick = () => {
            movingObject.setAttribute("style", "width: 100%; height: 100%");
            clearInterval(timer);
            this.appendPlayAgain();
        }
        htmlElement.appendChild(movingObject)
        return movingObject
    }

    relocateMovingObject(movingObjectHtmlElement) {
        var main = document.querySelector('main');
        var offSet = 75
        var x = this.getRandomArbitrary(0, main.clientWidth - this.spaceShipSize - offSet)
        var y = this.getRandomArbitrary(0, main.clientHeight - this.spaceShipSize - offSet)
        movingObjectHtmlElement.setAttribute("style", `transform: translate(${x}px, ${y}px)`)
    }

    getRandom(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    getRandomArbitrary(min, max) {
        return this.getRandom(min, max);

    }
}
