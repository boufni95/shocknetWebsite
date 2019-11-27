(()=>{
    'use strict'
    document.querySelector('#nav-icon3').addEventListener('click',(e)=>{
        e.preventDefault()
        let menu = document.querySelector('#menu_list')
        menu.classList.toggle('sh-hide-nav')
        menu.classList.toggle('sh-show-nav')
        document.querySelector('#nav-icon3').classList.toggle("open")
    })
})()
