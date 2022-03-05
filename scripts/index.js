//Код для открытия формы редактирования профиля//

let popup = document.querySelector(".popup");
let openPopup = document.querySelector(".profile__button_type_edit");
let closePopup = popup.querySelector(".popup__button_type_close");
let formElement = popup.querySelector(".popup__form");
let nameInput = popup.querySelector(".popup__input_type_name");
let professionInput = popup.querySelector(".popup__input_type_profession");
let profileName = document.querySelector(".profile__name");
let profileProfession = document.querySelector(".profile__profession");

nameInput.value = profileName.textContent;
professionInput.value = profileProfession.textContent;

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = professionInput.value;
    popup.classList.remove("popup_open");
};

openPopup.addEventListener("click", function() {
    popup.classList.add("popup_open");
} );

closePopup.addEventListener("click", function() {
    popup.classList.remove("popup_open");
} );

formElement.addEventListener('submit', formSubmitHandler);