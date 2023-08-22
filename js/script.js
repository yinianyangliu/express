var index = 0
function oy_go_next() {
    console.log(listItems)
}
function oy_show_benefit() {
    if (index >= listItems.length) {
        var yesorno = document.getElementById("ul_oy_btn2")
           yesorno.style.display = "block"
        return
    }
    listItems[index].style.display = "block"
    index += 1
}
function oy_hide_note() {
    console.log("333")
}




