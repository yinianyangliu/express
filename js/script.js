var index = 0
function oy_go_next() {
    console.log(end0)
    end0.style.display = "block"

    var yesorno = document.getElementById("ul_oy_btn1")
    yesorno.style.display = "none"
    end1.style.display = "none"
}
function oy_show_benefit() {
    if (index >= listItems.length) {
        end1.style.display = "block"
        var btn1 = document.getElementsByClassName("btn")
        btn1[1].style.display = "none"
        return 
    }

    listItems[index].style.display = "block"
    index += 1
}
function oy_hide_note() {
    console.log("333")
}




