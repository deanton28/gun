window.gun = {};

(function play(exports) {
  const space = 32;
  const shift = 16;

  const gamePlace = document.querySelector('.gun__place');
  const messageEndBullet = gamePlace.querySelector('.message__bullet-end');
  const info = document.querySelector('.gun__info');
  const bulletTotal = info.querySelector('.info__bullet-total');
  const verticalShift = 2;

  exports.target = gamePlace.querySelector('.gun__target');
  exports.messageHitTarget = gamePlace.querySelector('.message__hit');

  exports.bulletClipFull = window.setting.sizeBulletClip.value;

  let bulletClip = exports.bulletClipFull;

  const reload = (evt) => {
    if (evt.keyCode === shift || typeof evt.keyCode === 'undefined') {
      bulletClip = exports.bulletClipFull;
      bulletTotal.textContent = `Патронов осталось: ${bulletClip}`;
      messageEndBullet.setAttribute('hidden', '');
      document.removeEventListener('keydown', reload);
    }
  };

  exports.restart = (evt) => {
    if (evt.keyCode === shift || typeof evt.keyCode === 'undefined') {
      bulletClip = exports.bulletClipFull;
      bulletTotal.textContent = `Патронов осталось: ${bulletClip}`;
      exports.messageHitTarget.setAttribute('hidden', '');
      exports.target.removeAttribute('hidden');
      window.object.moveObjectUpDown(exports.target, verticalShift);
      document.removeEventListener('keydown', window.restart);
    }
  };

  window.object.moveObjectUpDown(exports.target, verticalShift);

  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === space) {
      if (bulletClip !== 0) {
        window.object.displayObject(gamePlace);
        bulletClip -= 1;
      } else {
        messageEndBullet.removeAttribute('hidden');
      }
      bulletTotal.textContent = `Патронов осталось: ${bulletClip}`;
      document.addEventListener('keydown', reload);
      messageEndBullet.addEventListener('click', reload);
    }
  });
}(window.gun));
