const hamMenu = document.querySelector('#hamMenu')
const mobileNav = document.querySelector('#mobileNavigation')


hamMenu.addEventListener('click', () => {
    console.log(mobileNav.className)
    if (mobileNav.className == '') {
        mobileNav.classList.add('show')
    } else mobileNav.classList.remove('show')
})