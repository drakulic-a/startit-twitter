//var yourTextArea = document.getElementById("usertext").value;
// In case you want to limit the number of characters in no less than, say, 10
// or no more than 400.        
//    if (yourTextArea.length < 10 || yourTextArea.length > 400) {
//        alert("The field must have no less than 10 and no more than 400 characters.");
//        return false;
//    }
//probaj da namjestis na button-u on click funkciju koja ti daje empty textform


var profil = {
	coverImage:"http://hdwpro.com/wp-content/uploads/2017/03/Art-Background-Image.png",
	profileImage:"https://scontent.fbeg1-1.fna.fbcdn.net/v/t1.0-1/c0.0.160.160/p160x160/13592647_1032617346828164_8664064096985920531_n.jpg?oh=e92c4ab3d5fdf409efde6b3a2b886820&oe=5A8EA182",
	name: "Aleksandra",
	lastName: "Drakulic",
	userName: "@sakisale",
	statusi: [
			'Hello World',
			'Pokusavam da napravim twitter',
			'Vidjecemo kako ce ispasti'
	]
};
console.log(profil);

var hero = document.getElementById('hero');
hero.style.background = "url('" + profil.coverImage + "') no-repeat center";

var profileImage = document.getElementById('profile-img');
profileImage.src = profil.profileImage;
profileImage.alt = profil.name + " " + profil.lastName + "profile photo";

var miniAvatar = document.getElementsByClassName('mini-avatar');
miniAvatar.src = profil.profileImage;
miniAvatar.alt = profil.name + " " + profil.lastName + "mini avatar";
console.log(miniAvatar);

var fullName = document.getElementById('full-name');
fullName.innerHTML = profil.name + " " + profil.lastName;

var userName = document.getElementById('user-name');
userName.innerHTML = profil.userName;


var statusiSection = document.getElementById('statusi');
var div; 
var p;

for (var i = profil.statusi.length - 1; i >= 0; i--) {
	div = document.createElement('div');
	p = document.createElement('p');
	p.innerHTML = profil.statusi[i];
	div.appendChild(p);
	div.classList.add('statusi');
	statusiSection.appendChild(div);
}
console.log(statusiSection);