import * as followers from './followers.json';
import * as following from './following.json';

//Gets usernames of those you follow
let myFollowing: string[] = [];

for(var i = 0; i<following.relationships_following.length; i++){
    let followingData: any = (following.relationships_following[i]["string_list_data"]);
    var followingName: string =  followingData[0]["value"];
    myFollowing.push(followingName);
    
}
console.log("Accounts that I follow: ")
console.log(myFollowing);

//Gets usernames of people who follow you
let myFollower: string[] = [];

for(var i = 0; i<followers.relationships_followers.length; i++){
    let followerData: any = (followers.relationships_followers[i]["string_list_data"]);
    var followerName: string =  followerData[0]["value"];
    myFollower.push(followerName);
    
}
console.log("Accounts that follow me: ")
console.log(myFollower);

//Accounts you follow who don't follow you back
let doNotFollowBack: string[] = myFollowing.filter(item => myFollower.indexOf(item) < 0)
console.log("Accounts that don't follow you back: ")
console.log(doNotFollowBack);

//Accounts who follow you that you don't follow back 
let notFollowingBack: string[] = myFollower.filter(item => myFollowing.indexOf(item) < 0)
console.log("Accounts that you don't follow back: ")
console.log(notFollowingBack);