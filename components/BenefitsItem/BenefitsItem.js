const template = document.createElement('template')

template.innerHTML =         `   
<link rel="stylesheet" href="./components/BenefitsItem/BenefitsItem.css">
<link rel="stylesheet" href="./assets/css/css-reset.css">


            <div class="benefits-item">
                <img src="" alt="" width="120">
                <div class="details-benefits-item">
                    <h3><h3>

                    
                    <p></p>
                </div>
            </div> 
`

class BenefitsItem extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))


    }

    connectedCallback(){
        this.style = `height: 200px;
    display: flex;
    border-radius: 18px;
    margin-top: 32px;
    padding: 0 32px;
    background: #fff;
    align-items: center;
    width: 49%;`

        let titleElem = this.shadowRoot.querySelector('.details-benefits-item h3')
        titleElem.innerHTML = this.getAttribute('title')

        let descElem = this.shadowRoot.querySelector('.details-benefits-item p')
        descElem.innerHTML = this.getAttribute('desc')

        let imgElem = this.shadowRoot.querySelector('.benefits-item img')
        imgElem.setAttribute('src' , this.getAttribute('imgSrc'))
    }
    
}



export {BenefitsItem}