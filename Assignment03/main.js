/////////////// Question. 01 ////////////////
var triangleArea = function (a,b,c) {

	if ((a>0)&&(b>0)&&(c>0)) {
		
		// Heuron's formula
		var s = (a+b+c)/2;
		var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
		//

		return area;
	} 
	else{
		return 0;
	}
}

/////////////////////////////////////////////


/////////////// Question. 02 ////////////////

var toFarenheit = function (c) {
	var f = c * (9/5) + 32;
	return f;
}

var toCelsius = function (f) {
	var c = (5 / 9) * (f - 32);
	return c;
}

/////////////////////////////////////////////


/////////////// Question. 03 ////////////////

var greatest = function (a,b,c) {
	return Math.max(a,b,c);
}

/////////////////////////////////////////////


/////////////// Question. 04 ////////////////

var capitalize = function (str){
	var res1 = [];
	var res1 = str.split(" ");
	var res2 = [];
	for (var i = 0; i < res1.length; i++) {
		res2[i]=res1[i].charAt(0).toUpperCase().concat(res1[i].substr(1));
	}
	return res2.join(" ");
}

/////////////////////////////////////////////


/////////////// Question. 05 ////////////////

var threeOrSeven = function (x) {
	
	if (x%3 == 0) {
	
		if (x%7 == 0) {
			return 21;			
		}
		return 3;
	}
	
	else if (x%7 == 0) {
	
		if (x%3 == 0) {
			return 21;
		}
	
		return 7;
	}
	
	else{
		return 0;
	}
}

/////////////////////////////////////////////


/////////////// Question. 06 ////////////////

var strcmp = function (str1,str2) {
	var count=0;
	for (var i = 0; i < str1.length; i++) {
		if (str1[i]!==str2[i]) {
			count++;
			console.log(str1[i].concat(":",str2[i],":position:",i));
		}
	}
	return count;
}

/////////////////////////////////////////////


/////////////// Question. 07 ////////////////
var isPangram = function(str){
	var alpha="abcdefghijklmnopqrstuvwxyz";
	for (var i = 0; i < str.length; i++) {
		alpha=alpha.split(str[i].toLowerCase()).join("");
	}

	if (alpha=="") {
		return true;
	}
	return false;
}

/////////////////////////////////////////////


/////////////// Question. 08 ////////////////

var isIsogram = function (str) {
	var flag=false;
	for (var i = 0; i < str.length; i++) {
		for (var j = i+1; j < str.length; j++) {
			if (str[i]==str[j]) {
				flag=true;
				break;
			}
		}
	}
	return flag;
}

/////////////////////////////////////////////


/////////////// Question. 09 ////////////////

var acronym = function (str)
{
	var res1 = str.split(" ");
	var res2 = [];
	for (var i = 0; i < res1.length; i++) {
		res2[i] = res1[i].charAt(0).toUpperCase();
	}

	return res2.join("");
}

/////////////////////////////////////////////


/////////////// Question. 10 ////////////////

var user = [{
	"name" : "Alpha",
	"img" : ["usrImg.jpg"],
	"posts" : [
		{
			"authorIndex" : 1,
			"content" : "content of post0 of user0",
			"image" : "postImg.jpg",
			"likes" : [1],
			"comments" : [
				{
					"userIndex" : 1,
					"text" : "nice"
				},
				{
					"userIndex" : 1,
					"text" : "great"
				}
			],

			"share" : [1,4]
		},
		{
			"authorIndex" : 1,
			"content" : "content of post1 of user0",
			"image" : "postImg.jpg",
			"likes" : [1,0],
			"comments" : [
				{
					"userIndex" : 1,
					"text" : "nice"
				},
				{
					"userIndex" : 0,
					"text" : "thanks"
				}
			],

			"share" : [1,4]
		}
	]

},
{
	"name" : "Beta",
	"img" : ["usrImg.jpg"],
	"posts" : [
		{
			"authorIndex" : 0,
			"content" : "content of post0 of user1",
			"image" : "postImg.jpg",
			"likes" : [0,1],
			"comments" : [
				{
					"userIndex" : 1,
					"text" : "nice"
				},
				{
					"userIndex" : 0,
					"text" : "great"
				}
			],

			"share" : [1]
		},
	]

}

];

/////////////// Q. 10(a) /////////////////

var postByUser = function(userIndex,AuthorIndex){
	var count=0;
	for (var i = 0; i < user[userIndex].posts.length; i++) {
		if(user[userIndex].posts[i].authorIndex==AuthorIndex){
			count++;
		}
	}
	return count;
}
// console.log(postByUser(0,1));

/////////////// Q. 10(b) /////////////////

var noOfLikes = function(userIndex,postIndex){
	return user[userIndex].posts[postIndex].likes.length;
}
// console.log(noOfLikes(0,1));

/////////////// Q. 10(c) /////////////////

var usersLikedThisPost = function(userIndex,postIndex){
	var names = [];
	for (var i = 0; i < user[userIndex].posts[postIndex].likes.length; i++) {
		names.push(user[user[userIndex].posts[postIndex].likes[i]].name);
	}
	return names;
	
}
// console.log(usersLikedThisPost(0,0));

/////////////// Q. 10(d) /////////////////

var firstToLike = function(userIndex,postIndex){
	return user[user[userIndex].posts[postIndex].likes[0]].name;
}
// console.log(firstToLike(1,0));

/////////////// Q. 10(e) /////////////////

var commentedAndLiked = function(userIndex,postIndex){
	var CALUI = [];	//Commented And Liked User Index
	for (var i = 0; i < user[userIndex].posts[postIndex].likes.length; i++) {
		for (var j = 0; j < user[userIndex].posts[postIndex].comments.length; j++) {
			if(user[userIndex].posts[postIndex].likes[i] == user[userIndex].posts[postIndex].comments[j].userIndex){//userIndex is a prop here.
				CALUI.push(user[user[userIndex].posts[postIndex].comments[j].userIndex].name);
			}
		}
	}
	return CALUI;
}
// console.log(commentedAndLiked(0,1));

/////////////// Q. 10(f) /////////////////

var mostComments = function(userIndex){
	var count = [];
	for (var i = 0; i < user.length; i++) {
		count.push(0);
	}


	for (var i = 0; i < user[userIndex].posts.length; i++) {
		for (var j = 0; j < user[userIndex].posts[i].comments.length; j++) {//can put j<10 here for top 10 posts
			count[user[userIndex].posts[i].comments[j].userIndex]++;//userIndex is a prop here.
		}
	}

	var maxCount = count[0];
	var maxIndex = 0;
	for (var i = 1; i < count.length; i++) {
		if(count[i-1]<count[i]){
			maxCount = count[i];
			maxIndex = i;
		}
	}

	return user[maxIndex].name;
}
// console.log(mostComments(0));

/////////////////////////////////////////////


/////////////// Question. 11 ////////////////

var facebookFriends = [
	"Piyush Yadav",
	"Sachin Upadhyay",
	"Rishabh Rydh",
	"Fake Singh",
	"Vicky Bairwa",
	"Vicky Prasad",
	"Piyush Singh",
	"Piyush Sharma"
];

/////////////// Q. 11(a) /////////////////
var deleteFake = function (){
	for (var i = 0; i < facebookFriends.length; i++) {
		if(facebookFriends[i].split(" ")[0].toLowerCase()==="fake"){
			facebookFriends.splice(i,1);
		}
	}
	return facebookFriends;
}

/////////////// Q. 11(b) /////////////////
var addFriends = function(list){
	facebookFriends = facebookFriends.concat(list);
	return facebookFriends;
}

/////////////// Q. 11(c) /////////////////
var printSorted = function(){
	return facebookFriends.sort();
}

/////////////// Q. 11(d) /////////////////
var initials = function(){
	var init = [];
	for (var i = 0; i < facebookFriends.length; i++) {
		init.push(acronym(facebookFriends[i]));
	}
	return init;
}

/////////////// Q. 11(e) /////////////////
var printSortedLength = function(){
	var sortedNamesByLength = [];	// final array

	var len = [];	// Array with each name's length

	for (var i = 0; i < facebookFriends.length; i++) {
		len.push(facebookFriends[i].length);
	}

	for (var i = 0; i < facebookFriends.length; i++) {
		
		//1. find index of max length element
		var max = 0;
		var maxValue = len[0];
		for (var j = 1; j < len.length; j++) {
			if (len[j]>maxValue) {
				maxValue = len[j];
				max = j;
			}
		}
		//

		//2. Push in final array
		sortedNamesByLength.push(facebookFriends[max]);
		//

		//3. Make length of current maximum length element = minimum (ie 0)
		len[max] = 0;
		//
	}
	
	return sortedNamesByLength;
}

/////////////// Q. 11(f) /////////////////
var samefName = function(){
	
	// final o/p array
	var sameNames = [];

	//flags to check if the same fName element already included or not
	var flag=[];
	for (var i = 0; i < facebookFriends.length; i++) {
		flag[i]=0;
	}

	// main logic
	for (var i = 0; i < facebookFriends.length; i++) {
		var count = 0;
		sameNames.push(facebookFriends[i]);
		for (var j = i+1; j < facebookFriends.length; j++) {
			if (facebookFriends[i].split(" ")[0]===facebookFriends[j].split(" ")[0] && flag[i]==0) {
				count++;
				sameNames.push(facebookFriends[j]);
				flag[j]=1;
			}
		}
		if (count == 0) {
			sameNames.pop();
			flag[i]=0;
		}
	}
	//

	return sameNames;
}

/////////////////////////////////////////////