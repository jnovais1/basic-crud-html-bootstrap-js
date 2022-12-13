const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#m-nome')
const sIdade = document.querySelector('#m-idade')
const sCpf = document.querySelector('#m-cpf')
const saveButton = document.querySelector('#btnSalvar')

let pessoas
let id_pessoa

//Carrega os itens do 'banco'
function getPessoas() {  //caso nao tenha nada, retorna um array vazio
    JSON.parse(localStorage.getItem('dbfunc')) ?? []
}

//Post
function setPessoas() {
    localStorage.setItem('dbfunc', JSON.stringify(pessoas))
}

//Get todos os usuários página inicial
function index() {
    pessoas = getPessoas()
    //Inicializar html vazio para incrementar depois
    tbody.innerHTML = ''
    pessoas.forEach((pessoa, index) => {
        insertItem(pessoa, index)
    })
}


/*
let nome = document.getElementById("nome")
let idade = document.getElementById("idade")
let cpf = document.getElementById("cpf")
*/