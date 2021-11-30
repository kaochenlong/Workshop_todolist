// TO DO

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('ul').addEventListener('click', function (e) {
    if (e.target.nodeName === 'LI') {
      e.target.classList.toggle('checked')
    }

    if (e.target.nodeName === 'SPAN') {
      e.target.parentNode.remove()
    }
  })

  document.querySelector('#input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      document.querySelector('#addBtn').click()
    }
  })

  document.querySelector('#addBtn').addEventListener('click', function() {
    let content = document.querySelector("#input").value.trim()
    if (content.length < 1) return
    let li = document.createElement('li')
    let span = document.createElement('span')
    let ul = document.querySelector('ul')
    span.appendChild(document.createTextNode('x'))
    span.classList.add('close')
    li.appendChild(document.createTextNode(content))
    li.appendChild(span)
    ul.appendChild(li)
    document.querySelector("#input").value = ''
  })
})
