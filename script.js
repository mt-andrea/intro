function navigation(id) {
    $("nav").find(".active").removeClass("active")
    $("nav").find(id).addClass("active")
    $("#trunk").find("section").addClass("hidden")
    $($(id).attr("href")).removeClass("hidden")
}
$("#nav1").click(() => navigation("#nav1"))
$("#nav2").click(() => navigation("#nav2"))
$("#nav3").click(() => navigation("#nav3"))
$("#nav4").click(() => navigation("#nav4"))
$("#nav5").click(() => navigation("#nav5"))
/*$("#nav6").click(() => navigation("#nav6"))*/

$("#meme").click(() => {
    $("#galeria").find(".active").removeClass("active")
    $("#galeria").find("#meme").addClass("active")
    let meme = ["Bits", "Classless society", "Programming is like sex", "First-order 1", "First-order 2", "First-order 3", "First-order 4", "First-order 5", "First-order 6", "Database administrator", "Kidnappers", "Goodbye World", "Inheritance", "Programers and glasses", "Knock knock Java", "Recursion"]
    let txt = ""
    $("#kepek").html(txt)
    for (let i = 0; i < meme.length; i++) {
        if (i == 11 || i == 12 || i == 13 || i == 14 || i == 15) {
            txt += "<figure title='" + meme[i] + "' class='image'><a target='_blank' href='kepek/galery/meme/" + meme[i] + ".jpg'><img src='kepek/galery/meme/" + meme[i] + ".jpg'></a><figcaption>" + (i + 1) + " " + meme[i] + "</figcaption></figure>"

        } else {
            txt += "<figure title='" + meme[i] + "' class='image wide'><a target='_blank' href='kepek/galery/meme/" + meme[i] + ".jpg'><img src='kepek/galery/meme/" + meme[i] + ".jpg'></a><figcaption>" + (i + 1) + " " + meme[i] + "</figcaption></figure>"
        }
    }
    $("#kepek").html(txt)
})
$("#nat").click(() => {
    $("#galeria").find(".active").removeClass("active")
    $("#galeria").find("#nat").addClass("active")
    let nat = ["Crocus", "Roses", "Fern", "Green", "Hibiscus", "Hiking", "Love", "Pansy", "Sunset", "Eged", "Sunshine", "Park"]
    let txt = ""
    $("#kepek").html(txt)
    for (let i = 0; i < nat.length; i++) {
        if (i == 9 || i == 11 || i == 10) {
            txt += "<figure title='" + nat[i] + "' class='image wide'><a target='_blank' href='kepek/galery/nat/" + nat[i] + ".jpg'><img src='kepek/galery/nat/" + nat[i] + ".jpg'></a><figcaption>" + (i + 1) + " " + nat[i] + "</figcaption></figure>"
        } else {
            txt += "<figure title='" + nat[i] + "' class='image'><a target='_blank' href='kepek/galery/nat/" + nat[i] + ".jpg'><img src='kepek/galery/nat/" + nat[i] + ".jpg'></a><figcaption>" + (i + 1) + " " + nat[i] + "</figcaption></figure>"
        }
    }
    $("#kepek").html(txt)
})
$("#cic").click(() => {
    $("#galeria").find(".active").removeClass("active")
    $("#galeria").find("#cic").addClass("active")
    let cic = ["Calm before the storm", "Cicmarek az ablakban", "Cicmarek nem hagy tanulni", "Cicmarek", "Paca alszik", "Paca", "Rossz csontok", "Szekfoglalo", "Aaaawwww"]
    let txt = ""
    $("#kepek").html(txt)
    for (let i = 0; i < cic.length; i++) {
        if (i == 2 || i == 3 || i == 6 || i == 7) {
            txt += "<figure title='" + cic[i] + "' class='image wide'><a target='_blank' href='kepek/galery/cic/" + cic[i] + ".jpg'><img src='kepek/galery/cic/" + cic[i] + ".jpg'></a><figcaption>" + (i + 1) + " " + cic[i] + "</figcaption></figure>"
        } else {
            txt += "<figure title='" + cic[i] + "' class='image'><a target='_blank' href='kepek/galery/cic/" + cic[i] + ".jpg'><img src='kepek/galery/cic/" + cic[i] + ".jpg'></a><figcaption>" + (i + 1) + " " + cic[i] + "</figcaption></figure>"
        }
    }
    $("#kepek").html(txt)
})
function scroll(id, target) {
    $("#vid").find(".active").removeClass("active")
    $(id).addClass("active")
    $("#vid").find("div").addClass("hidden")
    $(target).removeClass("hidden")
}
$("#btn1").click(() => scroll("#btn1", "#pg1"))
$("#btn2").click(() => scroll("#btn2", "#pg2"))
$("#btn3").click(() => scroll("#btn3", "#pg3"))
/*function formCheck() {
    let isReady = false
    if ($("#nev").val() == '') {
        alert("Kérem adja meg a nevét!")
    } else {
        isReady = true
    }
    if ($("#telefon").val() == '') {
        alert("Kérem adja meg a telefonszámát!")
    } else {
        isReady = true
    }
    if ($("#email").val() == '') {
        alert("Kérem adja meg a e-mail címét!")
    } else {
        isReady = true
    }
    if ($("#uzi").val() == '') {
        alert("Kérem adjon meg üzenetet!")
    }
    return isReady
}
$("#kuld").click(() => {
    if (formCheck()) {
        $("form").prop("disabled", true)
        $("table").removeClass("hidden")
        let txt = "<tr>"
        txt += "<td>Név: </td><td>" + $("#nev").val() + "</td></tr>"
        txt += "<tr><td>Telefon: </td><td>" + $("#telefon").val() + "</td></tr>"
        txt += "<tr><td>Email: </td><td>" + $("#email").val() + "</td></tr>"
        txt += "<tr><td>Üzenet: </td><td>" + $("#uzi").val() + "</td></tr>"
        $("table").append(txt)
    }
})*/
