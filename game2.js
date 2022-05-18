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

    for (var i = 0; i < 18; i++) {
        for (var j = 0; j < 14; j++) {

            n = '<button onclick="roud(' + bntIDA + ',' + bntIDB + ')" class="bntBoard" id="' + bntIDA + bntIDB + '" value="0"  name="naobomba"  >0</button>'


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
        for (let b = 0; b < 40; b++) {
            randomIDA = Math.floor(Math.random() * 18)
            randomIDB = Math.floor(Math.random() * 14)

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
                if (randomIDA == 17 && randomIDB == 0) {
                    document.getElementById(String(randomIDA - 1) + String(randomIDB)).value = 1 + Number(document.getElementById(String(randomIDA - 1) + String(randomIDB)).value)
                    document.getElementById(String(randomIDA - 1) + String(randomIDB + 1)).value = 1 + Number(document.getElementById(String(randomIDA - 1) + String(randomIDB + 1)).value)
                    document.getElementById(String(randomIDA) + String(randomIDB + 1)).value = 1 + Number(document.getElementById(String(randomIDA) + String(randomIDB + 1)).value)
                }
                if (randomIDA == 0 && randomIDB == 13) {
                    document.getElementById(String(randomIDA) + String(randomIDB - 1)).value = 1 + Number(document.getElementById(String(randomIDA) + String(randomIDB - 1)).value)
                    document.getElementById(String((randomIDA + 1)) + String(randomIDB - 1)).value = 1 + Number(document.getElementById(String((randomIDA + 1)) + String(randomIDB - 1)).value)
                    document.getElementById(String((randomIDA + 1)) + String(randomIDB)).value = 1 + Number(document.getElementById(String((randomIDA + 1)) + String(randomIDB)).value)
                }
                if (randomIDA == 17 && randomIDB == 13) {
                    document.getElementById(String(randomIDA - 1) + String(randomIDB - 1)).value = 1 + Number(document.getElementById(String(randomIDA - 1) + String(randomIDB - 1)).value)
                    document.getElementById(String(randomIDA - 1) + String(randomIDB)).value = 1 + Number(document.getElementById(String(randomIDA - 1) + String(randomIDB)).value)
                    document.getElementById(String(randomIDA) + String(randomIDB - 1)).value = 1 + Number(document.getElementById(String(randomIDA) + String(randomIDB - 1)).value)
                }
                //lado esquerdo
                if (randomIDA >= 1 && randomIDA <= 16 && randomIDB == 0) {
                    document.getElementById(String(randomIDA - 1) + String(randomIDB)).value = 1 + Number(document.getElementById(String(randomIDA - 1) + String(randomIDB)).value)
                    document.getElementById(String(randomIDA - 1) + String(randomIDB + 1)).value = 1 + Number(document.getElementById(String(randomIDA - 1) + String(randomIDB + 1)).value)
                    document.getElementById(String(randomIDA) + String(randomIDB + 1)).value = 1 + Number(document.getElementById(String(randomIDA) + String(randomIDB + 1)).value)
                    document.getElementById(String((randomIDA + 1)) + String(randomIDB + 1)).value = 1 + Number(document.getElementById(String((randomIDA + 1)) + String(randomIDB + 1)).value)
                    document.getElementById(String((randomIDA + 1)) + String(randomIDB)).value = 1 + Number(document.getElementById(String((randomIDA + 1)) + String(randomIDB)).value)
                }
                //lado direito
                if (randomIDA >= 1 && randomIDA <= 16 && randomIDB == 13) {
                    document.getElementById(String(randomIDA - 1) + String(randomIDB)).value = 1 + Number(document.getElementById(String(randomIDA - 1) + String(randomIDB)).value)
                    document.getElementById(String(randomIDA - 1) + String(randomIDB - 1)).value = 1 + Number(document.getElementById(String(randomIDA - 1) + String(randomIDB - 1)).value)
                    document.getElementById(String(randomIDA) + String(randomIDB - 1)).value = 1 + Number(document.getElementById(String(randomIDA) + String(randomIDB - 1)).value)
                    document.getElementById(String((randomIDA + 1)) + String(randomIDB - 1)).value = 1 + Number(document.getElementById(String((randomIDA + 1)) + String(randomIDB - 1)).value)
                    document.getElementById(String((randomIDA + 1)) + String(randomIDB)).value = 1 + Number(document.getElementById(String((randomIDA + 1)) + String(randomIDB)).value)
                }
                //superior
                if (randomIDA == 0 && randomIDB >= 1 && randomIDB <= 12) {
                    document.getElementById(String(randomIDA) + String(randomIDB - 1)).value = 1 + Number(document.getElementById(String(randomIDA) + String(randomIDB - 1)).value)
                    document.getElementById(String((randomIDA + 1)) + String(randomIDB - 1)).value = 1 + Number(document.getElementById(String((randomIDA + 1)) + String(randomIDB - 1)).value)
                    document.getElementById(String((randomIDA + 1)) + String(randomIDB)).value = 1 + Number(document.getElementById(String((randomIDA + 1)) + String(randomIDB)).value)
                    document.getElementById(String((randomIDA + 1)) + String(randomIDB + 1)).value = 1 + Number(document.getElementById(String((randomIDA + 1)) + String(randomIDB + 1)).value)
                    document.getElementById(String(randomIDA) + String(randomIDB + 1)).value = 1 + Number(document.getElementById(String(randomIDA) + String(randomIDB + 1)).value)
                }
                //inferior
                if (randomIDA == 17 && randomIDB >= 1 && randomIDB <= 12) {
                    document.getElementById(String(randomIDA) + String(randomIDB - 1)).value = 1 + Number(document.getElementById(String(randomIDA) + String(randomIDB - 1)).value)
                    document.getElementById(String(randomIDA - 1) + String(randomIDB - 1)).value = 1 + Number(document.getElementById(String(randomIDA - 1) + String(randomIDB - 1)).value)
                    document.getElementById(String(randomIDA - 1) + String(randomIDB)).value = 1 + Number(document.getElementById(String(randomIDA - 1) + String(randomIDB)).value)
                    document.getElementById(String(randomIDA - 1) + String(randomIDB + 1)).value = 1 + Number(document.getElementById(String(randomIDA - 1) + String(randomIDB + 1)).value)
                    document.getElementById(String(randomIDA) + String(randomIDB + 1)).value = 1 + Number(document.getElementById(String(randomIDA) + String(randomIDB + 1)).value)
                }
                //padrao
                if (randomIDA >= 1 && randomIDA <= 16 && randomIDB >= 1 && randomIDB <= 12) {
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

            if (verificadorDeZerosA[explosão] + verificadorDeZerosB[explosão] == "013") {
                if (document.getElementById("012").value == 0 && verificadorDeZeros.includes("012") == false) {
                    verificadorDeZeros.push("012")
                    verificadorDeZerosA.push("0")
                    verificadorDeZerosB.push("12")
                }
                if (document.getElementById("112").value == 0 && verificadorDeZeros.includes("112") == false) {
                    verificadorDeZeros.push("112")
                    verificadorDeZerosA.push("1")
                    verificadorDeZerosB.push("12")
                }
                if (document.getElementById("113").value == 0 && verificadorDeZeros.includes("113") == false) {
                    verificadorDeZeros.push("113")
                    verificadorDeZerosA.push("1")
                    verificadorDeZerosB.push("13")
                }
                document.getElementById("012").innerHTML = document.getElementById("012").value
                document.getElementById("112").innerHTML = document.getElementById("112").value
                document.getElementById("113").innerHTML = document.getElementById("113").value
                document.getElementById("012").className = "bntBoard2"
                document.getElementById("112").className = "bntBoard2"
                document.getElementById("113").className = "bntBoard2"
            }

            if (verificadorDeZerosA[explosão] + verificadorDeZerosB[explosão] == "170") {
                if (document.getElementById("160").value == 0 && verificadorDeZeros.includes("160") == false) {
                    verificadorDeZeros.push("160")
                    verificadorDeZerosA.push("16")
                    verificadorDeZerosB.push("0")
                }
                if (document.getElementById("161").value == 0 && verificadorDeZeros.includes("161") == false) {
                    verificadorDeZeros.push("161")
                    verificadorDeZerosA.push("16")
                    verificadorDeZerosB.push("1")
                }
                if (document.getElementById("171").value == 0 && verificadorDeZeros.includes("171") == false) {
                    verificadorDeZeros.push("171")
                    verificadorDeZerosA.push("17")
                    verificadorDeZerosB.push("1")
                }
                document.getElementById("160").innerHTML = document.getElementById("160").value
                document.getElementById("161").innerHTML = document.getElementById("161").value
                document.getElementById("171").innerHTML = document.getElementById("171").value
                document.getElementById("160").className = "bntBoard2"
                document.getElementById("161").className = "bntBoard2"
                document.getElementById("171").className = "bntBoard2"
            }

            if (verificadorDeZerosA[explosão] + verificadorDeZerosB[explosão] == "1713") {
                if (document.getElementById("1613").value == 0 && verificadorDeZeros.includes("1613") == false) {
                    verificadorDeZeros.push("1613")
                    verificadorDeZerosA.push("16")
                    verificadorDeZerosB.push("13")
                }
                if (document.getElementById("1612").value == 0 && verificadorDeZeros.includes("1612") == false) {
                    verificadorDeZeros.push("1612")
                    verificadorDeZerosA.push("16")
                    verificadorDeZerosB.push("12")
                }
                if (document.getElementById("1712").value == 0 && verificadorDeZeros.includes("1712") == false) {
                    verificadorDeZeros.push("1712")
                    verificadorDeZerosA.push("17")
                    verificadorDeZerosB.push("12")
                }
                document.getElementById("1613").innerHTML = document.getElementById("1613").value
                document.getElementById("1612").innerHTML = document.getElementById("1612").value
                document.getElementById("1712").innerHTML = document.getElementById("1712").value
                document.getElementById("1613").className = "bntBoard2"
                document.getElementById("1612").className = "bntBoard2"
                document.getElementById("1712").className = "bntBoard2"
            }
            //esquerdo
            if (Number(verificadorDeZerosA[explosão]) >= 1 && Number(verificadorDeZerosA[explosão]) <= 16 && Number(verificadorDeZerosB[explosão]) == 0) {
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
            if (Number(verificadorDeZerosA[explosão]) >= 1 && Number(verificadorDeZerosA[explosão]) <= 16 && Number(verificadorDeZerosB[explosão]) == 13) {
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
            if (Number(verificadorDeZerosA[explosão]) == 0 && Number(verificadorDeZerosB[explosão]) >= 1 && Number(verificadorDeZerosB[explosão]) <= 12) {
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
            if (Number(verificadorDeZerosA[explosão]) == 17 && Number(verificadorDeZerosB[explosão]) >= 1 && Number(verificadorDeZerosB[explosão]) <= 12) {
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
            if (Number(verificadorDeZerosA[explosão]) >= 1 && Number(verificadorDeZerosA[explosão]) <= 16 && Number(verificadorDeZerosB[explosão]) >= 1 && Number(verificadorDeZerosB[explosão]) <= 12) {
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
if(b.length == 248){
    alert("voce venceu")
}
}

function BackToMenu(){
    location.href = "Menu.html"
}

function easy(){
    location.href = "game1.html"
}
function normal(){
    location.href = ""
}
function hard(){
    location.href = ""
}

