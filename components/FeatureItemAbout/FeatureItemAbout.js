
const template = document.createElement('template')

template.innerHTML =         `   
<link rel="stylesheet" href="./components/FeatureItemAbout/FeatureItemAbout.css">
<link rel="stylesheet" href="./assets/css/css-reset.css">


            <div class="item-feature-about-snapp">
                <div class="imgBox-item-feature-about-snapp">
                    <img src="" alt="">
                </div>
                <h4 class="title-item-feature-about-snapp"></h4>
                <p class="desc-item-feature-about-snapp"></p>
            </div>
`

class FeatureItemAbout extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

    }

    connectedCallback(){
        this.style = `width: 25%;
                      max-width: 25%;
                      margin: 0 32px;`

        let titleElem = this.shadowRoot.querySelector('.title-item-feature-about-snapp')
        titleElem.innerHTML = this.getAttribute('title')

        let descElem = this.shadowRoot.querySelector('.desc-item-feature-about-snapp')
        descElem.innerHTML = this.getAttribute('desc')

        let imgElem = this.shadowRoot.querySelector('.imgBox-item-feature-about-snapp img')
        imgElem.setAttribute('src' , this.getAttribute('imgSrc'))
    }
    
}



export {FeatureItemAbout}