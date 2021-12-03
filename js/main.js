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
}

function events() {
    dragElement(document.getElementById('drag'))
    window.addEventListener("click", next)
    document.addEventListener("keypress", next)
    document.addEventListener("keypress", removeblink)
}

function removeblink() {
    document.getElementById("input").classList.remove("blinker")
    document.getElementById("input").classList.remove("largetext")
    document.getElementById("input").classList.add("inputfield")
}

function next() {

    let count = storage.getNextCount
    count = count + 1
    storage.setNextCount = count

    if (count == 1) {
        document.getElementById("stepone").classList.remove("none")
    } else if (count == 2) {
        document.addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                conversation()
            }
        })
        document.getElementById("steptwo").classList.remove("none")
        document.getElementById("pressany").remove()
    }
}


function conversation() {

    let answer = document.getElementById("input").value

    if (answer == "CV" || answer == "cv") {
        /* Create CV Respone in correct div*/
        let cv = document.createElement("div")
        cv.innerHTML = "  <br>" + "C:&bsol;Users&bsol;Simon> Jag är en mycket teknikintresserad och driven kille, just nu skriven som student på IT programmet hos Chalmers & som Front-End student på Medieinstitutet Göteborg och läste där innan Information och Kommunikationsteknik på Lunds Tekniska Högskola." + "<br>" + "<br>" + "C:&bsol;Users&bsol;Simon> Besitter en förståelse inom Microsoft Office samt programmeringsspråk som C, PHP, JS, HTML & CSS, samt viss kunskap inom vissa CSS Bibliotek. Certifiering inom engelska av Cambridge University. Har även B körkort och bil." + "<br>" + "<br>" + "C:&bsol;Users&bsol;Simon> Work Experience" + "<br>" + "<br>" + "C:&bsol;Users&bsol;Simon> Volvo Group Trucks Technology 2018-06-11 -> 2018-08-17" + "<br>" + "<br>" + "C:&bsol;Users&bsol;Simon> Som sommarjobb hos GTT VE Automation arbetade jag med en stor variation av uppgifter, allt från gränssnittsutveckling & simulator-stations bygge till sortering och dokumentering av inventarier. Med skiftende arbetsuppgifter var varje dag spännande och unik." + "<br>" + "<br>" + "C:&bsol;Users&bsol;Simon> Tempo Björlanda 2017-06-10 -> 2017-07-15" + "<br>" + "<br>" + "C:&bsol;Users&bsol;Simon> Under sommaren 2017 arbetade jag som kassör hos Tempo Björlanda, en lokal matbutik. Kunden i fokus, snabbhet och att alltid bemöta dem som handlar med en god attityd var prioritet. Under vissa timmar var det klar mycket mer kunder och stress som behövdes hanteras för att undvika köbildning." + "<br>" + "<br>" + "C:&bsol;Users&bsol;Simon> Education" + "<br>" + "<br>" + "C:&bsol;Users&bsol;Simon> Lunds Tekniska Högskola 2018-xx-yy -> 2019-xx-yy" + "<br>" + "<br>" + "C:&bsol;Users&bsol;Simon> Student på Information och Kommunikations programmet under ett läsår innan personliga problem orsakade studieavbrott." + "<br>" + "<br>" + "C:&bsol;Users&bsol;Simon> Chalmers 2020-xx-yy ->" + "<br>" + "<br>" + "C:&bsol;Users&bsol;Simon> Skriven på IT programmet under skrivande datum, min passion för datorteknik fortsätter." + "<br>" + "<br>" + "C:&bsol;Users&bsol;Simon> Medieinstitutet Göteborg 2021-xx-yy ->" + "<br>" + "<br>" + "C:&bsol;Users&bsol;Simon> Studerande på Front-End Developer programmet under skrivande datum, Graphic design is my passion. Planerar att i framtiden arbeta med webbutveckling, här möts både min hobby och mina akademiska intresset i ett."
        document.getElementById("conversation").appendChild(cv)

        document.getElementById("input").value = ""
    } else if (answer == "Github" || answer == "github" || answer == "git" || answer == "Git") {
        /* Create Github respone in correct div */

        let git = document.createElement("div")
        git.innerHTML = '<br> C:&bsol;Users&bsol;Simon> <a href="https://github.com/Vacannot"> GitHub.com/Vacannot </a>'
        document.getElementById("conversation").appendChild(git)
        document.getElementById("input").value = ""
    } else if (answer == "Projects" || answer == "projects") {
        /* Create Projects respone in correct div */
        let git = document.createElement("div")
        git.innerHTML = '<br> C:&bsol;Users&bsol;Simon> <a href="https://github.com/Vacannot"> GitHub.com/Vacannot </a> You can find all my current and past projects on my github profile!'
        document.getElementById("conversation").appendChild(git)
        document.getElementById("input").value = ""
    } else {
        let git = document.createElement("div")
        git.innerHTML = '<br> C:&bsol;Users&bsol;Simon>  That is not recognized as an internal or external command, operable program or batch file.'
        document.getElementById("conversation").appendChild(git)
        document.getElementById("input").value = ""
    }
}