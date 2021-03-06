const elsTeamBtn = document.querySelectorAll(".team-js-btn");
const elsTeamContent = document.querySelectorAll(".team__item-content");
const elsTeamAbout = document.querySelectorAll(".team__item-about");

elsTeamBtn.forEach(function(item, index) {
    item.addEventListener('click', function () {
        elsTeamContent[index].classList.toggle('team__item-content--none')
        elsTeamAbout[index].classList.toggle('team__about--none')
    });
});

const elsTeamBack = document.querySelectorAll(".team-js-back");
elsTeamBack.forEach(function (item, index) {
    item.addEventListener("click", function () {
        elsTeamContent[index].classList.toggle('team__item-content--none')
        elsTeamAbout[index].classList.toggle('team__about--none')
    });
});