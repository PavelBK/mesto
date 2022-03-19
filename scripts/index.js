//  Попап редактирования профиля  //
const popupEdit = document.querySelector(".popup-edit");
const openPopupEditButton = document.querySelector(".profile__button_type_edit");
const closePopupEditButton = document.querySelector(".popup__button_edit-close");
const formElementEdit = document.querySelector(".popup__form_edit");
const nameInput = document.querySelector(".popup__input_type_name");
const professionInput = document.querySelector(".popup__input_type_profession");
const profileName = document.querySelector(".profile__name");
const profileProfession = document.querySelector(".profile__profession");

//  Попап добавления новой карточки  //
const popapAdd = document.querySelector(".popup-add");
const openPopupAddButton = document.querySelector(".profile__button_type_add");
const closePopupAddButton = document.querySelector(".popup__button_add-close");
const formElementAdd = document.querySelector(".popup__form_add");
const pictureInput = document.querySelector(".popup__input_type_picture");
const placeInput = document.querySelector(".popup__input_type_place");


// Попап увеличенной картинки
const scaleImage = document.querySelector(".popup-scale");
const buttonClose = document.querySelector(".popup__button_scale-close");

//  Секция карточек  //
const sectionCard = document.querySelector(".elements");
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Функции открытия и закрытия попапов  //
function openPopup (popup) {
  popup.classList.add("popup_open");
};
function closePopup (popup) {
  popup.classList.remove("popup_open");
};


//  Функция редактирования профиля  //
function submitProfileForm (event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = professionInput.value;
  closePopup(popupEdit);
};

//  Функция создания шаблона карточек  //
const createCard = (data) => {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  const cardPhoto = cardElement.querySelector(".element__image");
  cardElement.querySelector(".element__title").textContent = data.name;
  cardPhoto.src = data.link;
  cardPhoto.alt = data.name;
  deleteCard(cardElement);
  addLike(cardElement);
  openCard(cardElement);
  return cardElement;
};


//  Функция создания карточек и добавления  //
const renderCard = (data) => {
  const cardElement = createCard(data);
  sectionCard.prepend(cardElement);
};


//  Добавление карточек из массива  //
initialCards.forEach(data => renderCard(data));


//  Функция добавления новых карточек из формы  //
 const submitCardForm = (event) => {
  event.preventDefault();
  const data = {name: placeInput.value, link: pictureInput.value};
  renderCard(data);
  closePopup(popapAdd);
  event.currentTarget.reset();
};


//  Функция открытия изображения  //
function openCard(cardElement) {
  cardElement.querySelector(".element__image").addEventListener("click", event => {
  scaleImage.querySelector(".popup-scale__image").src = event.currentTarget.src;
  scaleImage.querySelector(".popup-scale__image").alt = event.currentTarget.alt;
  scaleImage.querySelector(".popup-scale__title").textContent = event.currentTarget.parentNode.textContent;
  openPopup(scaleImage);
  });
};


//  Функция добавления лайка  //
function addLike(cardElement) {
  cardElement.querySelector(".element__like").addEventListener("click", event => event.currentTarget.classList.toggle("element__like_type_active"));
};
 

//  Функции удаления карточки  //
function removeCard(event) {
  const cardElement = event.currentTarget.closest(".element");
  cardElement.remove();
};
function deleteCard(cardElement) {
  cardElement.querySelector(".element__delete").addEventListener("click", removeCard);
};

 
//  Слушатели  //
openPopupEditButton.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  professionInput.value = profileProfession.textContent;
  openPopup(popupEdit);
});
openPopupAddButton.addEventListener("click", () => openPopup(popapAdd));

closePopupEditButton.addEventListener("click", () => closePopup(popupEdit));
closePopupAddButton.addEventListener("click", () => closePopup(popapAdd));

formElementEdit.addEventListener("submit", submitProfileForm);
formElementAdd.addEventListener("submit", submitCardForm); 

buttonClose.addEventListener("click", () => closePopup(scaleImage))
