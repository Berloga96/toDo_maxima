const dayList = [
    { id:"sun", title: "Вс"},
    { id:"mon", title: "Пн"},
    { id:"tur", title: "Вт"},
    { id:"ved", title: "Ср"},
    { id:"thu", title: "Чт"},
    { id:"fri", title: "Пт"},
    { id:"sat", title: "Сб"}    
]

const weekList = document.createElement("ul");
let date = new Date();

weekList.classList.add('week_list')
for (let i = 0; i < dayList.length; i++) {
    const {id, title} = dayList[i]
    weekList.innerHTML += `<li>${title}<input id="${id}" type="radio"</li>`
}        

const week = []

for (let i = 0; i < dayList.length; i++) {
    const {id} = dayList[i]
    const day = weekList.querySelector(`#${id}`)
    week.push(day)
}


week[date.getDay()].checked = true

export default weekList 