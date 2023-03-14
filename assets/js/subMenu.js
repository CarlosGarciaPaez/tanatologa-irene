function megaMenuCalcEvent() {
    var megaMenuDowns = document.querySelectorAll(
        '.header--row-inner .neve-mega-menu > .sub-menu'
    );
megaMenuDowns.forEach( function (dropDown) {
    var windowWidth = window.innerWidth;
    dropDown.style.left = '0';
    dropDown.style.right = '0';
    dropDown.style.transform = 'none';

    var bounding = dropDown.getBoundingClientRect();
    var percentage = Math.round( Math.abs(bounding.left) / bounding.width * 100 );
    if ( percentage > 100 ) {
        var tmp = percentage - 100;
        percentage = 100 - tmp;
    }
    if (bounding.left < 0) {
        dropDown.style.transform = `translateX(${percentage}%)`;
    }
    if (bounding.left + bounding.width >= windowWidth) {
        percentage = Math.round( Math.abs(bounding.left + bounding.width - windowWidth) / bounding.width * 100 );
        percentage = percentage * -1;
        dropDown.style.transform = `translateX(${percentage}%)`;
    }
});
}
var menuCalcEvent = new Event('menuCalc');
window.addEventListener('menuCalc', function (e) {
megaMenuCalcEvent();
}, false);