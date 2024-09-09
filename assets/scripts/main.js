import {ServiceItems} from "../../components/ServiceItems/ServiceItems.js"
import {FeatureItemAbout} from "../../components/FeatureItemAbout/FeatureItemAbout.js"
import {BenefitsItem} from "../../components/BenefitsItem/BenefitsItem.js"


const phoneNumInput = document.querySelector('#phoneNum_input')
const inputDotIcon = document.querySelector('#input_icon .dot-icon')
const clearInputIcon = document.querySelector('#input_icon svg')

phoneNumInput.addEventListener('keyup' , e =>{
    if(phoneNumInput.value.trim() === '') {
        inputDotIcon.style.display = 'block'
        clearInputIcon.style.display = 'none'
    }else{
        inputDotIcon.style.display = 'none'
        clearInputIcon.style.display = 'block'
    }   
})

clearInputIcon.addEventListener('click' , e => {
    phoneNumInput.value = ''
    inputDotIcon.style.display = 'block'
    clearInputIcon.style.display = 'none'
})

const serviceItemList = [
    {id: 1 , title: 'تاکسی اینترنتی' , imgSrc: './assets/image/taxi.svg' , desc: 'امکان درخواست آنلاین خودرو با اسنپ'},
    {id: 2 , title: 'پیک موتوری' , imgSrc: './assets/image/bike.svg' , desc: 'حمل و نقل با اسنپ'},
    {id: 3 , title: 'سوپرمارکت آنلاین' , imgSrc: './assets/image/spdiscount.png' , desc: 'تهیه اقلام روزانه با اسنپ' , isDiscount: true},
    {id: 4 , title: 'سفارش آنلاین غذا ' , imgSrc: './assets/image/food.svg' , desc: 'سفارش غذا، نان و شیرینی با اسنپ'},
    {id: 5 , title: 'درخواست وانت' , imgSrc: './assets/image/pickup.svg' , desc: 'حمل و نقل با اسنپ'},
    {id: 6 , title: 'اسنپ اکسپرس' , imgSrc: './assets/image/spdiscount.png' , desc: 'تحویل کمتر از ۳۰ دقیقه' , isDiscount: true},
    {id: 7 , title: 'بلیط پرواز داخلی' , imgSrc: './assets/image/fdom-t.png' , desc: 'گردشگری با اسنپ' , isDiscount: true},
    {id: 8 , title: 'بلیط پرواز خارجی' , imgSrc: './assets/image/intflight.svg' , desc: 'گردشگری با اسنپ'},
    {id: 9 , title: 'بیمه' , imgSrc: './assets/image/insdiscount.png' , desc: 'خرید آنلاین بیمه با اسنپ' , isDiscount: true},
    {id: 10 , title: 'رزرو هتل' , imgSrc: './assets/image/hotel.svg' , desc: 'گردشگری با اسنپ'},
    {id: 11 , title: 'رزرو اقامتگاه' , imgSrc: './assets/image/hotel.svg' , desc: 'گردشگری با اسنپ'},
    {id: 12 , title: 'پزشک و مشاور' , imgSrc: './assets/image/doctor.svg' , desc: 'درمان با اسنپ'},
    {id: 13 , title: 'بلیط اتوبوس' , imgSrc: './assets/image/bus.svg' , desc: 'گردشگری با اسنپ'},
    {id: 14 , title: 'بلیط قطار' , imgSrc: './assets/image/train.svg' , desc: 'گردشگری با اسنپ'},
    {id: 15 , title: 'داروخانه' , imgSrc: './assets/image/pharmacy.svg' , desc: 'داروخانه آنلاین اسنپ'},
    {id: 16 , title: 'اسباب‌کشی منزل' , imgSrc: './assets/image/moving.svg' , desc: 'حمل و نقل با اسنپ'},
    {id: 17 , title: 'ثبت نام راننده' , imgSrc: './assets/image/driver.svg' , desc: 'ثبت نام تاکسی اینترنتی اسنپ'},
    {id: 18 , title: 'فروشگاه' , imgSrc: './assets/image/shop.svg' , desc: 'خرید از فروشگاه های معتبر شهر'},
    {id: 19 , title: 'سرمایه‌گذاری' , imgSrc: './assets/image/investment.svg' , desc: 'خدمات غیر حضوری بورس و سرمایه‌گذاری'},
    {id: 20 , title: 'سرویس اعتباری' , imgSrc: './assets/image/Credit.svg' , desc: 'پرداخت با اسنپ'},
    {id: 21 , title: 'اسنپ! ‌کلاب' , imgSrc: './assets/image/club.svg' , desc: 'باشگاه مشتریان اسنپ!'},
    {id: 22 , title: 'خرید شارژ' , imgSrc: './assets/image/wallet.png' , desc: 'خرید آنلاین شارژ از اسنپ'},
    {id: 23 , title: 'خرید بسته اینترنت' , imgSrc: './assets/image/wallet.png' , desc: 'خرید آنلاین بسته اینترنت از اسنپ'},
    {id: 24 , title: 'اسنپ پرو' , imgSrc: './assets/image/Pro.png' , desc: 'اشتراک حرفه ای اسنپ'},
]

const featureItemAboutList = [
    {id: 1 , title: 'آسان' , imgSrc: './assets/image/210x190-easy.png' , desc: 'برای استفاده از هر کدام از خدمات سوپر‌اپ اسنپ کافی است وارد اپلیکیشن اسنپ شوید و روی آیکون مورد نظر بزنید.'},
    {id: 2 , title: 'سریع' , imgSrc: './assets/image/210x190-fast.png' , desc: 'قرار گرفتن خدمات مختلف در یک پلت‌فرم به صرفه‌جویی در زمان کمک می‌کند. سوپراپ اسنپ پاسخی سریع به نیازهای رومزه‌ی شماست.'},
    {id: 3 , title: 'به صرفه' , imgSrc: './assets/image/210x190-eco.png' , desc: 'سوپراپ اسنپ علاوه بر زمان در هزینه‌های شما نیز صرفه‌جویی می‌کند تا بهترین خدمات را با قیمتی منطقی دریافت کنید.'}
]

const benefitsItemList = [
    {id: 1 , title: ' درآمد تضمینی + پاداش‌های ماهانه و هفتگی' , imgSrc: './assets/image/180x100-income.png' , desc: 'با فعالیت در ناوگان اسنپ، علاوه بر کسب درآمد مستمر و امکان تسویه در لحظه می‌توانید با شرکت در طرح‌های تشویقی مختلف، درآمد خود را افزایش دهید.'},
    {id: 2 , title: 'ساعت کاری دلخواه' , imgSrc: './assets/image/180x100-hour.png' , desc: 'فعالیت در ناوگان اسنپ محدودیت زمانی ندارد و می‌توانید فعالیت خود را در هر ساعت از شبانه‌روز و متناسب با برنامه‌ی زندگی‌تان شخصی‌سازی کنید.'},
    {id: 3 , title: 'مزایا و خدمات باشگاه رانندگان' , imgSrc: './assets/image/180x100-benefits.png' , desc: 'در باشگاه رانندگان اسنپ می‌توانید از تسهیلات و خدمات متنوعی از جمله خدمات خودرویی، خدمات درمانی و همچنین خدمات رفاهی و آموزشی بهره‌مند شوید.'},
    {id: 4 , title: 'کار‌فیکس' , imgSrc: './assets/image/180x100-carfix.png' , desc: 'باشگاه رانندگان اسنپ به‌تازگی سرویس جدید «اسنپ کارفیکس» را برای سهولت دسترسی کاربران راننده به انواع خدمات خودرویی راه‌اندازی کرده است.'},
    {id: 5 , title: 'امنیت سفر کاربران راننده در اسنپ' , imgSrc: './assets/image/safety.svg' , desc: 'اسنپ با ارائه سرویس امنیت سفر در اپلیکیشن رانندگان و بهبود مستمر امکانات امنیتی این سرویس، تلاش می‌‌کند تجربه سفر با اسنپ برای کاربران راننده امن‌ و مطمئن باشد.'},
    {id: 6 , title: 'پشتیبانی ۲۴ ساعته و سریع' , imgSrc: './assets/image/support.svg' , desc: 'تیم پشتیبانی اسنپ در تمامی ساعت‌های شبانه‌روز پاسخگوی سوال‌ها و مشکلات کاربران راننده است. بخش «پشتیبانی» در اپلیکیشن رانندگان، سریع‌ترین راه ارتباطی شما با تیم پشتیبانی اسنپ است'}

]

const containerService = document.querySelector('.container-service-snapp')

serviceItemList.forEach(item => {
    containerService.insertAdjacentHTML('beforeend' , 
        `
                <service-item title="${item.title}" desc="${item.desc}" imgSrc="${item.imgSrc}" imgDiscount="${item.isDiscount ? 'discount' : ''}"></service-item>
            `
    )
})

const containerFeatureAbout = document.querySelector('.feature-wrapper-about-snapp')

featureItemAboutList.forEach(item => {
    containerFeatureAbout.insertAdjacentHTML('beforeend' , 
        `
                <feature-item-about title="${item.title}" desc="${item.desc}" imgSrc="${item.imgSrc}"></feature-item-about>
            `
    )
})


const containerBenefitsItem = document.querySelector('.container-benefits-item')

benefitsItemList.forEach(item => {
    containerBenefitsItem.insertAdjacentHTML('beforeend' , 
        `
                <benefits-item title="${item.title}" desc="${item.desc}" imgSrc="${item.imgSrc}"></benefits-item>
            `
    )
})

    if(window.innerWidth <= 800){
        let submenuWrappers = document.querySelectorAll('#submenuWrapper')
        submenuWrappers.forEach(wrapper => {
            wrapper.classList.remove('hover')
            wrapper.addEventListener('click' , () => ctrlSubmenu(wrapper))
        })
        
        let headerMenu = document.querySelector('.menu-header-snapp')
        let headerMenuBtn = document.querySelector('.menuIcon-header-snapp')
        let headerMenuBtnIcon = headerMenuBtn.querySelector('img')
    
        headerMenuBtn.addEventListener('click' , () => {
            if(headerMenu.classList.contains('open')){
                headerMenu.classList.remove('open');
                document.body.style = 'overflow: auto;'
                headerMenuBtnIcon.src = './assets/image/menu_black_24dp.svg'
            }else{
                headerMenu.classList.add('open');
                document.body.style = 'overflow: hidden;'
                headerMenuBtnIcon.src = 'https://web-cdn.snapp.ir/snapp-website/icons/close_black_24dp.svg'
            }
        })
        headerMenu.addEventListener('click' , e => {
            if(e.target.classList.contains('menu-header-snapp')){
                headerMenu.classList.remove('open');
                document.body.style = 'overflow: auto;'
                headerMenuBtnIcon.src = './assets/image/menu_black_24dp.svg'
            }
        })
    }else{
        let submenuWrappers = document.querySelectorAll('#submenuWrapper')
        submenuWrappers.forEach(wrapper => {
            wrapper.classList.add('hover')
        })
    }



function ctrlSubmenu(wrapper) {
    let arrowIcon = wrapper.querySelector('svg')
    let submenuElem = wrapper.querySelector('.submenu-header-snapp')
    let wrapperItemSubmenu = submenuElem.querySelector('.wrapper-item-submenu-header-snapp')
    
    if(submenuElem.classList.contains('show')){
        wrapperItemSubmenu.classList.remove("show")
        setTimeout(()=> submenuElem.classList.remove("show"), 250)
        arrowIcon.style = 'transform: scale(1) rotate(90deg) !important;'
    }else{
        arrowIcon.style = 'transform: scale(1) rotate(270deg) !important;'
        submenuElem.classList.add("show")
        wrapperItemSubmenu.classList.add("show")
    }
}


let dlLinksContainer = document.querySelector('.dlLinks-container-intro-snapp')
let showDlAppBoxBtn = document.querySelector('.dlApp-btn-intro-snapp')
// let headerMenuBtnIcon = headerMenuBtn.querySelector('img')

showDlAppBoxBtn.addEventListener('click' , () => {
    if(!dlLinksContainer.classList.contains('open')){
        dlLinksContainer.classList.add('open');
        document.body.style = 'overflow: hidden;'
    }
})


const closeDlLinksContainer = () => {
        dlLinksContainer.classList.remove('open');
        document.body.style = 'overflow: auto;'
}

document.querySelector('.shadowOverlay-dlLinks-intro-snapp').addEventListener('click' , closeDlLinksContainer)
document.querySelector('.title-dlLinks-intro-snapp i').addEventListener('click' , closeDlLinksContainer)


window.customElements.define('service-item' , ServiceItems)
window.customElements.define('feature-item-about' , FeatureItemAbout)
window.customElements.define('benefits-item' , BenefitsItem)