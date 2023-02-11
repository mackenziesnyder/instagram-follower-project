"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const followers = __importStar(require("./followers.json"));
const following = __importStar(require("./following.json"));
let myFollowing = [];
for (var i = 200; i < following.relationships_following.length; i++) {
    let followingData = (following.relationships_following[i]["string_list_data"]);
    var followingName = followingData[0]["value"];
    myFollowing.push(followingName);
}
console.log("Accounts that I follow: ");
console.log(myFollowing);
let myFollower = [];
for (var i = 0; i < followers.relationships_followers.length; i++) {
    let followerData = (followers.relationships_followers[i]["string_list_data"]);
    var followerName = followerData[0]["value"];
    myFollower.push(followerName);
}
console.log("Accounts that follow me: ");
console.log(myFollower);
let doNotFollowBack = myFollowing.filter(item => myFollower.indexOf(item) < 0);
console.log("Accounts that don't follow you back: ");
console.log(doNotFollowBack);
let notFollowingBack = myFollower.filter(item => myFollowing.indexOf(item) < 0);
console.log("Accounts that you don't follow back: ");
console.log(notFollowingBack);
//# sourceMappingURL=index.js.map