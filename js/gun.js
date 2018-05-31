const gamePlase = document.querySelector('.gun__place');
const gun = gamePlase.querySelector('.gun__gun-body');

const displayBullet = () => {
  const bullet = document.createElement('div');
  const shift = 10;

  const moveBullet = () => {
    const bulletShift = bullet.offsetLeft + shift;
    if (bulletShift < 500) {
      bullet.style.left = `${bulletShift}px`;
      setTimeout(moveBullet, 50);
    } else {
      gamePlase.removeChild(bullet);
    }
  };

  bullet.className = 'gun__bullet';
  gamePlase.appendChild(bullet);

  setTimeout(moveBullet, 50);
};

gun.addEventListener('click', () => {
  displayBullet();
});
