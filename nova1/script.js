var open = false;

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function openNav() {
    if (open) {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        open = false;
    } else {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "-250px";
        open = true;
    }
}

function send() {
    document.getElementById("name2").value = "";
    document.getElementById("numDocumento2").value = "";
    document.getElementById("cel2").value = "";
    document.getElementById("RH2").value = "";
    document.getElementById("departamento2").value = "";
}