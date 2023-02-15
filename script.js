"use strict";
//1929. Concatenation of Array
// var getConcatenation = function (nums) {
//   return [...nums, ...nums]; //'...' refers to spread operator. It spreads the elements inside the array
// };
// let posts = [
//   { title: "Post one", content: "This is post one" },
//   { title: "Post two", content: "This is post second" },
// ];

// function getPost() {
//   setTimeout(() => {
//     let output = "";
//     posts.forEach((post, index) => {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// function creatPost(post, callback) {
//   setTimeout(() => {
//     posts.push(post);
//     callback();
//   }, 2000);
// }
// function createPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);
//       const error = false;
//       if (!error) {
//         resolve();
//       } else {
//         reject("Error:something went wrong");
//       }
//     }, 2000);
//   });
// }
// createPost({ title: "Post three", content: "This is post three" }).then(
//   getPost
// );
// let posts = [
//   { title: "Post one", body: "This is a post one" },
//   { title: "Post two", body: "This is a post two" },
// ];

// function createPost() {
//   setTimeout(() => {
//     let output = "";
//     posts.forEach((post) => {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// function getPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);
//       let error = true;
//       if (!error) {
//         resolve();
//       } else {
//         reject("Array is empty");
//       }
//     }, 5000);
//   });
// }

// // getPost({ title: "Post three", body: "This is a post three" })
// //   .then(createPost)
// //   .catch((err) => console.log(err));

// const promise1 = Promise.resolve("hello world");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, "goodbye")
// );

// Promise.all([promise1, promise2, promise3]).then((values) =>
//   console.log(values)
// );

// let createPosts = new Promise((resolve, reject) => {
//   let pos = ["post1", "post2", "post3"];
//   setTimeout(() => {
//     resolve(pos);
//   }, 1000);
// });

// let lastActivity = new Promise((resolve, reject) => {
//   let lastposts = new Date().getTime();
//   setTimeout(() => {
//     resolve(lastposts);
//   }, 1000);
// });

// Promise.all([createPosts, lastActivity]).then((values) => {
//   console.log(values[0], values[1]);
// });
// const createPost = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let posts = ["post1", "post2", "post3"];
//     resolve(posts);
//   }, 1000);
// });

// const updateLastUserActivityTime = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let lastActivityTime = "10:00 PM";
//     resolve(lastActivityTime);
//   }, 1000);
// });

// const deletePost = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let posts = ["post1", "post2"];
//     resolve(posts);
//   }, 1000);
// });

// Promise.all([createPost, updateLastUserActivityTime]).then((values) => {
//   console.log("Posts:", values[0]);
//   console.log("Last Activity Time:", values[1]);
//   deletePost.then((posts) => {
//     console.log("New Posts:", posts);
//   });
// });
// console.log("Person1: shows tickets");
// console.log("person2: shows tickets");

// const wifeBringingPopcorn = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("tickets");
//   }, 3000);
// });

// const popCOrn = wifeBringingPopcorn.then((t) => {
//   console.log("husband bringing popcorn");
//   console.log("wife waits at ticket counter");
//   return new Promise((resove, reject) => {
//     resove(`${t} popcorn`);
//   });
// });

// const getButter = popCOrn.then((t) => {
//   console.log("wife needs butter");
//   console.log("wife gets butter");
//   return new Promise((resolve, reject) => {
//     resolve(`${t} butter popcorn`);
//   });
// });

// getButter.then((t) => console.log(t));

// console.log("Person4: shows tickets");
// console.log("Person5: shows tickets");
// Do not touch this function at all
// function create3rdPost(callback) {
//   setTimeout(() => {
//     console.log("Post Three");
//     //If callback function is passed call it
//     if (callback) {
//       callback();
//     }
//   }, 1000);
// }

// //Please modify this function too to reach the desired output
// function create4thPost() {
//   setTimeout(() => {
//     console.log("Post Four");
//   }, 2000);
// }

// // Do not touch this function at all
// function create5thPost() {
//   setTimeout(() => {
//     console.log("Post Five");
//   }, 3000);
// }

// //You have to  modify the syntax below to reach the desired output
// create3rdPost();
// create4thPost();
// create5thPost();
// function create5thPost() {
//   //should return a promise
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       post.push({ title: "POST5" });
//       resolve();
//     }, 2000);
//   });
// }
// const blogs = [];

// //Do not touch these functions below at all
// function create1stBlog() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       blogs.push({ title: "BLOG1" });
//       resolve();
//     }, 3000);
//   });
// }

// //Do not touch these functions below at all
// function create2ndBlog() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       blogs.push({ title: "BLOG2" });
//       resolve();
//     }, 2000);
//   });
// }

// function deleteBlog() {
//   //complete this function such that it removes the last element from the blog Array and resolves the deleted blog in 1 second timeout
//   //If no blog present , it breaks the promise with ERROR (reject) in 1 second timeout

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (blogs.length > 0) {
//         const lastelement = blogs.pop();
//         resolve(lastelement);
//       } else {
//         reject("ERROR: Array is empty");
//       }
//     }, 1000);
//   });
// }

// //Call the function in the right way so that we can get the desired output
// create1stBlog().then(() => {
//   create2ndBlog().then(() => {
//     deleteBlog().then((blog) => {
//       console.log(blog.title);
//       deleteBlog().then((blog) => {
//         console.log(blog.title);
//         deleteBlog()
//           .then((blog) => {
//             console.log(blog.title);
//           })
//           .catch((err) => console.log(err));
//       });
//     });
//   });
// });

// let posts = [
//   { title: "Post one", body: "This is a post one" },
//   { title: "Post two", body: "This is a post two" },
// ];

// function createPost() {
//   setTimeout(() => {
//     let output = "";
//     posts.forEach((post) => {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// function getPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);
//       let error = false;
//       if (!error) {
//         resolve();
//       } else {
//         reject("Array is empty");
//       }
//     }, 5000);
//   });
// }

// getPost({ title: "Post three", body: "This is a post three" })
//   .then(createPost)
//   .catch((err) => console.log(err));

// let lastActivity = new Promise((resolve, reject) => {
//   let lastposts = new Date().getTime();
//   setTimeout(() => {
//     resolve(lastposts);
//   }, 1000);
// });

// Promise.all([createPost, lastActivity]).then((values) => {
//   console.log(values);
// });

console.log("person1 : show tickets");
console.log("person2 : show tickets");

const preMovie = async () => {
  const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("tickets"), 3000;
    });
  });

  const getPOpcorn = new Promise((resolve, reject) => resolve("popCorn"));

  const addButter = new Promise((resolve, reject) => resolve("butter"));

  const getColddrinks = new Promise((resolve, reject) => resolve("coldDrinks"));

  let tickets = await promiseWifeBringingTicks;

  console.log("wife: I have tics");
  console.log("we should go in");
  console.log("Wife: Iam hungry");

  let popCorn = await getPOpcorn;

  console.log("Husband i will popcorn");
  console.log("Husband: bought popcorn for wife");
  console.log("wife needa some butter on popcorn");

  let butter = await addButter;

  console.log("Husband: gets the butter for popcorn");
  console.log("anything else wife needa cold drinks ");

  let colddrinks = await getColddrinks;
  console.log("husband brings cold drinks for wife");
  console.log("husband: anthing else");
  console.log("wife: nothing");
  console.log("husband: let's get in");

  return tickets;
};

preMovie().then((m) => console.log(`person3 : show tickets`));

console.log("person4 : show tickets");
console.log("person5 : show tickets");
