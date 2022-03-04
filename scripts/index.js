let popup = document.querySelector(".popup");
let openPopup = document.querySelector(".profile__button_type_edit");
let closePopup = popup.querySelector(".popup__button_type_close");
let formElement = popup.querySelector(".popup__form");
let nameInput = popup.querySelector(".popap__input_type_name");
let professionInput = popup.querySelector(".popap__input_type_profession");
let profileName = document.querySelector(".profile__name");
let profileProfession = document.querySelector(".profile__profession");

function togglePopup() {
    popup.classList.toggle("popup__open");
    nameInput.value = profileName.textContent;
    professionInput.value = profileProfession.textContent;
};

popup.addEventListener("click", function (area) {
    if (area.target === area.currentTarget) {
        togglePopup();
    }
});

openPopup.addEventListener("click", togglePopup );

closePopup.addEventListener("click", togglePopup);


function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = professionInput.value;
    togglePopup()
};

formElement.addEventListener('submit', formSubmitHandler);