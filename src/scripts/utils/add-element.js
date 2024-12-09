const addElement = {
  init({ _content, _element, _class, _data }) {
    // const restoList = document.createElement('resto-list');
    // restoList.classList.add('resto__list');
    // restoList.data = resto;
    // mainContent.appendChild(restoList);
    const elementList = document.createElement(_element);
    elementList.classList.add(_class);
    elementList.data = _data;
    _content.replaceChildren(elementList);
  }
};

export default addElement;