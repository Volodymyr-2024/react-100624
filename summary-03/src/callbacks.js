// Simulating asynchronous tasks with setTimeout
function getUser(userId, callback) {
  setTimeout(() => {
    console.log("Fetched user data");
    callback({ userId, name: "John" });
  }, 1000);
}

const getUserPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ id: 1, name: "John" });
  }, 1000);
});

const SERVER_URL = "https://jsonplaceholder.typicode.com";

function getUserPromise(userId) {
  return new Promise((resolve, reject) => {
    try {
      fetch(`${SERVER_URL}/users/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
        });
    } catch (e) {
      reject(e);
    }
  });
}

function getPosts(userId, callback) {
  setTimeout(() => {
    console.log("Fetched user posts");
    callback([
      { postId: 1, content: "Post 1" },
      { postId: 2, content: "Post 2" },
    ]);
  }, 1000);
}

function getComments(postId, callback) {
  setTimeout(() => {
    console.log("Fetched comments for post:", postId);
    callback([{ commentId: 1, text: "Nice post!" }]);
  }, 1000);
}

// Callback hell begins here
getUser(1, (user) => {
  console.log("User:", user);
  getPosts(user.userId, (posts) => {
    console.log("Posts:", posts);
    getComments(posts[0].postId, (comments) => {
      console.log("Comments:", comments);
      // If more nested callbacks were needed, the code would keep indenting further
    });
  });
});

// Не работает, как пример
(async () => {
  try {
    const user = await getUser;
    const posts = await getPosts(user.userId);
    const comments = await getComments(posts[0].postId);
    console.log(comment);
  } catch (error) {
    console.error(error);
  }
})();
