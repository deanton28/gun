window.gun = {};

(function play(exports) {
  const space = 32;
  const shift = 16;

  const gamePlace = document.querySelector('.gun__place');
  const target = gamePlace.querySelector('.gun__target');
  const gun = gamePlace.querySelector('.gun__gun-body');
  const endBullet = gamePlace.querySelector('.gun__bullet-end');
  const info = document.querySelector('.gun__info');
  const bulletTotal = info.querySelector('.info__bullet-total');
  const verticalShift = 2;

  exports.bulletClipFull = window.setting.sizeBulletClip.value;

  let bulletClip = exports.bulletClipFull;

  const reload = (evt) => {
    if (evt.keyCode === shift || typeof evt.keyCode === 'undefined') {
      bulletClip = exports.bulletClipFull;
      bulletTotal.textContent = `Патронов осталось: ${bulletClip}`;
      endBullet.setAttribute('hidden', '');
      document.removeEventListener('keydown', reload);
    }
  };

  window.object.moveObjectUpDown(target, verticalShift);

  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === space) {
      if (bulletClip !== 0) {
        window.object.displayObject(gun);
        bulletClip -= 1;
      } else {
        endBullet.removeAttribute('hidden');
      }
      bulletTotal.textContent = `Патронов осталось: ${bulletClip}`;
      document.addEventListener('keydown', reload);
      endBullet.addEventListener('click', reload);
    }
  });
}(window.gun));
