//  conectam modulul pentru operare cu sistemul de fisiere
const fs = require("fs")

// doua variabile "imutabile" / constante de tip Array pentru a stoca datele
const phones = []
const emails = []


function loadContactsList() {
    fs.readFile("original.emails.list.txt", function(err, data) {
        input = data.toString()
        parseContactsList()
        if (err) {
            console.log(err)
        }
    })
}

function parseContactsList() {
    var contact_list = input.split("\n")
    contact_list.forEach(element => {
        var contact = element.split(" ")
        phones.push(contact[0])
        emails.push(contact[1])
    })
    printContactsPhoneList()
    console.log() //pt spatiu
    console.log() //pt spatiu
    printContactsEmailList()
}

function printContactsPhoneList() {
    phones.forEach(element => {
        n = 1
        var all_numbers = element.match(/\d+/g)
        console.log(n + ") ", "+(" + all_numbers[0] + ")/" + all_numbers[1])
        n++
    })
}

function printContactsEmailList() {
    emails.forEach(element => {
        n = 1
        console.log(n + ") ", element)
        n++
    })
}

loadContactsList()