
// document.getElementById("preview").onclick = function () {
//     document.getElementById("mainwindow").setAttribute('src', 'preview.html')
// }

window.onload = () => {
  console.log(window);
  const buttonsFrame = document.getElementById("buttonsFrame")
  const buttondoxy = buttonsFrame.contentDocument.documentElement.getElementsByTagName("button")[1]
  const buttonsoat = buttonsFrame.contentDocument.documentElement.getElementsByTagName("button")[2]
  const buttontgpr = buttonsFrame.contentDocument.documentElement.getElementsByTagName("button")[3]
  const buttonplos = buttonsFrame.contentDocument.documentElement.getElementsByTagName("button")[4]
  const buttondoo = buttonsFrame.contentDocument.documentElement.getElementsByTagName("button")[5]
  const buttonymt = buttonsFrame.contentDocument.documentElement.getElementsByTagName("button")[6]
  const buttonyp = buttonsFrame.contentDocument.documentElement.getElementsByTagName("button")[7]
  const buttonyv = buttonsFrame.contentDocument.documentElement.getElementsByTagName("button")[8]
  const buttondvt = buttonsFrame.contentDocument.documentElement.getElementsByTagName("button")[9]
  const buttonyppap = buttonsFrame.contentDocument.documentElement.getElementsByTagName("button")[10]
  const buttontest = buttonsFrame.contentDocument.documentElement.getElementsByTagName("button")[0]
  
  // console.log(buttonFrame);
  buttondoxy.addEventListener("click", () => {
    // location.href="dlina_otrezka_x_y.html"
    document.getElementById("mainwindow").setAttribute('src', 'dlina_otrezka_x_y.html')
    for (let i = 0; i < 11; i++) {
      test =buttonsFrame.contentDocument.documentElement.getElementsByTagName("button")[i].classList.remove("active")
    }
    buttondoxy.classList.add("active")
  })
  buttonymt.addEventListener("click", () => {
    // location.href="dlina_otrezka_x_y.html"
    document.getElementById("mainwindow").setAttribute('src', 'yrav_median_triangle.html')
    for (let i = 0; i < 11; i++) {
      test =buttonsFrame.contentDocument.documentElement.getElementsByTagName("button")[i].classList.remove("active")
    }
    buttonymt.classList.add("active")
  })
  buttonyppap.addEventListener("click", () => {
    // location.href="dlina_otrezka_x_y.html"
    document.getElementById("mainwindow").setAttribute('src', 'yrav_pramo_per_and_par.html')
    for (let i = 0; i < 11; i++) {
      test =buttonsFrame.contentDocument.documentElement.getElementsByTagName("button")[i].classList.remove("active")
    }
    buttonyppap.classList.add("active")
  })
  buttonyp.addEventListener("click", () => {
    // location.href="dlina_otrezka_x_y.html"
    document.getElementById("mainwindow").setAttribute('src', 'yrav_pramoy.html')
    for (let i = 0; i < 11; i++) {
      test =buttonsFrame.contentDocument.documentElement.getElementsByTagName("button")[i].classList.remove("active")
    }
    buttonyp.classList.add("active")
  })
  buttondvt.addEventListener("click", () => {
    // location.href="dlina_otrezka_x_y.html"
    document.getElementById("mainwindow").setAttribute('src', 'dlina_visot_triangle.html')
    for (let i = 0; i < 11; i++) {
      test =buttonsFrame.contentDocument.documentElement.getElementsByTagName("button")[i].classList.remove("active")
    }
    buttondvt.classList.add("active")
  })
  buttonyv.addEventListener("click", () => {
    // location.href="dlina_otrezka_x_y.html"
    document.getElementById("mainwindow").setAttribute('src', 'yrav_visot.html')
    for (let i = 0; i < 11; i++) {
      test =buttonsFrame.contentDocument.documentElement.getElementsByTagName("button")[i].classList.remove("active")
    }
    buttonyv.classList.add("active")
  })
  buttontest.addEventListener("click", () => {
    // location.href="dlina_otrezka_x_y.html"
    document.getElementById("mainwindow").setAttribute('src', 'preview.html')
    for (let i = 0; i < 11; i++) {
      test =buttonsFrame.contentDocument.documentElement.getElementsByTagName("button")[i].classList.remove("active")
    }
    buttontest.classList.add("active")
  })
  buttontgpr.addEventListener("click", () => {
    // location.href="dlina_otrezka_x_y.html"
    document.getElementById("mainwindow").setAttribute('src', 'angel_pryam_proekciya.html')
    for (let i = 0; i < 11; i++) {
      test =buttonsFrame.contentDocument.documentElement.getElementsByTagName("button")[i].classList.remove("active")
    }
    buttontgpr.classList.add("active")
  })
  buttonsoat.addEventListener("click", () => {
    // location.href="dlina_otrezka_x_y.html"
    document.getElementById("mainwindow").setAttribute('src', 'Sides_of_a_triangle.html')
    for (let i = 0; i < 11; i++) {
      test =buttonsFrame.contentDocument.documentElement.getElementsByTagName("button")[i].classList.remove("active")
    }
    buttonsoat.classList.add("active")
  })
  buttonplos.addEventListener("click", () => {
    // location.href="dlina_otrezka_x_y.html"
    document.getElementById("mainwindow").setAttribute('src', 'ploshad_triangle.html')
    for (let i = 0; i < 11; i++) {
      test =buttonsFrame.contentDocument.documentElement.getElementsByTagName("button")[i].classList.remove("active")
    }
    buttonplos.classList.add("active")
  })
  buttondoo.addEventListener("click", () => {
    // location.href="dlina_otrezka_x_y.html"
    document.getElementById("mainwindow").setAttribute('src', 'del_otrezok_otnoshenie.html')
    for (let i = 0; i < 11; i++) {
      test =buttonsFrame.contentDocument.documentElement.getElementsByTagName("button")[i].classList.remove("active")
    }
    buttondoo.classList.add("active")
  })
}