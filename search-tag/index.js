var content = document.querySelector('.content');
var input = document.querySelector('.content input');
var removeAll = document.querySelector('.remove');

var tags = [];

function renderTags() {
    content.innerHTML = '';
    for(let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        content.innerHTML += `<li>
                                ${tag}
                                <i class="fa-solid fa-xmark" onClick="removeItem(${i})"></i>
                            </li>`
    }

    content.appendChild(input);
    input.focus();
}

renderTags();

function addTag(value) {
    tags.push(value.trim());
    input.value = '';
    renderTags();
}

input.addEventListener('keydown', function(e) {
    if(e.keyCode == 13) {
        addTag(input.value);
    }
});

removeAll.addEventListener('click', function() {
    tags = [];
    renderTags();
});

function removeItem(index) {
    tags.splice(index, 1);
    renderTags();
}