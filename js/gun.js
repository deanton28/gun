const space = 32;
const shift = 16;

const gamePlace = document.querySelector('.gun__place');
const endBullet = gamePlace.querySelector('.gun__bullet-end');
const bulletClipFull = 10;

let bulletClip = bulletClipFull;

const reload = (evt) => {
  if (evt.keyCode === shift || typeof evt.keyCode === 'undefined') {
    bulletClip = bulletClipFull;
    endBullet.setAttribute('hidden', '');
    document.removeEventListener('keydown', reload);
  }
};

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === space) {
    if (bulletClip !== 0) {
      window.object.displayObject(gamePlace);
      bulletClip -= 1;
    } else {
      endBullet.removeAttribute('hidden');
    }
    console.log(bulletClip);
    document.addEventListener('keydown', reload);
    endBullet.addEventListener('click', reload);
  }
});
