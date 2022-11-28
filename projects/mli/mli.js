const buttons = document.querySelectorAll(".btns")
const image = document.getElementById("image")

buttons.forEach(function(e) {
    e.addEventListener("click", function() {
        if (e.classList.contains("1")) {
            image.innerHTML = `<img class="mli" src="../images/ml1.png" alt="Machine language 1">`
        }
        else if (e.classList.contains("2")) {
            image.innerHTML = `<img class="mli" src="../images/ml2.png" alt="Machine language 2">`
        }
        else if (e.classList.contains("3")) {
            image.innerHTML = `<img class="mli" src="../images/ml3.png" alt="Machine language 3">`
        }
        else if (e.classList.contains("4")) {
            image.innerHTML = `<img class="mli" src="../images/ml4.png" alt="Machine language 4">`
        }
        else if (e.classList.contains("5")) {
            image.innerHTML = `<img class="mli" src="../images/ml5.png" alt="Machine language 5">`
        }
    })
})