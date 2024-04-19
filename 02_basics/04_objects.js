// const tinderUser=new Object()-->this is a singleton object
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="Adarsh"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname: {
        userfullName: {
            firstName:"Adarsh",
            lastName:"Sinha"
        }
    }
}
// console.log(regularUser.fullname.userfullName.firstName);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3=Object.assign({},obj1,obj2)//we should add emoty parenthesis before adding 2 objects because 
//                                       //it will add to the first empty parenthesis
const obj3={...obj1, ...obj2}
console.log(obj3);

const users=[
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    },
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]