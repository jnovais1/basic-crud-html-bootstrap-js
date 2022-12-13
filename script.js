/*const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#m-nome')
const sIdade = document.querySelector('#m-idade')
const sCpf = document.querySelector('#m-cpf')
const saveButton = document.querySelector('#btnSalvar')

let pessoas
let id_pessoa

function getPessoas() {
    JSON.parse(localStorage.getItem('dbfunc')) ?? []
}

function setPessoas() {
    localStorage.setItem('dbfunc', JSON.stringify(pessoas))
}

function index() {
    pessoas = getPessoas()
    tbody.innerHTML = ''
    pessoas.forEach((pessoa, index) => {
        insertItem(pessoa, index)
    })
}*/

let nome = document.getElementById("nome")
let idade = document.getElementById("idade")
let cpf = document.getElementById("cpf")