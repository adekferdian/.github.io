// navbar
const navToggleBtn = document.querySelector('.navbar-nav-toggle')
const navbarNav = document.querySelector('.navbar-nav')
const subMenuToggleBtn = document.querySelectorAll('.navbar-nav .sub-menu-toggle')

navToggleBtn.addEventListener('click', function(){
    if(navbarNav.classList.contains('open')){
        navbarNav.classList.remove('open')
        navbarNav.removeAttribute('style')
    } else{
        navbarNav.classList.add('open')
        navbarNav.style.maxHeight = navbarNav.scrollHeight + 'px'
    }
    navToggleBtn.classList.toggle('close')
})

for (let i = 0; i < subMenuToggleBtn.length; i++){
    subMenuToggleBtn[i].addEventListener('click', function(){
        const dropDown = this.parentElement
        const height = dropDown.querySelector('.sub-menu').scrollHeight
        const subMenu = dropDown.querySelector('.sub-menu')
        if (subMenu.classList.contains('open')){
            subMenu.classList.remove('open')
            subMenu.removeAttribute('style')
            navbarNav.style.maxHeight = (navbarNav.scrollHeight - height) + 'px'
        } else{
            subMenu.classList.add('open')
            subMenu.style.maxHeight = height + 'px'
            navbarNav.style.maxHeight = (navbarNav.scrollHeight + height) + 'px'
        }
    })
}

// pages Name
const sale = document.getElementById('sale')
sale.addEventListener('click', pagesName)
const clothes = document.getElementById('clothes')
clothes.addEventListener('click', pagesName)
const pants = document.getElementById('pants')
pants.addEventListener('click', pagesName)
function pagesName(e) {
    const judul = document.getElementById('judul')
    judul.innerHTML = e.target.innerHTML 
}

//wishlist
const addToWishlist = document.getElementsByClassName('btn1')
// console.log(addToWishlist);

let count = 0
for (let i = 0; i < addToWishlist.length; i++){
    addToWishlist[i].addEventListener('click', function(){
        count ++
        const wishlist = document.getElementById('wishlist')
        wishlist.innerHTML = `Wishlist ${count}`
        wishlist.style.color = 'red'
        
    })
    
}

//shopnow
const arr = document.getElementsByClassName('column')
const shopNow = document.getElementsByClassName('btn2')

for (let j = 0; j < arr.length; j++){
    arr[j].addEventListener('click', function(){
        for (let i = 0; i < shopNow.length; i++){
            shopNow[i].addEventListener('click', function(){
                const produk = document.getElementById('beli')
                produk= arr[j][1]
            })
        }
    })
}

