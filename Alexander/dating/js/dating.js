var Profile = /** @class */ (function () {
    function Profile(name, age, location, hobbies, music, motto, img, like) {
        this.name = "";
        this.age = 0;
        this.location = "";
        this.hobbies = "";
        this.music = "";
        this.motto = "";
        this.img = "";
        this.like = false;
        this.name = name;
        this.age = age;
        this.location = location;
        this.hobbies = hobbies;
        this.music = music;
        this.motto = motto;
        this.img = img;
        this.like = like;
    }
    return Profile;
}());
var Jenny = new Profile("Jenny", 25, "Vienna", "Yoga,coffee,ballons", "Enya", "Live,lough,learn", "img/test.jpg", true);
var John = new Profile("John", 22, "London", "soccer", "Shakira", "Love soccer balls", "img/test.jpg", false);
var Max = new Profile("Max", 26, "Paris", "party", "David Guetta", "I'm too sexy for this shirt", "img/test.jpg", false);
var Sandra = new Profile("Sandra", 20, "Berlin", "Yoga,coffee,ballons", "Linkin Prk", "I'm a pastafarian", "img/test.jpg", false);
var Julia = new Profile("Julia", 28, "Vienna", "Yoga,coffee,ballons", "Shakira", "Carpe Diem", "img/test.jpg", false);
var Jane = new Profile("Jane", 21, "Rome", "Yoga,coffee,ballons", "Coldplay", "People I like: 1.Cats", "img/test.jpg", false);
var Dave = new Profile("Dave", 37, "Beavertown", "Beer,beer,beer", "Britney Spears", "See you next beer", "img/test.jpg", true);
var Alex = new Profile("Alex", 32, "New York", "Yoga,coffee,ballons", "Enya", "Date me!! ...please...", "img/test.jpg", false);
var arrayOfProfiles = [];
arrayOfProfiles.push(Jenny);
arrayOfProfiles.push(John);
arrayOfProfiles.push(Max);
arrayOfProfiles.push(Sandra);
arrayOfProfiles.push(Julia);
arrayOfProfiles.push(Jane);
arrayOfProfiles.push(Dave);
arrayOfProfiles.push(Alex);
for (var _i = 0, arrayOfProfiles_1 = arrayOfProfiles; _i < arrayOfProfiles_1.length; _i++) {
    var value = arrayOfProfiles_1[_i];
    $("#cards").append("\n\t\t<div class=\"card border\">\n\t\t\t<img src=\"" + value.img + "\" class=\"w-100\">\n\t\t\t<div class=\"heart\">&#x1F5A4;</div>\n\t\t\t<div><p>" + value.motto + "</p></div>\n\t\t</div>\n\t");
}
var cards = $(".card");
var _loop_1 = function (i) {
    $(".card")[i].addEventListener("click", function () {
        $("#selectedCard").html("");
        $("#selectedCard").append("\n\t\t\t<div class=\"border\">\n\t\t\t\t<img src=\"" + arrayOfProfiles[i].img + "\" class=\"w-100\">\n\t\t\t\t<div>\n\t\t\t\t\t<p class=\"m-0\">Name: " + arrayOfProfiles[i].name + "</p>\n\t\t\t\t\t<p class=\"m-0\">Age: " + arrayOfProfiles[i].age + "</p>\n\t\t\t\t\t<p class=\"m-0\">Location: " + arrayOfProfiles[i].location + "</p>\n\t\t\t\t\t<p class=\"m-0\">Hobbies: " + arrayOfProfiles[i].hobbies + "</p>\n\t\t\t\t\t<p class=\"m-0\">Favourite Music: " + arrayOfProfiles[i].music + "</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t");
    });
};
for (var i = 0; i < cards.length; i++) {
    _loop_1(i);
}
// &#x2764;
var hearts = $(".heart");
console.log(hearts);
var _loop_2 = function (i) {
    $(".heart")[i].addEventListener("click", function () {
        console.log("success");
        $("#cards")[i].children(2).html("&#x2764;");
        $("#favourites").append("\n\t\t\t<div class=\"border\" class=\"w-100 col-6\">\n\t\t\t\t<img src=\"" + arrayOfProfiles[i].img + "\">\n\t\t\t\t<div>\n\t\t\t\t\t<p class=\"m-0\">Name: " + arrayOfProfiles[i].name + "</p>\n\t\t\t\t\t<p class=\"m-0\">Age: " + arrayOfProfiles[i].age + "</p>\n\t\t\t\t\t<p class=\"m-0\">Location: " + arrayOfProfiles[i].location + "</p>\n\t\t\t\t\t<p class=\"m-0\">Hobbies: " + arrayOfProfiles[i].hobbies + "</p>\n\t\t\t\t\t<p class=\"m-0\">Favourite Music: " + arrayOfProfiles[i].music + "</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t");
    });
};
for (var i = 0; i < hearts.length; i++) {
    _loop_2(i);
}
