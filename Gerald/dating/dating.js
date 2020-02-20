var array = [];
var Profile = /** @class */ (function () {
    function Profile(name, age, location, hobbies, music, motto, img) {
        this.name = "";
        this.age = 0;
        this.location = "";
        this.hobbies = "";
        this.music = "";
        this.motto = "";
        this.img = "";
        this.name = name;
        this.age = age;
        this.location = location;
        this.hobbies = hobbies;
        this.music = music;
        this.motto = motto;
        this.img = img;
    }
    return Profile;
}());

const whiteHeart = '\u2661';
const blackHeart = '\u2665';
const button = document.querySelector('button');
button.addEventListener('click', toggle);

function toggle() {
  const like = button.textContent;
  if(like==whiteHeart) {
    button.textContent = blackHeart;
  } else {
    button.textContent = whiteHeart;
  }
}
