//your JS code here. If required.
const openBtn = document.getElementById('openModal');
    const modal = document.getElementById('myModal');
    const closeBtn = document.querySelector('.close-modal');

    openBtn.onclick = () => {
      modal.style.display = 'block';
    };

    closeBtn.onclick = () => {
      modal.style.display = 'none';
    };


    window.onclick = (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    };