window.onload = function () {
    const hamburger = document.getElementById('hamburger')
    hamburger.onclick = function () {
        const itemsBox = document.getElementById('items-box');
        itemsBox.classList.contains('hidden') ?
            itemsBox.classList.remove('hidden') :
            itemsBox.classList.add('hidden');
    };
};