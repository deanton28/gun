window.object = {};

(function showObject(exports) {
  let timerIdTarget = 0;

  const moveObjectHorizontal = (object, place) => {
    const getElementSize = (el, attr) => el.getBoundingClientRect()[attr];

    const horizontalShift = 2;
    const objectShift = object.offsetLeft + horizontalShift;

    const objectLeft = object.offsetLeft;
    const objectTop = object.offsetTop;
    const objectRight = objectLeft + getElementSize(object, 'width');
    const objectBottom = objectTop + getElementSize(object, 'height');
    const targetLeft = window.gun.target.offsetLeft;
    const targetTop = window.gun.target.offsetTop;
    const targetRight = targetLeft + getElementSize(window.gun.target, 'width');
    const targetBottom = targetTop + getElementSize(window.gun.target, 'height');

    if (objectRight > targetLeft && objectRight < targetRight && objectBottom > targetTop && objectTop < targetBottom) {
      window.gun.messageHitTarget.removeAttribute('hidden');
      window.gun.target.setAttribute('hidden', '');
      window.gun.messageHitTarget.addEventListener('click', window.gun.restart);
      document.addEventListener('keydown', window.gun.restart);
      place.removeChild(object);
      clearTimeout(timerIdTarget);
    } else if (objectShift < 550) {
      object.style.left = `${objectShift}px`;
      setTimeout(moveObjectHorizontal, window.setting.speedBullet.value, object, place);
    } else {
      place.removeChild(object);
    }
  };

  exports.moveObjectUpDown = (object, verticalShift) => {
    let shift = verticalShift;

    const moveObjectVertical = () => {
      const timeout = window.setting.speedTarget.value;

      if (object.offsetTop < 3 || object.offsetTop > 38) {
        shift = -shift;
      }
      object.style.top = `${object.offsetTop + shift}px`;
      timerIdTarget = setTimeout(moveObjectVertical, timeout, object, verticalShift);
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
