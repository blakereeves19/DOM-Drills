document.addEventListener('DOMContentLoaded', function () {
    let div = document.createElement('div');
    div.className = 'header-container';

    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode('This is an h1');
    h1.appendChild(h1Text);
    div.appendChild(h1);
    h1.className = 'h1';

    let h2 = document.createElement('h2');
    let h2Text = document.createTextNode('This is an h2');
    h2.appendChild(h2Text);
    div.appendChild(h2);
    h2.className = 'h2';

    let h3 = document.createElement('h3');
    let h3Text = document.createTextNode('This is an h3');
    h3.appendChild(h3Text);
    div.appendChild(h3);
    h3.className = 'h3';

    let h4 = document.createElement('h4');
    let h4Text = document.createTextNode('This is an h4');
    h4.appendChild(h4Text);
    div.appendChild(h4);
    h4.className = 'h4';

    let h5 = document.createElement('h5');
    let h5Text = document.createTextNode('This is an h5');
    h5.appendChild(h5Text);
    div.appendChild(h5);
    h5.className = 'h5';

    let h6 = document.createElement('h6');
    let h6Text = document.createTextNode('This is an h6');
    h6.appendChild(h6Text);
    div.appendChild(h6);
    h6.className = 'h6';

    document.body.appendChild(div);

    let colors = ['red', 'blue', 'green', 'black', 'purple', 'pink', 'grey', 'orange'];
function getRandomColor() {
    let rcolor = colors[Math.floor(Math.random() * colors.length)];
    return rcolor;
}
h1.addEventListener('dblclick', function () {
   let randomColor = getRandomColor();
   h1.style.color = randomColor; 
})

h2.addEventListener('dblclick', function () {
    let randomColor = getRandomColor();
    h2.style.color = randomColor; 
 })

 h3.addEventListener('dblclick', function () {
    let randomColor = getRandomColor();
    h3.style.color = randomColor; 
 })

 h4.addEventListener('dblclick', function () {
    let randomColor = getRandomColor();
    h4.style.color = randomColor; 
 })

 h5.addEventListener('dblclick', function () {
    let randomColor = getRandomColor();
    h5.style.color = randomColor; 
 })

 h6.addEventListener('dblclick', function () {
    let randomColor = getRandomColor();
    h6.style.color = randomColor; 
 })

let x = 1;
function insertListItem() {
    let ulList = document.createElement('ul');
    let list = document.createElement('li');
    let text = document.createTextNode('This is list item ' + [x++]);
    list.appendChild(text);
    ulList.appendChild(list);
    document.body.appendChild(ulList);

    list.addEventListener('click', function() {
        let randomColor = getRandomColor();
        ulList.style.color = randomColor;
    })

    list.addEventListener('dblclick', function(){
        this.remove();
    });
}
document.getElementsByClassName('btn')[0].addEventListener('click', function () {
    insertListItem();
})
})