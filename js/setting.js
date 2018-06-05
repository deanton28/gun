window.setting = {};

(function tune(exports) {
  const setup = document.querySelector('.gun__setup');
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
    // setInterval(window.gun.moveTarget, speedTarget.value);
    exports.speedTarget.blur();
  });
}(window.setting));
