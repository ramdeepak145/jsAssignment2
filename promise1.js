function getData(uId) {
    let promise= new Promise(function(resolve,reject){
        setTimeout(() => resolve("skc@gmail.com"), 4000);
});
return promise;
}
console.log("start");
var email = getData("skc");
email.then((email)=>{
    console.log("Email Id is"+email);
});

