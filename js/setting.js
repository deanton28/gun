window.setting = {};

(function tune(exports) {
  const setup = document.querySelector('.gun__setup');
  const distanceTarget = setup.querySelector('#target-distance');

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
}(window.setting));
