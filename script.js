// document.addEventListener("DOMContentLoaded", () => {
//     const sun = document.querySelector(".sun");
//     const container = document.querySelector(".container");
//     const dark = document.querySelector(".dark")
//     const ray1 = document.querySelector(".ray1")
//     const ray2 = document.querySelector(".ray2")
//     const ray3 = document.querySelector(".ray3")
//     const cloud1 = document.querySelector(".cloud1")
//     const cloud2 = document.querySelector(".cloud2")
//     const cloud3 = document.querySelector(".cloud3")
//     const cloud4 = document.querySelector(".cloud4")
//     const cloud5 = document.querySelector(".cloud5")
//     const cloud6 = document.querySelector(".cloud6")
//     const moon = document.querySelector(".moon")
//     const star1 = document.querySelector(".star1")
//     const star2 = document.querySelector(".star2")
//     const star3 = document.querySelector(".star3")
//     const star4 = document.querySelector(".star4")
//     const star5 = document.querySelector(".star5")

//     container.addEventListener("click", () => {
//         sun.style.animation = 'none';       // Restart the animation
//         sun.offsetHeight;                    // force reflow
//         sun.style.animation = 'sun 1s ease-in-out  forwards'; // reapply animation
//         ray1.style.animation = "sun 1s ease-in-out  forwards";
//         ray2.style.animation = "sun 1s ease-in-out  forwards";
//         ray3.style.animation = "sun 1s ease-in-out forwards";
//         cloud1.style.animation ="sky 3s ease-in-out  forwards";
//         cloud2.style.animation ="sky 3s ease-in-out  forwards";
//         cloud3.style.animation ="sky 3s ease-in-out  forwards";
//         cloud4.style.animation ="sky 3s ease-in-out  forwards";
//         cloud5.style.animation ="sky 3s ease-in-out  forwards";
//         cloud6.style.animation ="sky 2.3s ease-in-out  forwards";
//     });

//     dark.addEventListener("click", () => {
//         moon.style.animation = "none";
//         moon.offsetHeight;
//         moon.style.animation = "moon 1s ease-in-out forwards";
//         star1.style.animation ="sky 2.3s ease-in-out  forwards";
//         star2.style.animation ="sky 2.3s ease-in-out  forwards";
//         star3.style.animation ="sky 2.3s ease-in-out  forwards";
//         star4.style.animation ="sky 2.3s ease-in-out  forwards";
//         star5.style.animation ="sky 2.3s ease-in-out  forwards";
//     })
// });


const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const body = document.body;

sun.addEventListener('click', () => {
    sun.style.animation = 'sun 1s forwards ease-in-out';
    document.querySelectorAll('.clouds').forEach(cloud => {
        cloud.style.animation = 'sky 1s forwards ease-in-out';
    });

    setTimeout(() => {
        body.classList.add('dark-mode');
    }, 1000);
});

moon.addEventListener('click', () => {
    moon.style.animation = 'moon 1s forwards ease-in-out';

    setTimeout(() => {
        body.classList.remove('dark-mode');

        // Reset animations
        sun.style.animation = 'none';
        void sun.offsetHeight;
        sun.style.animation = '';

        document.querySelectorAll('.clouds').forEach(cloud => {
            cloud.style.animation = 'none';
            void cloud.offsetHeight;
            cloud.style.animation = '';
        });


        moon.style.animation = 'none';
    }, 1000);
});
