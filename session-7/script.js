// const fs = require("fs"); // common js syntax
// const data = fs.readFileSync("test.txt", "utf-8");
// console.log("data", data);

// async
// fs.readFile("test.txt", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data.toString());
// });

// console.log("complete exec")

// Callback:
function calSquare(number, callback) {
  setTimeout(() => {
    const result = number * number;
    callback(null, result);
  }, 1000);
}

calSquare(5, (err, number) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("value", number);
});

console.log("Hi there");

// call back hell

function getUser(userid, callback) {
  setTimeout(() => {
    console.log(userid);
    callback(null, userid);
  }, 1000);
}

function getUserPost(postID, callback) {
  setTimeout(() => {
    console.log(postID, "post");
    callback(null, postID);
  });
}

function getUserComment(commentID, callback) {
  setTimeout(() => {
    console.log(commentID, "comment");
    callback(null, Comment);
  });
}
// getUser(1001, (err, user)=>{
//     if (err){
//         console.log(err)
//         return
//     }
//     console.log(user)

//     getUserPost(1001,(err, posts)=>{
//         if  (err){
//             console.log(err)
//             return
//         }
//         console.log(posts)

//         getUserComment(2001, (err, comment)=>{
//             if (err){
//                 console.log(err)
//                 return
//             }
//             console.log(comment)

//         })
//     })
// })

// Promises :
// - more structured than callback
// chain operation -> .then()
// - .catch() -> catch the error

// function basic(){
//     return new Promise((resolve, reject) =>{
//         if(true){
//             resolve(12)
//         }else{
//             reject(error)
//         }
//     })
// }
// getUser()
//     .then(result => {return getpost()})
//     .then(result => {return getComment()})
//     .then()
//     .catch(err => {console.log(err)})

function getUserPost(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => {
      return response.json();
    })
    .then((user) => {
      return fetch(`https://jsonplaceholder.typicode.com/posts?userId=1`)
        .then((response) => {
          return response.json();
        })
        .then((posts) => {
          return { user, posts };
        });
    });
}

getUserPost(1)
  .then((result) => {
    console.log("user", result.user);
    console.log("posts", result.posts);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("Hi there2");

// 3. Async/await :
// 1. built on top of promises
// 2. it'll look more sync then promise or callback
// 3. good error handling try  catch
// 4. clean syntax compare to callback or promises.

async function getUserAsync(userID) {
  try {
    const userInfo = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userID}`
    );
    const user = await userInfo.json();
    console.log(user);
    const postUser = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=1`
    );
    const posts = await postUser.json();

    return { user, posts };
  } catch (err) {
    throw new Error(`error: ${err.message}`);
  }
}

async function getData() {
  try {
    const data = await getUserAsync(1);
    console.log(data.user);
    console.log(data.posts);
  } catch (err) {
    console.log(err);
  }
}

getData();

// Assignment : console.log(), execution context
