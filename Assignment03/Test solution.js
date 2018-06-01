
//find how many person have more than 1 post liked ? Print their names.


var feed ={

"posts" : [

{
"author":"Mark Zuckerberg",
"likes": ["Steve Job","Billu Gates","Raynold","Jefferson D","Elon Dusk","Donald Trump"]
},
{
"author":"Jacky Chan",
"likes": ["Steve Jobs","Bill Gates","Arnold","Jeffy J","Elon Musk","Donald Tramp"]
},
{
"author":"Steve Woz",
"likes": ["Steve J","Bill Gates","Arnold","Jeff J","Elon Rusk","Donald Trip"]
}

]

}

var moreThanOneLike = function(f){
	
	var temp=[];
	var ans=[];

	for (var i = 0; i < f.posts.length; i++) {
		for (var j = 0; j < f.posts[i].likes.length; j++) {

			var obj = {name: f.posts[i].likes[j], flag: false};

			temp.push(obj);

		}
	}

	for (var i = 0; i < temp.length; i++) {
		for (var j = i+1; j < temp.length; j++) {
			if(strcmp(temp[i].name,temp[j].name) && !(temp[i].flag)){
				ans.push(temp[i].name);
				temp[i].flag = true;
				temp[j].flag = true;
			}
		}
	}
	return ans;
}

// O(n^3) algo

var strcmp = function(str1,str2){

	if (str1.length != str2.length) {
		return false;
	}
	else{
		for (var i = 0; i < str1.length; i++) {
			if(str1[i] != str2[i]){
				return false;
			}
		}
	}
	return true;
}

console.log(moreThanOneLike(feed));
console.log(moreThanOneLike(feed).length);