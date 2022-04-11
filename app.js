const header = document.getElementById('header');
const edit = document.getElementById('edit-btn');
const done = document.getElementById('save-btn');


edit.addEventListener('click', ()=>{
    header.contentEditable = true;
});

save.addEventListener('click', ()=>{
    header.contentEditable = false;
});