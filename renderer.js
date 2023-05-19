
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
  })
  buttonymt.addEventListener("click", () => {
    // location.href="dlina_otrezka_x_y.html"
    document.getElementById("mainwindow").setAttribute('src', 'yrav_median_triangle.html')
  })
  buttonyppap.addEventListener("click", () => {
    // location.href="dlina_otrezka_x_y.html"
    document.getElementById("mainwindow").setAttribute('src', 'yrav_pramo_per_and_par.html')
  })
  buttonyp.addEventListener("click", () => {
    // location.href="dlina_otrezka_x_y.html"
    document.getElementById("mainwindow").setAttribute('src', 'yrav_pramoy.html')
  })
  buttondvt.addEventListener("click", () => {
    // location.href="dlina_otrezka_x_y.html"
    document.getElementById("mainwindow").setAttribute('src', 'dlina_visot_triangle.html')
  })
  buttonyv.addEventListener("click", () => {
    // location.href="dlina_otrezka_x_y.html"
    document.getElementById("mainwindow").setAttribute('src', 'yrav_visot.html')
  })
  buttontest.addEventListener("click", () => {
    // location.href="dlina_otrezka_x_y.html"
    document.getElementById("mainwindow").setAttribute('src', 'preview.html')
  })
  buttontgpr.addEventListener("click", () => {
    // location.href="dlina_otrezka_x_y.html"
    document.getElementById("mainwindow").setAttribute('src', 'angel_pryam_proekciya.html')
  })
  buttonsoat.addEventListener("click", () => {
    // location.href="dlina_otrezka_x_y.html"
    document.getElementById("mainwindow").setAttribute('src', 'Sides_of_a_triangle.html')
  })
  buttonplos.addEventListener("click", () => {
    // location.href="dlina_otrezka_x_y.html"
    document.getElementById("mainwindow").setAttribute('src', 'ploshad_triangle.html')
  })
  buttondoo.addEventListener("click", () => {
    // location.href="dlina_otrezka_x_y.html"
    document.getElementById("mainwindow").setAttribute('src', 'del_otrezok_otnoshenie.html')
  })
}