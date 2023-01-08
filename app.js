const coursesItems = document.querySelector(".courses__items"),
      coursesItem = document.querySelectorAll(".courses__item"),
      tabText = document.querySelectorAll(".courses__content");

function hide() {
  tabText.forEach(item => {
    item.classList.add("hide1")
    item.classList.remove("show1","fade")
  })
}


function show (i = 0) {
  tabText[i].classList.add("show1", "fade")
  tabText[i].classList.remove("hide1")
}


coursesItems.addEventListener("click", (event) => {
  if(event.target && event.target.classList.contains("courses__item")) {
    coursesItem.forEach((item,idx) => {
      if(event.target === item) {
        hide()
        show(idx)
      }
    })
  }
})

hide()
show()
