function scrollEffect()
{
    var navigation = document.getElementById('nav-scroll');
    var scrollPx = window.scrollY;
    console.log(scrollPx)

    if(scrollPx > 665)
    {
        navigation.classList.add('scrollColor')
    }
    else
    {
        navigation.classList.remove('scrollColor')
    }
}

window.addEventListener('scroll', scrollEffect)