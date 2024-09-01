

const template = document.createElement('template')

template.innerHTML =         `   
<link rel="stylesheet" href="./components/ServiceItems/ServiceItems.css">
<link rel="stylesheet" href="./assets/css/css-reset.css">


<a href="" class="item-feature-snapp">
    <img class="" src="" alt="">
    <span class="desc-item-features-snapp">
        <h3></h3>
        <p></p>
    </span>
</a>
`

class ServiceItems extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

    }

    connectedCallback(){
        let titleElem = this.shadowRoot.querySelector('.desc-item-features-snapp h3')
        titleElem.innerHTML = this.getAttribute('title')

        let descElem = this.shadowRoot.querySelector('.desc-item-features-snapp p')
        descElem.innerHTML = this.getAttribute('desc')

        let imgElem = this.shadowRoot.querySelector('.item-feature-snapp img')
        imgElem.setAttribute('src' , this.getAttribute('imgSrc'))
        imgElem.className = this.getAttribute('imgDiscount')
    }
    
}



export {ServiceItems}