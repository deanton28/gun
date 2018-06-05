window.object = {};

(function showObject(exports) {
  const moveObjectHorizontal = (object, place) => {
    const horizontalShift = 10;
    const objectShift = object.offsetLeft + horizontalShift;

    if (objectShift < 550) {
      object.style.left = `${objectShift}px`;
      setTimeout(moveObjectHorizontal, window.setting.speedBullet.value, object, place);
    } else {
      place.removeChild(object);
    }
  };

  exports.moveObjectUpDown = (object, verticalShift) => {
    let shift = verticalShift;

    const moveObjectVertical = () => {
      if (object.offsetTop < 3 || object.offsetTop > 38) {
        shift = -shift;
      }
      object.style.top = `${object.offsetTop + shift}px`;
      setTimeout(moveObjectVertical, window.setting.speedTarget.value, object, verticalShift);
    };

    moveObjectVertical();
  };

  exports.displayObject = (place) => {
    const object = document.createElement('div');

    object.className = 'gun__bullet';
    place.appendChild(object);
    moveObjectHorizontal(object, place);
  };
}(window.object));
