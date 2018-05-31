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

