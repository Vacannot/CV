window.addEventListener('load', start)

const storage = {
    nextcount: 0,

    set setNextCount(value) {
        this.nextcount = value
    },

    get getNextCount() {
        return this.nextcount
    },
}

function start() {
    events()
    main()
}

function events() {
    dragElement(document.getElementById('drag'))
    window.addEventListener("click", next)
}

function main() {


}

function next() {

    let count = storage.getNextCount
    count = count + 1
    storage.setNextCount = count

    if (count == 1) {
        stepone()
    } else if (count == 2) {
        steptwo()
        document.getElementById("pressany").remove()
    }
}

function stepone() {
    document.getElementById("stepone").classList.remove("none")
}

function steptwo() {
    document.getElementById("steptwo").classList.remove("none")
}

function conversation() {

    let answer = document.getElementById("input").value

    if (answer == "CV" || answer == "cv") {
        /* Create CV Respone in correct div*/
    } else if (answer == Github || answer == github) {
        /* Create Github respone in correct div */
    } else if ()
}