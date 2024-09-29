
document.onclick = function(event){
    if(!event.target.classList.contains('cancel')){
        for(let i=0; i<cardsDiv.length; i++){
            cardsDiv[i].classList.remove('click-show');
            cardsDiv[i].children[0].style.removeProperty('color');
        }

        if(window.innerWidth < 768){
            navUl.style.cssText = 'opacity:0; transform: translatex(260%); transition: opacity 0.3s 0s, transform 0s 0.3s';
            navUl.classList.remove('show');
        }
    }
}

window.onresize = function(){
    if(window.innerWidth >= 768)
        navUl.removeAttribute('style');
}

function addClass(elem, className){
    if(elem.children.length > 0){
        for(let i=0; i < elem.children.length; i++){
            addClass(elem.children[i], className);
        }
    }
    
    elem.classList.add(className);
}



// start nav

// click on bar to show the ul

let navBar = document.querySelector('.page nav .container .bar');
let navUl = document.querySelector('.page nav .container ul');

addClass(navBar, 'cancel');
addClass(navUl, 'cancel');

navBar.onclick = function(){
    navUl.classList.toggle('show');

    if(navUl.classList.contains('show')){
        navUl.style.cssText = 'opacity:1; transform: translatex(0%); transition: opacity 0.3s';
    }
    else{
        navUl.style.cssText = 'opacity:0; transform: translatex(260%); transition: opacity 0.3s 0s, transform 0s 0.3s';
    } 
}



// ----------------------------------------------------------------------------

// click on theme to change to dark or light mode

let theme = document.querySelectorAll('.page nav .container .settings .theme span');

for(let i=0; i < theme.length; i++){
    theme[i].onclick = function(){
        if(i===0){
            document.styleSheets[5].cssRules[4].style.setProperty('--main-color', '#20292e');
            theme[i].style.display = 'none';
            theme [i+1].style.display = 'block';
            document.styleSheets[5].cssRules[4].style.setProperty('--theme-color', 'white');
        }
        else{
            document.styleSheets[5].cssRules[4].style.setProperty('--main-color', '#00BEEF');
            theme[i].style.display = 'none';
            theme [i-1].style.display = 'block';
            document.styleSheets[5].cssRules[4].style.setProperty('--theme-color', 'black');
        }
    }
}


// end nav


// start ready

// click on cards to show the content

let cardsDiv = document.querySelectorAll('.page .container .cards div ');

for(let i=0; i<cardsDiv.length; i++)
    addClass(cardsDiv[i], 'cancel');

for(let i=0; i<cardsDiv.length; i++){
    cardsDiv[i].onclick = function(){
        if(cardsDiv[i].classList.contains('click-show')){
            cardsDiv[i].classList.remove('click-show');
            cardsDiv[i].children[0].removeAttribute('style');
        }
        else{
            for(let j=0; j<cardsDiv.length; j++){
                cardsDiv[j].classList.remove('click-show');
                cardsDiv[j].children[0].style.removeProperty('color');
            }
            cardsDiv[i].classList.add('click-show');
            cardsDiv[i].children[0].style.setProperty('color', 'var(--theme-color)');
            

        }
    }
}

// -------------------------------------------------------------------------

// end ready

