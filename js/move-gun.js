window.move = {};

(function move(exports) {
  exports.gun = document.querySelector('.gun__gun-body');

  exports.onMouseDown = (evt) => {
    let startCoords = {
      x: evt.clientX,
      y: evt.clientY,
    };

    const onMouseMove = (moveEvt) => {
      const shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY,
      };

      const gunShiftX = exports.gun.offsetLeft - shift.x;
      const gunShiftY = exports.gun.offsetTop - shift.y;

      exports.gun.style.left = `${gunShiftX}px`;
      exports.gun.style.top = `${gunShiftY}px`;

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY,
      };
    };

    const onMouseUp = () => {
      exports.gun.removeEventListener('mousemove', onMouseMove);
      exports.gun.removeEventListener('mouseup', onMouseUp);
    };

    exports.gun.addEventListener('mousemove', onMouseMove);
    exports.gun.addEventListener('mouseup', onMouseUp);
  };
}(window.move));
