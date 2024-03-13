const list = document.querySelectorAll(".list");

function activeLink() {
  list.forEach((item) =>
    item.classList.remove("active")
  );
  this.classList.add("active");
}

list.forEach((item) => {
  item.addEventListener("click", activeLink);
});

fetch('https://raw.githubusercontent.com/Nbonbo7/w/main/json/weapons.json')
  .then(response => response.json())
  .then(WeaponsData => {
    fetch('https://raw.githubusercontent.com/Nbonbo7/w/main/json/weaponsTM.json')
      .then(response => response.json())
      .then(textMapData => {
        displayWeaponsInfo(WeaponsData, textMapData);
      })
      .catch(error => console.error('TextMap.jsonの読み込みに失敗しました', error));
  })
  .catch(error => console.error('Weaponss.jsonの読み込みに失敗しました', error));

function displayWeaponsInfo(WeaponsData, textMapData) {
  var WeaponsInfoElement = document.getElementById("WeaponsInfo");

  for (var WeaponsId in WeaponsData) {
    if (WeaponsData.hasOwnProperty(WeaponsId)) {
      var Weapons = WeaponsData[WeaponsId];
      var rankLevel = Weapons.rankLevel;
      var WeaponsName = textMapData[Weapons.nameTextMapHash]?.JP;

      var avatarCard = document.createElement('div');
      avatarCard.innerHTML = `
        <a href="/www/Weapons/${WeaponsId}" class="inline-block">
          <div name="Icon" class="av">
            <div class="bg-itemShade bg-${Weapons.rankLevel}">
                <span>
                  <img loading="eager" src='img/ui/${Weapons.icon}.png' alt='icon' onError="this.onerror=null;this.src='https://raw.githubusercontent.com/Nbonbo7/w/main/img/UI_Icon_Item_Temp.png';"
                >
                </span>
<span class="weaponsubop"><img aria-hidden="true" src="{}" data-icon="Def" width="14" height="14" viewBox="0 0 15 15" class="subop">
</img></span>
          <div class="Stardiv">
            ${Array(rankLevel).fill().map(() => `
              <span class="PaimonStar">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="PaimonStars">
                  <path d="M381.2 150.3l143.7 21.2c11.9 1.7 21.9 10.1 25.7 21.6 3.8 11.6.7 24.2-7.9 32.8L438.5 328.1l24.6 146.6c2 12-2.9 24.2-12.9 31.3-9.9 7.1-23 8-33.7 2.3l-128.4-68.5-128.3 68.5c-10.8 5.7-23.9 4.8-33.8-2.3-9.9-7.1-14.9-19.3-12.8-31.3l24.6-146.6L33.58 225.9c-8.61-8.6-11.67-21.2-7.89-32.8 3.77-11.5 13.74-19.9 25.73-21.6L195 150.3l64.4-132.33C264.7 6.954 275.9-.04 288.1-.04c12.3 0 23.5 6.994 28.8 18.01l64.3 132.33z"></path>
                </svg>
              </span>
            `).join('')}
                </div>
              </div>
              <div class="paimonItemname">
                <span class="paimonname">${WeaponsName}</span>
              </div>
          </div>
        `;
      WeaponsInfoElement.appendChild(avatarCard);
    }
  }
}