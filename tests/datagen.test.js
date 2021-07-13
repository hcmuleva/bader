import jsf from "json-schema-faker";
import {imageurls} from "./imageurls";

const schema = {
  type: "object",
  properties: {
    user: {
      type: "object",
      properties: {
        id: {
          $ref: "#/definitions/positiveInt"
        },
        name: {
          type: "string",
          faker: "name.findName"
        },
        email: {
          type: "string",
          format: "email",
          faker: "internet.email"
        },
        avatar:{
          "type": "string",
          faker:{
            fake: "image.avatar"
          }
        }
      },
      required: ["id", "name"]
    }
  },

  required: ["user"],
  definitions: {
    positiveInt: {
      type: "integer",
      minimum: 0,
      exclusiveMinimum: true
    }
  }
};



// sync-version (blocking)
const getTeacherUsers=()=>{
  let myDATA=[]
  let mobileNumber=98
  for (let i=0;i<10;i++){
    mobileNumber=mobileNumber+i
    const userObject={
      user_first_name:"teacher"+i,
      user_last_name: "teacher",
      user_name: "teacher"+i,
      user_email : "teacher"+i+"@a.com",
      user_gender: "Male",
      user_biography: "teacher account"+i,
      user_mobile: mobileNumber,
      user_avatar: imageurls[i+20],
      user_time_zone: "2020-05-17T13:25:25.858Z",
      user_password: "okok",
      user_birthday: "2020-05-17T13:25:25.858Z",
      user_language:"English",
      user_role:"Teacher"
    }
   myDATA.push(userObject)
    //myDATA.push(jsf.generate(schema)); // [object Object]
  }

  return myDATA
}

const getStudentUsers=()=> {
  let myDATA = []
  let mobileNumber = 98
  for (let i = 0; i < 10; i++) {
    mobileNumber = mobileNumber + i
    const userObject = {
      user_first_name: "student" + i,
      user_last_name: "student",
      user_name: "student" + i,
      user_email: "student" + i + "@a.com",
      user_gender: "Male",
      user_biography: "student account" + i,
      user_mobile: mobileNumber,
      user_avatar: imageurls[i],
      user_time_zone: "2020-05-17T13:25:25.858Z",
      user_password: "okok",
      user_birthday: "2020-05-17T13:25:25.858Z",
      user_language: "English",
      user_role: "Student"
    }
    myDATA.push(userObject)
    //myDATA.push(jsf.generate(schema)); // [object Object]
  }
  return myDATA
}
test("data Generation ", () => {
  // imageurls.map((img)=>{
  //   console.log("urls",img)
  // })
  console.log("DATA ",getStudentUsers())
  expect(true).toBeTruthy()
})


//
// // sync-version (blocking)
// const getUsers=()=>{
//   let myDATA=[]
//   for (let i=0;i<10;i++){
//     myDATA.push(jsf.generate(schema)); // [object Object]
//   }
//
//   return myDATA
// }
// test("data Generation ", () => {
//   console.log("DATA ",getUsers())
//   expect(true).toBeTruthy()
// })