// ROOT
var root = document.querySelector(':root');

// SIDEBAR
let menuItems = document.querySelectorAll('.menu-item')
// remove active class from all menu items
let changeActiveItem = ()=>{
    menuItems.forEach((item)=>{
        item.classList.remove('active')
    })
}

menuItems.forEach((item)=>{
    item.addEventListener('click',()=>{
        changeActiveItem()
        item.classList.add('active') 
        if(item.id != 'notifications'){
            document.querySelector('.notification-popup').style.display = 'none'
            
        }
        else{
            document.querySelector('.notification-popup').style.display = 'block'
            document.querySelector('#notifications .notification-count').style.display = 'none'
        }
    })
})


//========================== MESSAGES =================
// MESSAGES
let messageNotification = document.querySelector('#message-notification')
let messages = document.querySelector('.messages')
let message = messages.querySelectorAll('.message')
let messageSearch = document.querySelector('#message-search')

// ============== MESSAGE SEARCH BOX ===============

let searchMessage = () =>{
    let val = messageSearch.value.toLowerCase();
    for (let i = 0; i < message.length; i++) {
        const name = message[i].textContent.toLowerCase();
        console.log(name);
        if(name.indexOf(val) != -1) {
            message[i].style.display = 'flex';
        }
        else{
            message[i].style.display = 'none';
        }
        
    }
}


messageSearch.addEventListener('keyup', searchMessage);


// ========= HIGHLIGHTS MESSAGE BOX ========//
messageNotification.addEventListener('click',()=>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageNotification.querySelector('.notification-count').style.display = 'none'
    setTimeout(()=>{
        messages.style.boxShadow = 'none';}
    ,2000)
})

// ================= THEME CUSTOMIZATION ==================//
let theme = document.getElementById('theme')
let themeModal = document.querySelector('.customize-theme')

// open modal
let openThemeModal = ()=>{
    themeModal.style.display = 'grid'
}

// close modal
let closeThemeModal = (e)=>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none'
    }
}


themeModal.addEventListener('click',closeThemeModal)
theme.addEventListener('click',openThemeModal)



// ======== FONT SIZE ========== //
let fontSizes = document.querySelectorAll('.choose-size span')
console.log(fontSizes);

let removeSizeSelector = ()=>{
    fontSizes.forEach(size => {
        size.classList.remove('active')
    })
}

fontSizes.forEach((size)=>{
   size.addEventListener('click',()=>{
    removeSizeSelector();
    let fontS;
    size.classList.toggle('active')
    if(size.classList.contains('font-size-1')){
        fontS = '10px';
        root.style.setProperty('--sticky-top-left', '5.4rem');
        root.style.setProperty('--sticky-top-right', '5.4rem');   
    }
    else if(size.classList.contains('font-size-2')){
        fontS = '13px';
        root.style.setProperty('--sticky-top-left', '5.4rem');
        root.style.setProperty('--sticky-top-right', '-7rem');
    }
    else if(size.classList.contains('font-size-3')){
        fontS = '16px';
        root.style.setProperty('--sticky-top-left', '-2rem');
        root.style.setProperty('--sticky-top-right', '-17rem');
    }
    else if(size.classList.contains('font-size-4')){
        fontS = '19px';
        root.style.setProperty('--sticky-top-left', '-5rem');
        root.style.setProperty('--sticky-top-right', '-25rem');
    }
    else if(size.classList.contains('font-size-5')){
        fontS = '22px';
        root.style.setProperty('--sticky-top-left', '-12rem');
        root.style.setProperty('--sticky-top-right', '-35rem');
    }
    // change font size of the root html element
    document.querySelector('html').style.fontSize = fontS;
   })
})


// =============== PRIMARY COLOR ================= //
let colorPalette = document.querySelectorAll('.choose-color span')

let removeColorSelector = ()=>{
    colorPalette.forEach(color=>{
        color.classList.remove('active')
    })
} 

colorPalette.forEach(color=>{
    color.addEventListener('click',()=>{
        let primaryHue
        removeColorSelector();
        color.classList.toggle('active');
        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }
        else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }
        else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }
        else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }
        else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        root.style.setProperty('--primary-color-hue',primaryHue);
    })
})

console.log(colorPalette);


// =================== BACKGROUND COLOR ===================//
let Bg1 = document.querySelector('.bg-1');
let Bg2 = document.querySelector('.bg-2');
let Bg3 = document.querySelector('.bg-3');

// ======== THEME BACKGROUND VALUES =======//
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;


// ================ change background color
let changeBG = ()=> {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

Bg1.addEventListener('click',()=>{
    // ADD ACTIVE CLASS
    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');

    // remove customized changes form local storages
    window.location.reload();
})

Bg2.addEventListener('click',()=>{
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    // ADD ACTIVE CLASS
    Bg2.classList.add('active')
    Bg1.classList.remove('active')
    Bg3.classList.remove('active')

    changeBG()
})

Bg3.addEventListener('click',()=>{
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%'; 

    // ADD ACTIVE CLASS
    Bg3.classList.add('active')
    Bg1.classList.remove('active')
    Bg2.classList.remove('active')

    changeBG()
})







