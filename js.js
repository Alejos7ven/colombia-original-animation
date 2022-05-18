$('.animate').click(async function (e) { 
    e.preventDefault();
    let t = $(this);
    t.hide();
    animate();
});
function wait(time)
{
    return new Promise(resolve => {
        setTimeout(() => resolve('☕'), time*1000); // miliseconds to seconds
    });
}
async function animate() {
    $('#portal').fadeIn(600);
    // await wait(0.6);

    let portal = document.getElementById('portal');
    for (let i = 0; i < 360; i++) {
        let chispa = document.createElement("div");
        chispa.className = "chispa";
        let chispaTranslation = Math.random() * (120 - 100) + 100;
        chispa.style.transform = 'rotate(' + (i * 2) + 'deg) translate('+chispaTranslation+'px)';
        portal.appendChild(chispa);
        await wait(0.006);
    }
    // await wait(1);
    $('.logo').fadeIn(600);

    await wait(3);
    $('.chispa').fadeOut(1500);
    await wait(1.5);
    $('#portal').html('');
    $('.title').fadeIn(600);
    await wait(1);
    $('.text').fadeIn(600);
    await wait(2.5);
    $('.seguir').fadeIn(600);
    await wait(1);
    $('.footer').fadeIn(600);
    await wait(1);
    // $('.reset').fadeIn(600);
}