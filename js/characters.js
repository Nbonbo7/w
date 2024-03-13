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

fetch('https://raw.githubusercontent.com/Nbonbo7/w/main/json/characters.json')
  .then(response => response.json())
  .then(CharacterData => {
    fetch('https://raw.githubusercontent.com/Nbonbo7/w/main/json/Textmap.json')
      .then(response => response.json())
      .then(textMapData => {
        displayCharacterInfo(CharacterData, textMapData);
      })
      .catch(error => console.error('TextMap.jsonの読み込みに失敗しました', error));
  })
  .catch(error => console.error('Characters.jsonの読み込みに失敗しました', error));

function displayCharacterInfo(CharacterData, textMapData) {
  var CharacterInfoElement = document.getElementById("CharacterInfo");

  for (var CharacterId in CharacterData) {
    if (CharacterData.hasOwnProperty(CharacterId)) {
      var character = CharacterData[CharacterId];
      var CharacterName = textMapData[character.nameTextMapHash]?.JP;
      var starCount = character.qualityType === 'QUALITY_ORANGE' ? 5 : 4;
      var costElemTypeIconPath = `img/${character.costElemType}.png`;
      var avatarCard = document.createElement('div');

      avatarCard.innerHTML = `
        <a href="/www/Character/${CharacterId}" class="inline-block">
          <div name="Icon" class="av">
            <div class="bg-itemShade ${character.qualityType}">
              <span>
                <img loading="eager" src="${costElemTypeIconPath}" alt="Element Icon" class="elementicon" onError="this.onerror=null;this.src='https://raw.githubusercontent.com/Nbonbo7/w/main/img/UI_Icon_Item_Temp.png';">
                <img loading="eager" src='https://raw.githubusercontent.com/Nbonbo7/w/main/img/ui/${character.iconName}.png' alt='icon' onError="this.onerror=null;this.src='https://raw.githubusercontent.com/Nbonbo7/www/main/img/UI_Icon_Item_Temp.png';">
              </span>
              <div class="Stardiv">
                ${Array(starCount).fill().map(() => `
                  <span class="PaimonStar">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="PaimonStars">
                      <path d="M381.2 150.3l143.7 21.2c11.9 1.7 21.9 10.1 25.7 21.6 3.8 11.6.7 24.2-7.9 32.8L438.5 328.1l24.6 146.6c2 12-2.9 24.2-12.9 31.3-9.9 7.1-23 8-33.7 2.3l-128.4-68.5-128.3 68.5c-10.8 5.7-23.9 4.8-33.8-2.3-9.9-7.1-14.9-19.3-12.8-31.3l24.6-146.6L33.58 225.9c-8.61-8.6-11.67-21.2-7.89-32.8 3.77-11.5 13.74-19.9 25.73-21.6L195 150.3l64.4-132.33C264.7 6.954 275.9-.04 288.1-.04c12.3 0 23.5 6.994 28.8 18.01l64.3 132.33z"></path>
                    </svg>
                  </span>
                `).join('')}
              </div>
            </div>
            <div class="paimonItemname">
              <span class="paimonname">${CharacterName}</span>
            </div>
          </div>
        </a>`;
      CharacterInfoElement.appendChild(avatarCard);
    }
  }
}
