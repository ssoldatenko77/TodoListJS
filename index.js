

const divs = document.querySelectorAll('div')
const listUl = document.querySelector('.list')
const button = document.querySelector('.btn')
const form = document.querySelector('.form')
const input = document.querySelector('input')

form.addEventListener('submit', handler)

function handler(e) {

e.preventDefault();

const item = document.createElement('li')
item.classList.add('item')
const inp = document.createElement('input');
const btn = document.createElement('button')
btn.textContent = 'Удалить';
inp.setAttribute('type','checkbox')

    const text = input.value
    item.innerText = text
    item.append(inp);
    item.append(btn);
    listUl.append(item);
    inp.addEventListener('click', function() {
        item.classList.add('line')
        })
   
   input.value = ''
  
btn.addEventListener ('click', function() {
    item.closest('li').remove()
    })

}

