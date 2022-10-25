// changing backrounds
// const darkmode = false;
// const skymode = false ;
// const sunmode = true;

// if (darkmode) {
//     document.body.style.background = "black";
// } else if (skymode) {
//     document.body.style.background = "blue";
// } else if(sunmode) {
//     document.body.style.background = "yellow";

// }
// console.log("done")


// const uberRide = 200;
// const driverCommission = 70/100;
// const nameOfDriver = "Zainab";
// const uberDriverEarning = uberRide * driverCommission;
// const uberEarnings = uberRide - uberDriverEarning;

// const output = "from a ride costing R" + uberRide +"," + nameOfDriver +"earns R" + parseInt(uberDriverEarning) + "with a 70% commission, while uber earn R" + parseInt(uberEarnings) + "with a 30% commission;"

//  const output =`from a ride costing R${uberRide},${nameOfDriver} earns R${uberDriverEarning} with a 70% commission, while uber earn R${uberEarnings} with a 30% commission;`

// console.log(output)

//VARIABLES WITH STRING, CONCATENATIONS, AND TMEPLATE LITERALS
// create variables fullName,jobTitle,university,age
// const fullName ="Zainab Davids";
// const jobTitle = "Fullstack Web Developer";
// const university ="Zaio Platform Academy";
// const age ="23"
// inject them into the string
// const output =`My name is ${fullName}
// I am ${jobTitle} 
// Studying at the ${university}
// I am ${age} years of age.`;
// Appear over multiple lines
// console.log(output)

//users Akhil And Sam have a conversation
//Whatsapp coversation with time stamp
// const akhil = "Akhil";
// const sam ="Sam";


// sendMessage(akhil,"Hi Sam,how are you?")
// sendMessage(sam,"Hi Akhil,i am doing fine and you?")
// sendMessage(akhil,"Doing good. Tell me a joke?")
// sendMessage(sam,"Your Face")

// function sendMessage(user,message){
//     const timestamp =getTimestamp()

// console.log(`${user}:${message}                :${timestamp}`);
// }


// function getTimestamp(){
//     const d=new Date();
//     const timestamp = d.getHours() + ":" + d.getMinutes();
//     return timestamp;
//  }

//bill of R12000 should be split between 8 people


//take the bill and split it amongst the number of people
//inputs,action,output
//input:amount ,number of people
//action:findout how each person has to pay
//output:amount each person pay

//Write code here

// function splitBill(amount,amountOfPeople){

//     const amountToPay = amount/amountOfPeople;
//     return `each person hast to pay R${Math.ceil(amountToPay) }`

// }
// console.log(splitBill(12000,8))
// console.log(splitBill(14800,9))

//Instagram Profile & Posts Objects
// const profile = {

//     username: "ZainabDavids",
//     posts: 55,
//     followers: 800,
//     following: 800,
//     picture: "p",
//     fullName: "Zainab Davids",
//     bio:"Some information",
//     link:"zaio.io",
//     info () {
//         const {username, posts, followers, following, bio, link} =this;
//        return `
//        info for: ${username},
//        Posts: ${posts},
//        Followers: ${followers},
//        Following: ${following},
//        Bio: ${bio},
//        Link: ${link},
//        `
//     },
//     posted () {
//         this.posts = this.posts+1;

//         return `
//          ${this.username} just posted a photo
//          Total number of posts updated to ${this.posts}
//         `;
        
//     }

// }
// console.log(profile.info());

// console.log(profile.posted());

// const posts = {

//     username:"zainab davids" ,
//     likes: 20 ,
//     comment:30,
//     timestamp: "12:00",

// }
// const {username, likes, timestamp, comment } = posts ;
// console.log(
//     `${posts.username} just posted a picture with ${posts.likes} likes and ${posts.comment} comments at ${posts.timestamp}`)


// console.log("obj"==="obj2");

// const obj = {name: "akhil"}
// const obj2 = {name:"akhil"}


// const profile = {
//     username: "",
//     password: "",
//     email: "",
//     posts:0,
//     followers:0,
//     following:0,
//     picture: "",
//     fullName: "",
//     bio: "",
//     link: "",
//     info() {

//     },
//     posted(){

//     },

// };

// const signedUpUser = {
//     username:"zainabdavids23",
//     email:"zay460@gmail.com",
//     password:"YUSUF2021!"
// }
// //SPREAD ...AND OBJECT ASSIGN
// const newUser = {...profile, ...signedUpUser};
// newUser.password ='12';
// console.log("combinedObject", newUser);
// console.log("emptyProfileObject", profile);
// console.log("signUpObject", signedUpUser);


// REST ...
// function sum(...args){
//     //sum all the parameters/arguments
//     console.log(args)
// }
// sum(22,44,99,66,88,33)


//ALL COLOURS

// const primaryColours ={
//     red:"red-hexcode",
//     blue:"blue",
// }

// const secondaryColours = {
//     grey:"grey",
//     black:"black",
// }

// const allColours= {
//     ...primaryColours, ...secondaryColours,
//     getColor(color) {
//         return this[color]
//     }

// } ;
// console.log(allColours.getColor("red"))

// const text = "zainab davids";
// let finalValue = "";
// for(let i = 0;i < text.length; i++){
//     finalValue = finalValue + text.charAt(i).toUpperCase()
// }
// console.log(finalValue)

// write a number loop of 012345678
// let output ="";
// for(let i =0; i <= 9; i++) {
//     output =output +i
// }
// console.log(output)


// console.log("*")
// console.log("* *")
// console.log("* * *")
// console.log("* * * *")
// console.log("* * * * *")

// for(let i=0; i<6;i++) {
//     let output=""
//     for(let j=0;j<=i+1;j++){
//         output = output + "*";
//         console.log(output)
//     }
    
// }

// let output = "";
// for (let i = 22; i >= 0; i = i-2) {

//     output = output + i 
// };
// console.log(output)

for(let i=6; i>0;i--){
    let input = "";
    for(j = 6; j=i-1; j--) {
        input = input + "*"

    }
};
console.log(input)

