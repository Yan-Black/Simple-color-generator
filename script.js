const div     = document.createElement('div'),
      text    = "Color generator...",
      text2   = "Push Me",
      butt    = document.createElement('button'),
      body    = document.querySelector('body'),
      p       = document.createElement('p');

butt.classList.add('b')
 div.classList.add('d')

butt.innerText = text2
 div.innerText = text

body.append(div, butt, p)

butt.onclick = (e) => {
e.preventDefault()

  let color = "#",
    letters = '0123456789ABCDEF'

  p.style.gridArea = '2 / 2 / 2 / 2';

  for(let i = 0; i < 6; i++){
     color += letters[Math.floor(Math.random() * 16)]
  }

  p.innerText          = `Current color is ${color}`
  div.style.background = color
  butt.style.color     = color

  if (body.contains(p)) body.removeChild(p)
  
  body.append(p)
}
