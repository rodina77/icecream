var x = document.getElementById("btn");
x.addEventListener("click",function(){
    window.scroll({
        top:660,
        left:0,
        behavior: 'smooth',
    })
})

document.querySelector('.fa-bars').addEventListener('click', () => {
    document.querySelector(".navitems").classList.toggle("active");
    });