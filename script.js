// Zadanie 2
// Odpowiedź do tego zadania umieść na końcu strony internetowej z zadania 1.
// Zmień poniższy kod tak, aby użyć pętli ​ for

const myList = [1, 2, 3];
myList.forEach(item => {
    console.log(item);
})

let i = 0
for (i; i < myList.length; i++) {
    console.log(myList[i])
}

/////////////////////////////////////////////////////////////
// Zadanie 3
// Odpowiedź do tego zadania umieść na końcu pliku ze skryptami z zadania 1.
// Napisz funkcję, która sprawdza, czy podany argument jest palindromem i zwraca wartość
// true ​
// lub​ false​ .

theFunction = (sth) => {
    const sth1 = sth.toLowerCase()
    const reversed = sth1.split('').reverse().join('')
    if (sth1 === reversed) {
        return true
    } else {
        return false
    }
}

//////////////////////////////////////////////////////////////////////
// Zadanie 5
// Napisz klasę javascriptową ​ Kot​ , która będzie w konstruktorze przyjmowała parametry
// imie​ oraz ​
// waga​ , oraz będzie posiadała metodę miaucz, która wypisze w konsoli:
//     5Nazywam się <imię> i ważę <waga> kg
// Dołącz kod JS do kodu z zadania 1, a w treści strony umieść przycisk ​ Dodaj kota​ , który
// zapyta w wyskakującym oknie lub modalu (technika dowolna) o imię oraz o wagę i utworzy
// nowego ​
// kota z podanymi wartościami, a także utworzy przycisk ​ Miaucz <imie>​ , który
// po kliknięciu uruchomi na danym ​ kocie​ metodę ​ miaucz​ .
//
Cat = (name, weight) => {
    this.name = name
    this.weight = weight
    this.meow = console.log(`My name is ${name} and I weight ${weight}kg`)
}

const button = document.createElement('button')
const firstDiv = document.createElement('div')
document.body.appendChild(firstDiv)
firstDiv.appendChild(button)
button.innerText = 'clickMe'


nameFunction = () => {
    return prompt('type the name')
}
weightFunction = () => {
    return prompt('type the weight')
}
button.addEventListener('click', () => {
    nameFunction()
    weightFunction()
})
Cat(nameFunction(), weightFunction())




