change = document.getElementById("change")
change.addEventListener("click", change_all)
function change_all() {
    if (document.getElementsByTagName('div')[0].innerHTML === "Ильясова") {
        document.getElementsByTagName('div')[0].innerHTML = "Iliasova"
        document.getElementsByTagName('div')[1].innerHTML = "Gulfinaz"
        document.getElementsByTagName('div')[2].innerHTML = "Albertovna"
        document.getElementsByTagName('div')[3].innerHTML = "F &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 12.10.2007"
        document.body.style.backgroundImage = "url('./images/foreignpassport_template.jpg')"
    }

    else
        if (document.getElementsByTagName('div')[0].innerHTML === "Iliasova") {
            document.getElementsByTagName('div')[0].innerHTML = "Ильясова"
            document.getElementsByTagName('div')[1].innerHTML = "Гульфиназ"
            document.getElementsByTagName('div')[2].innerHTML = "Альбертовна"
            document.getElementsByTagName('div')[3].innerHTML = "Ж &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 12.10.2007"
            document.body.style.backgroundImage = "url('./images/passport_template.jpg')"
        }
}