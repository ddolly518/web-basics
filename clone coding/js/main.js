// 여는 아이콘 선택자
const menuOpenEl = document.getElementById('btn-open')
// 닫는 아이콘 선택자
const menuCloseEl = document.getElementById('btn-close')
// 사이드 네비게이션 선택자
const sideMenuEl = document.getElementById('side-menu')

// 여는 아이콘에 클릭 이벤트가 발생하면,
menuOpenEl.addEventListener("click", function() {
    // 여는 아이콘을 보이지 않게 처리하고,
    menuOpenEl.style.display = 'none'
    // 닫는 아이콘은 보이게 처리합니다
    menuCloseEl.style.display = 'block'
    // 사이드 메뉴를 보이게 합니다 
    sideMenuEl.style.transform = 'translateX(0%)'

})

// 닫는 아이콘에 클릭 이벤트가 발생하면,
menuCloseEl.addEventListener("click", function() {
    // 여는 아이콘을 보이게 처리하고,
    menuOpenEl.style.display = 'block'
    // 닫는 아이콘은 보이지 않게 처리합니다
    menuCloseEl.style.display = 'none'
    // 사이드 메뉴를 원상태로 숨깁니다
    sideMenuEl.style.transform = 'translateX(-100%)'
})

// // 헤더 선택자
// const headerEl = document.getElementById('header-main')
// // 로고 선택자
// const coronaEl = document.getElementById('corona')

// // 윈도우에서 스크롤 이벤트가 발생하면 익명의 함수 동작
// window.addEventListener("scroll", function() {
//     // y축으로 스크롤 위치가 200px을 넘어가면
//     if(window.scrollY >= 200) {
//         // 헤더 요소의 높이를 160px로 줄입니다
//         headerEl.style.height = '160px'
//         // 로고 요소의 높이 및 너비를 120px로 줄입니다
//         coronaEl.style.height = '120px'
//         coronaEl.style.width = '120px'
//     } else {
//         // 스크롤 위치가 200px 미만이면,
//         // 헤더 요소의 높이를 원래대로 400px로 돌립니다
//         headerEl.style.height = '400px'
//         // 로고 요소의 높이 및 너비를 원래대로 300px로 돌립니다
//         coronaEl.style.height = '300px'
//         coronaEl.style.width = '300px'
//     }
// })

// SCROLL TO TOP
const scrollToTop = () => {
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
}

// scroll to top 버튼 선택자
const scrollToTopBtn = document.querySelector('.btn-scrollToTop')

// 윈도우에 스크롤 이벤트가 발생할 시 작동하는 익명의 함수
window.addEventListener("scroll", function() {
    // 만약 스크롤이 발생하면,
    // scroll to top 버튼을 보이게 하고,
    // 아니라면 버튼을 보이지 않게 함
    window.scrollY > 0
    ? scrollToTopBtn.style.display = 'block'
    : scrollToTopBtn.style.display = 'none'
})