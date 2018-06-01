window.object = {};

(function showObject(exports) {
  const moveObject = (object, place) => {
    const shift = 10;
    const objectShift = object.offsetLeft + shift;
    if (objectShift < 500) {
      object.style.left = `${objectShift}px`;
      setTimeout(moveObject, 50, object, place);
    } else {
      place.removeChild(object);
    }
  };

  exports.displayObject = (place) => {
    const object = document.createElement('div');

    object.className = 'gun__bullet';
    place.appendChild(object);

    setTimeout(moveObject, 50, object, place);
  };
}(window.object));
