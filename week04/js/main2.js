const headerEl = document.getElementById('header-main')
const logoEl = document.getElementById('logo')

window.addEventListener("scroll",function() {
    if(window.scrollY >= 200) {
        headerEl.style.height = '160px'
        logoEl.style.height = '120px'
        logoEl.style.width = '120px'
    } 
    else {
        headerEl.style.height ='400px'
        logoEl.style.height = '300px'
        logoEl.style.width = '300px'
    }
})