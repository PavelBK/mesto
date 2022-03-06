//Код для открытия формы редактирования профиля//

let popup = document.querySelector(".popup");
let openPopup = document.querySelector(".profile__button_type_edit");
let closePopup = popup.querySelector(".popup__button_type_close");
let formElement = popup.querySelector(".popup__form");
let nameInput = popup.querySelector(".popup__input_type_name");
let professionInput = popup.querySelector(".popup__input_type_profession");
let profileName = document.querySelector(".profile__name");
let profileProfession = document.querySelector(".profile__profession");

function openForm() {
    nameInput.value = profileName.textContent;
    professionInput.value = profileProfession.textContent;
    popup.classList.add("popup_open");
};

function closeForm() {
    popup.classList.remove("popup_open");
};

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = professionInput.value;
    closeForm();
};

openPopup.addEventListener("click", openForm);

closePopup.addEventListener("click", closeForm);

formElement.addEventListener("submit", formSubmitHandler);