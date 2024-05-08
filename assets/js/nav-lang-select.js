function selectLanguage(value) {
   const langInputs = document.querySelectorAll('.lang-text-box');
   langInputs.forEach((langInput) => {
      langInput.value = value;
   });
}

let langDropdownArr = document.querySelectorAll('.lang-dropdown');
let langMenuBackDrop = document.getElementById('lang-menu-back-drop');
langDropdownArr.forEach((langDropDown) => {
   langDropDown.addEventListener('click', () => {
      openLangMenu(langDropDown);
   });
});
function openLangMenu(langDropDown) {
   langDropDown.classList.toggle('active');
   langMenuBackDrop.style.display = 'block';
}

function closeLangMenu() {
   langDropdownArr.forEach((langDropDown) => {
      langDropDown.classList.remove('active');
   });
   langMenuBackDrop.style.display = 'none';
}
