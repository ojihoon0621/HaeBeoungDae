const inputValue = document.querySelector("#bornDate")
const inputYear = inputValue.querySelector("#year")
const inputMonth = inputValue.querySelector("#month")
const inputDate = inputValue.querySelector("#date")
let ifNameValid = true

function makeAName(one, two, three){
    if(one>0 && two>0 && two<13 && three>0 && three<32){
        const firstString = 
        [
            "황", "김", "박", "전", "노", "풍", "도", "흥", "봉", "장", "현", "남"
        ]
        const secondString = 
        [
            "근", "무", "경", "득", "삼", "구", "창", "현", "평", "판", "달", "봉"
        ]
        const thirdString = 
        [
            "출", "걸", "필", "팔", "상", "칠", "장", "봉", "남", "태", "현", "붕", "두", "질", "귀", "능", "묵", "쇠", "방", "알", "동", "지", "배", "패", "룩", "접", "찰", "점", "닥", "틀", "례"
        ]
        ifNameValid = true
        return `${firstString[one-1]}${secondString[two-1]}${thirdString[three-1]}`
    } else{
        ifNameValid = false
        return "뒤지기 싫으면 똑바로 써부러라잉"
    }
}
function showName(name){
    const finalName = document.getElementById("displayName")
    finalName.textContent = name
    const yourNameIs = document.getElementById("yourNameIs")
    if(ifNameValid===true){
        yourNameIs.classList.remove("hidden")
    } else{
        yourNameIs.classList.add("hidden")
    }
}
function whenSubmitted(event){
    event.preventDefault()
    const stringInputYearValue=String(inputYear.value)
    let yearLastString = stringInputYearValue.slice(-1)
    yearLastString = parseInt(yearLastString)
    showName(makeAName(yearLastString, inputMonth.value, inputDate.value))
}

inputValue.addEventListener("submit", whenSubmitted)