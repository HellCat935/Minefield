var tabuleiro = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
]
let bntIDA = 0
let bntIDB = 0

let repeatedNumbers = []
let jogada = 0
let bombas = []
let verificadorDeZeros = ['', ]
let verificadorDeZerosA = ['', ]
let verificadorDeZerosB = ['', ]





function Gerar() {

    let nicknameBox = document.getElementById("BntStart")
    nicknameBox.setAttribute("style","display:none")

    document.getElementById("gameBoard").innerHTML = ""

    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 8; j++) {

            n = '<button ondblclick="OwO(' + bntIDA + ',' + bntIDB + ')" onclick="roud(' + bntIDA + ',' + bntIDB + ')" class="bntBoard" id="' + bntIDA + bntIDB + '" value="0"  name="naobomba"  >0</button>'


            let Numero = (tabuleiro[i][j] = n)
            document.getElementById("gameBoard").innerHTML += `${Numero}`
            bntIDB++

        }
        bntIDB = 0
        bntIDA++
        document.getElementById("gameBoard").innerHTML += "<br>"
    }

}

function roud(boardA, boardB) {




    console.log(String(boardA) + String(boardB))
    if (jogada == 0) {
        for (let b = 0; b < 10; b++) {
            randomIDA = Math.floor(Math.random() * 10)
            randomIDB = Math.floor(Math.random() * 8)

            if (repeatedNumbers.includes(String(randomIDA) + String(randomIDB)) == false && String(randomIDA) + String(randomIDB) != String(boardA) + String(boardB)) {
                repeatedNumbers.push(String(randomIDA) + String(randomIDB))
                document.getElementById(String(randomIDA) + String(randomIDB)).name = "bomba"
                document.getElementById(String(randomIDA) + String(randomIDB)).innerHTML = "*"
                document.getElementById(String(randomIDA) + String(randomIDB)).value = -20

                console.log("randomA" + randomIDA)
                console.log("randomB" + randomIDB)

                //cantos
                if (randomIDA == 0 && randomIDB == 0) {
                    document.getElementById(String(randomIDA) + String(randomIDB + 1)).value = 1 + Number(document.getElementById(String(randomIDA) + String(randomIDB + 1)).value)
                    document.getElementById(String((randomIDA + 1)) + String(randomIDB)).value = 1 + Number(document.getElementById(String((randomIDA + 1)) + String(randomIDB)).value)
                    document.getElementById(String((randomIDA + 1)) + String(randomIDB + 1)).value = 1 + Number(document.getElementById(String((randomIDA + 1)) + String(randomIDB + 1)).value)
                }
                if (randomIDA == 9 && randomIDB == 0) {
                    document.getElementById(String(randomIDA - 1) + String(randomIDB)).value = 1 + Number(document.getElementById(String(randomIDA - 1) + String(randomIDB)).value)
                    document.getElementById(String(randomIDA - 1) + String(randomIDB + 1)).value = 1 + Number(document.getElementById(String(randomIDA - 1) + String(randomIDB + 1)).value)
                    document.getElementById(String(randomIDA) + String(randomIDB + 1)).value = 1 + Number(document.getElementById(String(randomIDA) + String(randomIDB + 1)).value)
                }
                if (randomIDA == 0 && randomIDB == 7) {
                    document.getElementById(String(randomIDA) + String(randomIDB - 1)).value = 1 + Number(document.getElementById(String(randomIDA) + String(randomIDB - 1)).value)
                    document.getElementById(String((randomIDA + 1)) + String(randomIDB - 1)).value = 1 + Number(document.getElementById(String((randomIDA + 1)) + String(randomIDB - 1)).value)
                    document.getElementById(String((randomIDA + 1)) + String(randomIDB)).value = 1 + Number(document.getElementById(String((randomIDA + 1)) + String(randomIDB)).value)
                }
                if (randomIDA == 9 && randomIDB == 7) {
                    document.getElementById(String(randomIDA - 1) + String(randomIDB - 1)).value = 1 + Number(document.getElementById(String(randomIDA - 1) + String(randomIDB - 1)).value)
                    document.getElementById(String(randomIDA - 1) + String(randomIDB)).value = 1 + Number(document.getElementById(String(randomIDA - 1) + String(randomIDB)).value)
                    document.getElementById(String(randomIDA) + String(randomIDB - 1)).value = 1 + Number(document.getElementById(String(randomIDA) + String(randomIDB - 1)).value)
                }
                //lado esquerdo
                if (randomIDA >= 1 && randomIDA <= 8 && randomIDB == 0) {
                    document.getElementById(String(randomIDA - 1) + String(randomIDB)).value = 1 + Number(document.getElementById(String(randomIDA - 1) + String(randomIDB)).value)
                    document.getElementById(String(randomIDA - 1) + String(randomIDB + 1)).value = 1 + Number(document.getElementById(String(randomIDA - 1) + String(randomIDB + 1)).value)
                    document.getElementById(String(randomIDA) + String(randomIDB + 1)).value = 1 + Number(document.getElementById(String(randomIDA) + String(randomIDB + 1)).value)
                    document.getElementById(String((randomIDA + 1)) + String(randomIDB + 1)).value = 1 + Number(document.getElementById(String((randomIDA + 1)) + String(randomIDB + 1)).value)
                    document.getElementById(String((randomIDA + 1)) + String(randomIDB)).value = 1 + Number(document.getElementById(String((randomIDA + 1)) + String(randomIDB)).value)
                }
                //lado direito
                if (randomIDA >= 1 && randomIDA <= 8 && randomIDB == 7) {
                    document.getElementById(String(randomIDA - 1) + String(randomIDB)).value = 1 + Number(document.getElementById(String(randomIDA - 1) + String(randomIDB)).value)
                    document.getElementById(String(randomIDA - 1) + String(randomIDB - 1)).value = 1 + Number(document.getElementById(String(randomIDA - 1) + String(randomIDB - 1)).value)
                    document.getElementById(String(randomIDA) + String(randomIDB - 1)).value = 1 + Number(document.getElementById(String(randomIDA) + String(randomIDB - 1)).value)
                    document.getElementById(String((randomIDA + 1)) + String(randomIDB - 1)).value = 1 + Number(document.getElementById(String((randomIDA + 1)) + String(randomIDB - 1)).value)
                    document.getElementById(String((randomIDA + 1)) + String(randomIDB)).value = 1 + Number(document.getElementById(String((randomIDA + 1)) + String(randomIDB)).value)
                }
                //superior
                if (randomIDA == 0 && randomIDB >= 1 && randomIDB <= 6) {
                    document.getElementById(String(randomIDA) + String(randomIDB - 1)).value = 1 + Number(document.getElementById(String(randomIDA) + String(randomIDB - 1)).value)
                    document.getElementById(String((randomIDA + 1)) + String(randomIDB - 1)).value = 1 + Number(document.getElementById(String((randomIDA + 1)) + String(randomIDB - 1)).value)
                    document.getElementById(String((randomIDA + 1)) + String(randomIDB)).value = 1 + Number(document.getElementById(String((randomIDA + 1)) + String(randomIDB)).value)
                    document.getElementById(String((randomIDA + 1)) + String(randomIDB + 1)).value = 1 + Number(document.getElementById(String((randomIDA + 1)) + String(randomIDB + 1)).value)
                    document.getElementById(String(randomIDA) + String(randomIDB + 1)).value = 1 + Number(document.getElementById(String(randomIDA) + String(randomIDB + 1)).value)
                }
                //inferior
                if (randomIDA == 9 && randomIDB >= 1 && randomIDB <= 6) {
                    document.getElementById(String(randomIDA) + String(randomIDB - 1)).value = 1 + Number(document.getElementById(String(randomIDA) + String(randomIDB - 1)).value)
                    document.getElementById(String(randomIDA - 1) + String(randomIDB - 1)).value = 1 + Number(document.getElementById(String(randomIDA - 1) + String(randomIDB - 1)).value)
                    document.getElementById(String(randomIDA - 1) + String(randomIDB)).value = 1 + Number(document.getElementById(String(randomIDA - 1) + String(randomIDB)).value)
                    document.getElementById(String(randomIDA - 1) + String(randomIDB + 1)).value = 1 + Number(document.getElementById(String(randomIDA - 1) + String(randomIDB + 1)).value)
                    document.getElementById(String(randomIDA) + String(randomIDB + 1)).value = 1 + Number(document.getElementById(String(randomIDA) + String(randomIDB + 1)).value)
                }
                //padrao
                if (randomIDA >= 1 && randomIDA <= 8 && randomIDB >= 1 && randomIDB <= 6) {
                    document.getElementById(String(randomIDA - 1) + String(randomIDB - 1)).value = 1 + Number(document.getElementById(String(randomIDA - 1) + String(randomIDB - 1)).value)
                    document.getElementById(String(randomIDA - 1) + String(randomIDB)).value = 1 + Number(document.getElementById(String(randomIDA - 1) + String(randomIDB)).value)
                    document.getElementById(String(randomIDA - 1) + String(randomIDB + 1)).value = 1 + Number(document.getElementById(String(randomIDA - 1) + String(randomIDB + 1)).value)
                    document.getElementById(String(randomIDA) + String(randomIDB - 1)).value = 1 + Number(document.getElementById(String(randomIDA) + String(randomIDB - 1)).value)
                    document.getElementById(String(randomIDA) + String(randomIDB + 1)).value = 1 + Number(document.getElementById(String(randomIDA) + String(randomIDB + 1)).value)
                    document.getElementById(String(randomIDA + 1) + String(randomIDB - 1)).value = 1 + Number(document.getElementById(String(randomIDA + 1) + String(randomIDB - 1)).value)
                    document.getElementById(String(randomIDA + 1) + String(randomIDB)).value = 1 + Number(document.getElementById(String(randomIDA + 1) + String(randomIDB)).value)
                    document.getElementById(String(randomIDA + 1) + String(randomIDB + 1)).value = 1 + Number(document.getElementById(String(randomIDA + 1) + String(randomIDB + 1)).value)

                }

            } else {
                b--
            }

        }
        jogada++
    }
    if (document.getElementById(String(boardA) + String(boardB)).value == 0 && document.getElementById(String(boardA) + String(boardB)).name == "naobomba") {
        document.getElementById(String(boardA) + String(boardB)).innerHTML = "0"

    } else if (document.getElementById(String(boardA) + String(boardB)).value != 0 && document.getElementById(String(boardA) + String(boardB)).name == "naobomba") {
        document.getElementById(String(boardA) + String(boardB)).innerHTML = Number(document.getElementById(String(boardA) + String(boardB)).value)

    } else if (document.getElementById(String(boardA) + String(boardB)).name == "bomba") {
        document.getElementById(String(boardA) + String(boardB)).innerHTML = "💣"
        alert("Seu tempo")
        location.href = "loser.html"
    }
    if (document.getElementById(String(boardA) + String(boardB)).value == 0) {
        verificadorDeZeros.push(String(boardA) + String(boardB))
        verificadorDeZerosA.push(String(boardA))
        verificadorDeZerosB.push(String(boardB))
        for (let explosão = 0; explosão < verificadorDeZeros.length; explosão++) {
            if (verificadorDeZerosA[explosão] + verificadorDeZerosB[explosão] == "00") {
                if (document.getElementById("01").value == 0 && verificadorDeZeros.includes("01") == false) {
                    verificadorDeZeros.push("01")
                    verificadorDeZerosA.push("0")
                    verificadorDeZerosB.push("1")
                }
                if (document.getElementById("11").value == 0 && verificadorDeZeros.includes("11") == false) {
                    verificadorDeZeros.push("11")
                    verificadorDeZerosA.push("1")
                    verificadorDeZerosB.push("1")
                }
                if (document.getElementById("10").value == 0 && verificadorDeZeros.includes("10") == false) {
                    verificadorDeZeros.push("10")
                    verificadorDeZerosA.push("1")
                    verificadorDeZerosB.push("0")
                }
                document.getElementById("01").innerHTML = document.getElementById("01").value
                document.getElementById("11").innerHTML = document.getElementById("11").value
                document.getElementById("10").innerHTML = document.getElementById("10").value
                document.getElementById("01").className = "bntBoard2"
                document.getElementById("11").className = "bntBoard2"
                document.getElementById("10").className = "bntBoard2"
            }

            if (verificadorDeZerosA[explosão] + verificadorDeZerosB[explosão] == "07") {
                if (document.getElementById("06").value == 0 && verificadorDeZeros.includes("06") == false) {
                    verificadorDeZeros.push("06")
                    verificadorDeZerosA.push("0")
                    verificadorDeZerosB.push("6")
                }
                if (document.getElementById("16").value == 0 && verificadorDeZeros.includes("16") == false) {
                    verificadorDeZeros.push("16")
                    verificadorDeZerosA.push("1")
                    verificadorDeZerosB.push("6")
                }
                if (document.getElementById("17").value == 0 && verificadorDeZeros.includes("17") == false) {
                    verificadorDeZeros.push("17")
                    verificadorDeZerosA.push("1")
                    verificadorDeZerosB.push("7")
                }
                document.getElementById("06").innerHTML = document.getElementById("06").value
                document.getElementById("16").innerHTML = document.getElementById("16").value
                document.getElementById("17").innerHTML = document.getElementById("17").value
                document.getElementById("06").className = "bntBoard2"
                document.getElementById("16").className = "bntBoard2"
                document.getElementById("17").className = "bntBoard2"
            }

            if (verificadorDeZerosA[explosão] + verificadorDeZerosB[explosão] == "90") {
                if (document.getElementById("80").value == 0 && verificadorDeZeros.includes("80") == false) {
                    verificadorDeZeros.push("80")
                    verificadorDeZerosA.push("8")
                    verificadorDeZerosB.push("0")
                }
                if (document.getElementById("81").value == 0 && verificadorDeZeros.includes("81") == false) {
                    verificadorDeZeros.push("81")
                    verificadorDeZerosA.push("8")
                    verificadorDeZerosB.push("1")
                }
                if (document.getElementById("91").value == 0 && verificadorDeZeros.includes("91") == false) {
                    verificadorDeZeros.push("91")
                    verificadorDeZerosA.push("9")
                    verificadorDeZerosB.push("1")
                }
                document.getElementById("80").innerHTML = document.getElementById("80").value
                document.getElementById("81").innerHTML = document.getElementById("81").value
                document.getElementById("91").innerHTML = document.getElementById("91").value
                document.getElementById("80").className = "bntBoard2"
                document.getElementById("81").className = "bntBoard2"
                document.getElementById("91").className = "bntBoard2"
            }

            if (verificadorDeZerosA[explosão] + verificadorDeZerosB[explosão] == "97") {
                if (document.getElementById("96").value == 0 && verificadorDeZeros.includes("96") == false) {
                    verificadorDeZeros.push("96")
                    verificadorDeZerosA.push("9")
                    verificadorDeZerosB.push("6")
                }
                if (document.getElementById("86").value == 0 && verificadorDeZeros.includes("86") == false) {
                    verificadorDeZeros.push("86")
                    verificadorDeZerosA.push("8")
                    verificadorDeZerosB.push("6")
                }
                if (document.getElementById("87").value == 0 && verificadorDeZeros.includes("87") == false) {
                    verificadorDeZeros.push("87")
                    verificadorDeZerosA.push("8")
                    verificadorDeZerosB.push("7")
                }
                document.getElementById("96").innerHTML = document.getElementById("96").value
                document.getElementById("86").innerHTML = document.getElementById("86").value
                document.getElementById("87").innerHTML = document.getElementById("87").value
                document.getElementById("96").className = "bntBoard2"
                document.getElementById("86").className = "bntBoard2"
                document.getElementById("87").className = "bntBoard2"
            }
            //esquerdo
            if (Number(verificadorDeZerosA[explosão]) >= 1 && Number(verificadorDeZerosA[explosão]) <= 8 && Number(verificadorDeZerosB[explosão]) == 0) {
                if (document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]))).value == 0 && verificadorDeZeros.includes(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]))) == false) {
                    verificadorDeZeros.push(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão])))
                    verificadorDeZerosA.push(String(Number(verificadorDeZerosA[explosão]) - 1))
                    verificadorDeZerosB.push(String(Number(verificadorDeZerosB[explosão])))
                }
                if (document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]) + 1)).value == 0 && verificadorDeZeros.includes(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]) + 1)) == false) {
                    verificadorDeZeros.push(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]) + 1))
                    verificadorDeZerosA.push(String(Number(verificadorDeZerosA[explosão]) - 1))
                    verificadorDeZerosB.push(String(Number(verificadorDeZerosB[explosão]) + 1))
                }
                if (document.getElementById(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) + 1)).value == 0 && verificadorDeZeros.includes(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) + 1)) == false) {
                    verificadorDeZeros.push(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) + 1))
                    verificadorDeZerosA.push(String(Number(verificadorDeZerosA[explosão])))
                    verificadorDeZerosB.push(String(Number(verificadorDeZerosB[explosão]) + 1))
                }
                if (document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]) + 1)).value == 0 && verificadorDeZeros.includes(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]) + 1)) == false) {
                    verificadorDeZeros.push(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]) + 1))
                    verificadorDeZerosA.push(String(Number(verificadorDeZerosA[explosão]) + 1))
                    verificadorDeZerosB.push(String(Number(verificadorDeZerosB[explosão]) + 1))
                }
                if (document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]))).value == 0 && verificadorDeZeros.includes(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]))) == false) {
                    verificadorDeZeros.push(String(Number(verificadorDeZerosA[explosão]) + 1) + (String(Number(verificadorDeZerosB[explosão]))))
                    verificadorDeZerosA.push(String(Number(verificadorDeZerosA[explosão]) + 1))
                    verificadorDeZerosB.push(String(Number(verificadorDeZerosB[explosão])))
                }
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]))).innerHTML = document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]))).value
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]) + 1)).innerHTML = document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]) + 1)).value
                document.getElementById(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) + 1)).innerHTML = document.getElementById(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) + 1)).value
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]) + 1)).innerHTML = document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]) + 1)).value
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]))).innerHTML = document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]))).value
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]))).className = "bntBoard2"
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]) + 1)).className = "bntBoard2"
                document.getElementById(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) + 1)).className = "bntBoard2"
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]) + 1)).className = "bntBoard2"
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]))).className = "bntBoard2"
            }
            //direito
            if (Number(verificadorDeZerosA[explosão]) >= 1 && Number(verificadorDeZerosA[explosão]) <= 8 && Number(verificadorDeZerosB[explosão]) == 7) {
                if (document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]))).value == 0 && verificadorDeZeros.includes(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]))) == false) {
                    verificadorDeZeros.push(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão])))
                    verificadorDeZerosA.push(String(Number(verificadorDeZerosA[explosão]) - 1))
                    verificadorDeZerosB.push(String(Number(verificadorDeZerosB[explosão])))
                }
                if (document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]) - 1)).value == 0 && verificadorDeZeros.includes(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]) - 1)) == false) {
                    verificadorDeZeros.push(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]) - 1))
                    verificadorDeZerosA.push(String(Number(verificadorDeZerosA[explosão]) - 1))
                    verificadorDeZerosB.push(String(Number(verificadorDeZerosB[explosão]) - 1))
                }
                if (document.getElementById(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) - 1)).value == 0 && verificadorDeZeros.includes(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) - 1)) == false) {
                    verificadorDeZeros.push(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) - 1))
                    verificadorDeZerosA.push(String(Number(verificadorDeZerosA[explosão])))
                    verificadorDeZerosB.push(String(Number(verificadorDeZerosB[explosão]) - 1))
                }
                if (document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]) - 1)).value == 0 && verificadorDeZeros.includes(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]) - 1)) == false) {
                    verificadorDeZeros.push(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]) - 1))
                    verificadorDeZerosA.push(String(Number(verificadorDeZerosA[explosão]) + 1))
                    verificadorDeZerosB.push(String(Number(verificadorDeZerosB[explosão]) - 1))
                }
                if (document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]))).value == 0 && verificadorDeZeros.includes(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]))) == false) {
                    verificadorDeZeros.push(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão])))
                    verificadorDeZerosA.push(String(Number(verificadorDeZerosA[explosão]) + 1))
                    verificadorDeZerosB.push(String(Number(verificadorDeZerosB[explosão])))
                }

                document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]))).innerHTML = document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]))).value
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]) - 1)).innerHTML = document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]) - 1)).value
                document.getElementById(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) - 1)).innerHTML = document.getElementById(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) - 1)).value
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]) - 1)).innerHTML = document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]) - 1)).value
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]))).innerHTML = document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]))).value
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]))).className = "bntBoard2"
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]) - 1)).className = "bntBoard2"
                document.getElementById(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) - 1)).className = "bntBoard2"
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]) - 1)).className = "bntBoard2"
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]))).className = "bntBoard2"
            }
            //superior
            if (Number(verificadorDeZerosA[explosão]) == 0 && Number(verificadorDeZerosB[explosão]) >= 1 && Number(verificadorDeZerosB[explosão]) <= 6) {
                if (document.getElementById(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) - 1)).value == 0 && verificadorDeZeros.includes(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) - 1)) == false) {
                    verificadorDeZeros.push(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) - 1))
                    verificadorDeZerosA.push(String(Number(verificadorDeZerosA[explosão])))
                    verificadorDeZerosB.push(String(Number(verificadorDeZerosB[explosão]) - 1))
                }
                if (document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]) - 1)).value == 0 && verificadorDeZeros.includes(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]) - 1)) == false) {
                    verificadorDeZeros.push(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]) - 1))
                    verificadorDeZerosA.push(String(Number(verificadorDeZerosA[explosão]) + 1))
                    verificadorDeZerosB.push(String(Number(verificadorDeZerosB[explosão]) - 1))
                }
                if (document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]))).value == 0 && verificadorDeZeros.includes(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]))) == false) {
                    verificadorDeZeros.push(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão])))
                    verificadorDeZerosA.push(String(Number(verificadorDeZerosA[explosão]) + 1))
                    verificadorDeZerosB.push(String(Number(verificadorDeZerosB[explosão])))
                }
                if (document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]) + 1)).value == 0 && verificadorDeZeros.includes(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]) + 1)) == false) {
                    verificadorDeZeros.push(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]) + 1))
                    verificadorDeZerosA.push(String(Number(verificadorDeZerosA[explosão]) + 1))
                    verificadorDeZerosB.push(String(Number(verificadorDeZerosB[explosão]) + 1))
                }
                if (document.getElementById(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) + 1)).value == 0 && verificadorDeZeros.includes(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) + 1)) == false) {
                    verificadorDeZeros.push(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) + 1))
                    verificadorDeZerosA.push(String(Number(verificadorDeZerosA[explosão])))
                    verificadorDeZerosB.push(String(Number(verificadorDeZerosB[explosão]) + 1))
                }

                document.getElementById(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) - 1)).innerHTML = document.getElementById(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) - 1)).value
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]) - 1)).innerHTML = document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]) - 1)).value
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]))).innerHTML = document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]))).value
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]) + 1)).innerHTML = document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]) + 1)).value
                document.getElementById(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) + 1)).innerHTML = document.getElementById(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) + 1)).value
                document.getElementById(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) - 1)).className = "bntBoard2"
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]) - 1)).className = "bntBoard2"
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]))).className = "bntBoard2"
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]) + 1)).className = "bntBoard2"
                document.getElementById(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) + 1)).className = "bntBoard2"
            }
            //inferior
            if (Number(verificadorDeZerosA[explosão]) == 9 && Number(verificadorDeZerosB[explosão]) >= 1 && Number(verificadorDeZerosB[explosão]) <= 6) {
                if (document.getElementById(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) - 1)).value == 0 && verificadorDeZeros.includes(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) - 1)) == false) {
                    verificadorDeZeros.push(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) - 1))
                    verificadorDeZerosA.push(String(Number(verificadorDeZerosA[explosão])))
                    verificadorDeZerosB.push(String(Number(verificadorDeZerosB[explosão]) - 1))
                }
                if (document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]) - 1)).value == 0 && verificadorDeZeros.includes(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]) - 1)) == false) {
                    verificadorDeZeros.push(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]) - 1))
                    verificadorDeZerosA.push(String(Number(verificadorDeZerosA[explosão]) - 1))
                    verificadorDeZerosB.push(String(Number(verificadorDeZerosB[explosão]) - 1))
                }
                if (document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]))).value == 0 && verificadorDeZeros.includes(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]))) == false) {
                    verificadorDeZeros.push(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão])))
                    verificadorDeZerosA.push(String(Number(verificadorDeZerosA[explosão]) - 1))
                    verificadorDeZerosB.push(String(Number(verificadorDeZerosB[explosão])))
                }
                if (document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]) + 1)).value == 0 && verificadorDeZeros.includes(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]) + 1)) == false) {
                    verificadorDeZeros.push(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]) + 1))
                    verificadorDeZerosA.push(String(Number(verificadorDeZerosA[explosão]) - 1))
                    verificadorDeZerosB.push(String(Number(verificadorDeZerosB[explosão]) + 1))
                }
                if (document.getElementById(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) + 1)).value == 0 && verificadorDeZeros.includes(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) + 1)) == false) {
                    verificadorDeZeros.push(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) + 1))
                    verificadorDeZerosA.push(String(Number(verificadorDeZerosA[explosão])))
                    verificadorDeZerosB.push(String(Number(verificadorDeZerosB[explosão]) + 1))
                }

                document.getElementById(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) - 1)).innerHTML = document.getElementById(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) - 1)).value
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]) - 1)).innerHTML = document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]) - 1)).value
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]))).innerHTML = document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]))).value
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]) + 1)).innerHTML = document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]) + 1)).value
                document.getElementById(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) + 1)).innerHTML = document.getElementById(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) + 1)).value
                document.getElementById(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) - 1)).className = "bntBoard2"
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]) - 1)).className = "bntBoard2"
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]))).className = "bntBoard2"
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]) + 1)).className = "bntBoard2"
                document.getElementById(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) + 1)).className = "bntBoard2"
            } //padrao
            if (Number(verificadorDeZerosA[explosão]) >= 1 && Number(verificadorDeZerosA[explosão]) <= 8 && Number(verificadorDeZerosB[explosão]) >= 1 && Number(verificadorDeZerosB[explosão]) <= 6) {
                if (document.getElementById(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) - 1)).value == 0 && verificadorDeZeros.includes(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) - 1)) == false) {
                    verificadorDeZeros.push(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) - 1))
                    verificadorDeZerosA.push(String(Number(verificadorDeZerosA[explosão])))
                    verificadorDeZerosB.push(String(Number(verificadorDeZerosB[explosão]) - 1))
                }
                if (document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]) - 1)).value == 0 && verificadorDeZeros.includes(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]) - 1)) == false) {
                    verificadorDeZeros.push(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]) - 1))
                    verificadorDeZerosA.push(String(Number(verificadorDeZerosA[explosão]) - 1))
                    verificadorDeZerosB.push(String(Number(verificadorDeZerosB[explosão]) - 1))
                }
                if (document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]))).value == 0 && verificadorDeZeros.includes(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]))) == false) {
                    verificadorDeZeros.push(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão])))
                    verificadorDeZerosA.push(String(Number(verificadorDeZerosA[explosão]) - 1))
                    verificadorDeZerosB.push(String(Number(verificadorDeZerosB[explosão])))
                }
                if (document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]) + 1)).value == 0 && verificadorDeZeros.includes(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]) + 1)) == false) {
                    verificadorDeZeros.push(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]) + 1))
                    verificadorDeZerosA.push(String(Number(verificadorDeZerosA[explosão]) - 1))
                    verificadorDeZerosB.push(String(Number(verificadorDeZerosB[explosão]) + 1))
                }
                if (document.getElementById(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) + 1)).value == 0 && verificadorDeZeros.includes(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) + 1)) == false) {
                    verificadorDeZeros.push(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) + 1))
                    verificadorDeZerosA.push(String(Number(verificadorDeZerosA[explosão])))
                    verificadorDeZerosB.push(String(Number(verificadorDeZerosB[explosão]) + 1))
                }
                if (document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]))).value == 0 && verificadorDeZeros.includes(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]))) == false) {
                    verificadorDeZeros.push(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão])))
                    verificadorDeZerosA.push(String(Number(verificadorDeZerosA[explosão]) + 1))
                    verificadorDeZerosB.push(String(Number(verificadorDeZerosB[explosão])))
                }
                if (document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]) + 1)).value == 0 && verificadorDeZeros.includes(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]) + 1)) == false) {
                    verificadorDeZeros.push(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]) + 1))
                    verificadorDeZerosA.push(String(Number(verificadorDeZerosA[explosão]) + 1))
                    verificadorDeZerosB.push(String(Number(verificadorDeZerosB[explosão]) + 1))
                }
                if (document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]) - 1)).value == 0 && verificadorDeZeros.includes(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]) - 1)) == false) {
                    verificadorDeZeros.push(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]) - 1))
                    verificadorDeZerosA.push(String(Number(verificadorDeZerosA[explosão]) + 1))
                    verificadorDeZerosB.push(String(Number(verificadorDeZerosB[explosão]) - 1))
                }

                document.getElementById(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) - 1)).innerHTML = document.getElementById(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) - 1)).value
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]) - 1)).innerHTML = document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]) - 1)).value
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]))).innerHTML = document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]))).value
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]) + 1)).innerHTML = document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]) + 1)).value
                document.getElementById(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) + 1)).innerHTML = document.getElementById(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) + 1)).value
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]))).innerHTML = document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]))).value
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]) + 1)).innerHTML = document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]) + 1)).value
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]) - 1)).innerHTML = document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]) - 1)).value
                document.getElementById(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) - 1)).className = "bntBoard2"
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]) - 1)).className = "bntBoard2"
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]))).className = "bntBoard2"
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) - 1) + String(Number(verificadorDeZerosB[explosão]) + 1)).className = "bntBoard2"
                document.getElementById(String(Number(verificadorDeZerosA[explosão])) + String(Number(verificadorDeZerosB[explosão]) + 1)).className = "bntBoard2"
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]))).className = "bntBoard2"
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]) + 1)).className = "bntBoard2"
                document.getElementById(String(Number(verificadorDeZerosA[explosão]) + 1) + String(Number(verificadorDeZerosB[explosão]) - 1)).className = "bntBoard2"


            }

        }

}

document.getElementById(String(boardA) + String(boardB)).className = "bntBoard2"
let b = document.getElementsByClassName("bntBoard2")
if(b.length == 70){
    alert("voce venceu")
    BackToMenu()
}
}

function BackToMenu(){
    location.href = "Menu.html"
}

function easy(){
    location.href = "game1.html"
}
function normal(){
    location.href = "game2.html"
}
function hard(){
    location.href = "game3.html"
}

