const list = document.querySelectorAll('li.item');
console.log(`Number of categories:`, list.length);

const listItem = document.querySelectorAll('#categories>li');
console.log(listItem);

listItem.forEach(el => {
console.log(
    `Category: ${el.firstElementChild.textContent}, Elements:`, 
    el.lastElementChild.children.length);
});

console.log(list.firstElementChild);   



















