const back = document.querySelector('#back');
const next = document.querySelector('#next');

const photos = ['1.jpg','2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg'];
let i=0
next.addEventListener('click', ()=> {
i++;
if (i>photos.length-1){
    i=0;
}
document.querySelector('#pictures').src=photos [i];
})

back.addEventListener('click', () => {
    i--;
    if (i<0){
        i=photos.length-1;
    }
    document.querySelector('#pictures').src=photos[i];
} )

gsap.from('#aniOne', { duration: 1.5, delay: 0.1, x: '-100vw', ease: 'power2.in', opacity: 0  })
gsap.from('#aniTwo', { duration:3, delay: 1, x: '-100vw', ease: 'power2.in', opacity: 0   })
gsap.fromTo('.aniFive', { opacity: 0, scale: 0, rotation: 720 }, { duration: 1, delay: 2, opacity: 1, scale: 1, rotation: 0 })
gsap.from('.headerNav', { duration: 2, delay: .9, y: '-100vw', ease: 'bounce'  })


