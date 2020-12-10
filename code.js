function show(button) {
    document.getElementById("screen").value += button
}

function ketqua() {
    let congtam = eval(document.getElementById("screen").value)
    document.getElementById("screen").value = congtam
}

function xoa() {
    document.getElementById("screen").value = ""
}