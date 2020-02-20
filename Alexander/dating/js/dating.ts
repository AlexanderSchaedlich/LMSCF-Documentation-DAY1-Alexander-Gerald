class Profile{
	name = "";
	age = 0;
	location = "";
	hobbies = "";
	music = "";
	motto = "";
	img = "";
	like = false;
	constructor(name:string, age:number, location:string, hobbies:string, music:string, motto:string, img:string, like:boolean){
		this.name = name;
		this.age = age;
		this.location = location;
		this.hobbies = hobbies;
		this.music = music;
		this.motto = motto;
		this.img = img;
		this.like = like;
	}
}
let Jenny = new Profile ("Jenny",25,"Vienna", "Yoga,coffee,ballons","Enya","Live,lough,learn","img/test.jpg",true);
let John =new Profile ("John",22,"London", "soccer","Shakira","Love soccer balls","img/test.jpg",false);
let Max =new Profile ("Max",26,"Paris", "party","David Guetta","I'm too sexy for this shirt","img/test.jpg",false);
let Sandra =new Profile ("Sandra",20,"Berlin", "Yoga,coffee,ballons","Linkin Prk","I'm a pastafarian","img/test.jpg",false);
let Julia =new Profile ("Julia",28,"Vienna", "Yoga,coffee,ballons","Shakira","Carpe Diem","img/test.jpg",false);
let Jane =new Profile ("Jane",21,"Rome", "Yoga,coffee,ballons","Coldplay","People I like: 1.Cats","img/test.jpg",false);
let Dave =new Profile ("Dave",37,"Beavertown", "Beer,beer,beer","Britney Spears","See you next beer","img/test.jpg",true);
let Alex =new Profile ("Alex",32,"New York", "Yoga,coffee,ballons","Enya","Date me!! ...please...","img/test.jpg",false);
let arrayOfProfiles:Array<object> = [];
arrayOfProfiles.push(Jenny);
arrayOfProfiles.push(John);
arrayOfProfiles.push(Max);
arrayOfProfiles.push(Sandra);
arrayOfProfiles.push(Julia);
arrayOfProfiles.push(Jane);
arrayOfProfiles.push(Dave);
arrayOfProfiles.push(Alex);

for(let value of arrayOfProfiles){
	$("#cards").append(`
		<div class="card border">
			<img src="${value.img}" class="w-100">
			<div class="heart">&#x1F5A4;</div>
			<div><p>${value.motto}</p></div>
		</div>
	`)
}
let cards = $(".card");
for(let i = 0; i < cards.length; i++){
	$(".card")[i].addEventListener("click", function(){
		$("#selectedCard").html("");
		$("#selectedCard").append(`
			<div class="border">
				<img src="${arrayOfProfiles[i].img}" class="w-100">
				<div>
					<p class="m-0">Name: ${arrayOfProfiles[i].name}</p>
					<p class="m-0">Age: ${arrayOfProfiles[i].age}</p>
					<p class="m-0">Location: ${arrayOfProfiles[i].location}</p>
					<p class="m-0">Hobbies: ${arrayOfProfiles[i].hobbies}</p>
					<p class="m-0">Favourite Music: ${arrayOfProfiles[i].music}</p>
				</div>
			</div>
		`);
	});
}


// &#x2764;
let hearts = $(".heart");
console.log(hearts)
for(let i = 0; i < hearts.length; i++){
	$(".heart")[i].addEventListener("click", function(){
		console.log("success")
		$("#favourites").append(`
			<div class="border">
				<img src="${arrayOfProfiles[i].img}" class="w-100">
				<div>
					<p class="m-0">Name: ${arrayOfProfiles[i].name}</p>
					<p class="m-0">Age: ${arrayOfProfiles[i].age}</p>
					<p class="m-0">Location: ${arrayOfProfiles[i].location}</p>
					<p class="m-0">Hobbies: ${arrayOfProfiles[i].hobbies}</p>
					<p class="m-0">Favourite Music: ${arrayOfProfiles[i].music}</p>
				</div>
			</div>
		`);
	});
}
