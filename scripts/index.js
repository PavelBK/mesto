//  Попапы  //
const popup = document.querySelector(".popup");


const scaleImage = document.querySelector(".popup-scale");

//  Попап редактирования профиля  //
const popupEdit = document.querySelector(".popup-edit");
const openPopupEdit = document.querySelector(".profile__button_type_edit");
const closePopupEdit = document.querySelector(".popup__button_edit-close");
const formElementEdit = document.querySelector(".popup__form_edit");
const nameInput = document.querySelector(".popup__input_type_name");
const professionInput = document.querySelector(".popup__input_type_profession");
const profileName = document.querySelector(".profile__name");
const profileProfession = document.querySelector(".profile__profession");

//  Попап добавления новой карточки  //
const popapAdd = document.querySelector(".popup-add");
const openPopupAdd = document.querySelector(".profile__button_type_add");
const closePopupAdd = document.querySelector(".popup__button_add-close");
const formElementAdd = document.querySelector(".popup__form_add");
const pictureInput = document.querySelector(".popup__input_type_picture");
const placeInput = document.querySelector(".popup__input_type_place");

// Попап увеличенной картинки
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


//  Функции попапа добавления новой карточки  //
function openFormAdd() {
  popapAdd.classList.add("popup_open");
};
function closeFormAdd() {
  popapAdd.classList.remove("popup_open");
};
function renderCard (event) {
  event.preventDefault();
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  cardElement.querySelector(".element__title").textContent = placeInput.value;
  cardElement.querySelector(".element__image").src = pictureInput.value;
  cardElement.querySelector(".element__image").alt = placeInput.value;
  deleteCard(cardElement);
  addLike(cardElement);
  openCard(cardElement);
  sectionCard.prepend(cardElement);
  closeFormAdd();
  event.currentTarget.reset();
};


//  Функции редактирования профиля  //
function openFormEdit() {
  nameInput.value = profileName.textContent;
  professionInput.value = profileProfession.textContent;
  popupEdit.classList.add("popup_open");
};
function closeFormEdit() {
  popupEdit.classList.remove("popup_open");
};
function formSubmitHandler (event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = professionInput.value;
  closeFormEdit();
};


//  Функция добавления стандартных карточек при загрузки страницы  //
const createCard = (cardName, cardLink) => {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  cardElement.querySelector(".element__title").textContent = cardName;
  cardElement.querySelector(".element__image").src = cardLink;
  cardElement.querySelector(".element__image").alt = cardName;
  deleteCard(cardElement);
  addLike(cardElement);
  openCard(cardElement);
  sectionCard.append(cardElement);
};
initialCards.forEach(cardElement => createCard(cardElement.name, cardElement.link));


//  Функции добавления лайка  //
function activeLike(event) {
  const cardElement = event.currentTarget.classList.toggle("element__like_type_active");
};
function addLike(cardElement) {
  cardElement.querySelector(".element__like").addEventListener("click", activeLike);
};
 

//  Функции удаления карточки  //
function removeCard(event) {
  const cardElement = event.currentTarget.closest(".element");
  cardElement.remove();
};
function deleteCard(cardElement) {
  cardElement.querySelector(".element__delete").addEventListener("click", removeCard);
};


//  Функции открытия и закрытия увеличенного изображения карточки  //
function scaleCard(event){
  scaleImage.querySelector(".popup-scale__image").src = event.currentTarget.src;
  scaleImage.querySelector(".popup-scale__title").textContent = event.currentTarget.parentNode.textContent;
  scaleImage.classList.add("popup_open");
};
function openCard(cardElement) {
  cardElement.querySelector(".element__image").addEventListener("click", scaleCard);
};
function closeCard (event) {
  scaleImage.classList.remove("popup_open");
};


//  Слушатели  //
openPopupEdit.addEventListener("click", openFormEdit);
openPopupAdd.addEventListener("click", openFormAdd);

closePopupEdit.addEventListener("click", closeFormEdit);
closePopupAdd.addEventListener("click", closeFormAdd);

formElementEdit.addEventListener("submit", formSubmitHandler);
formElementAdd.addEventListener("submit", renderCard);

buttonClose.addEventListener("click", closeCard);