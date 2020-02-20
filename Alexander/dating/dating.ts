let array:Array<object> = [];
class Profile{
	name = "";
	age = 0;
	location = "";
	hobbies = "";
	music = "";
	motto = "";
	img = "";
	constructor(name:string, age:number, location:string, hobbies:string, music:string, motto:string, img:string){
		this.name = name;
		this.age = age;
		this.location = location;
		this.hobbies = hobbies;
		this.music = music;
		this.motto = motto;
		this.img = img;
	}
}