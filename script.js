const shareBtn = document.querySelector('.share-box');
const authorBar = document.querySelector('.author-bar');
const footerBar = document.querySelector('.footer-bar');
const authorWrapper = document.querySelector('.author-wrapper');

shareBtn.addEventListener('click', () => {
    authorWrapper.style.display = 'none';
    footerBar.style.display = 'block';

    if(window.innerWidth >= 1000){
        footerBar.classList.add('absolute');
        authorWrapper.style.display = 'block';
    } else{
        footerBar.classList.remove('absolute');
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1000) {
        footerBar.classList.add('absolute');
    } else {
        footerBar.classList.remove('absolute');
    }
});