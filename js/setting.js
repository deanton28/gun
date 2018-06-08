window.setting = {};

(function tune(exports) {
  const setup = document.querySelector('.gun__setup');
  const distanceTarget = setup.querySelector('#target-distance');
  const gunMove = setup.querySelector('#gun-move');

  exports.speedTarget = setup.querySelector('#target-speed');
  exports.sizeBulletClip = setup.querySelector('#bullet-quantity');
  exports.speedBullet = setup.querySelector('#bullet-speed');

  exports.sizeBulletClip.addEventListener('change', () => {
    window.gun.bulletClipFull = exports.sizeBulletClip.value;
    exports.sizeBulletClip.blur();
  });

  exports.speedBullet.addEventListener('change', () => {
    exports.speedBullet.blur();
  });

  exports.speedTarget.addEventListener('change', () => {
    exports.speedTarget.blur();
  });

  distanceTarget.addEventListener('change', () => {
    window.gun.target.style.left = `${distanceTarget.value}px`;
    distanceTarget.blur();
  });

  gunMove.addEventListener('change', () => {
    if (gunMove.checked) {
      window.move.gun.addEventListener('mousedown', window.move.onMouseDown);
    } else {
      window.move.gun.removeEventListener('mousedown', window.move.onMouseDown);
    }
    gunMove.blur();
  });
}(window.setting));
