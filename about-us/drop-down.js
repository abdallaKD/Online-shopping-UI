const toggleBtn = document.querySelector('.toggle-btn');
const dropDownMenu = document.querySelector('.drop-down-menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
};

function closeDropdownMenu() {
    if (dropDownMenu.classList.contains('open')) {
        dropDownMenu.classList.remove('open');
    }
}

window.addEventListener('resize', closeDropdownMenu);

document.addEventListener('click', function(event) {
    if (!dropDownMenu.contains(event.target) && !toggleBtn.contains(event.target)) {
        closeDropdownMenu();
    }
});
