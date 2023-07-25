///First Example>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

console.log("start");

function messageFunc(message, cb) {
  setTimeout(() => {
    cb(`this is ${message}`);
  }, 1000);
}

const message = messageFunc("Code practice in JS", (x) => {
  console.log(x);
});

console.log("end");

///Second Example>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

console.log("start");

function messageFunc(message, cb) {
  setTimeout(() => {
    cb(`this is ${message}`);
  }, 1000);
}

function likeTheVideo(video, cb) {
  setTimeout(() => {
    cb(`Like the ${video} video`);
  }, 1000);
}

function shareTheVideo(video, cb) {
  setTimeout(() => {
    cb(`Share the ${video} video`);
  }, 1000);
}

const message = messageFunc("Code practice in JS", (x) => {
  console.log(x);
  likeTheVideo("JS practice", function (action) {
    console.log(action);
    shareTheVideo("JS practice", function (action) {
      console.log(action);
    });
  });
});

console.log("end");

///Third Example>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

console.log("start");

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = false;
    if (result) {
      resolve("Practice JS code");
    } else {
      reject(new Error("You are not able to practice JS Code"));
    }
  }, 2000);
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

console.log("end");

///fourth Example>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

console.log("start");

function messageFunc(message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`this is ${message}`);
    }, 1000);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = true;
      if (result) {
        resolve(`Like the ${video} video`);
      } else {
        reject(new Error(`Failed to Like the ${video} video`));
      }
    }, 2000);
  });
}

function shareTheVideo(video, cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video} video`);
    }, 4000);
  });
}

// messageFunc("Code practice in JS")
//     .then((res) => {
//         console.log(res)
//         likeTheVideo("JS practice")
//             .then((res) => {
//                 console.log(res)
//                 shareTheVideo("JS practice")
//                     .then((res)=>{
//                         console.log(res)
//                     })
//             })
//     })
//     .catch((err) => {
//         console.error(err)
//     })

messageFunc("Code practice in JS")
  .then((res) => {
    console.log(res);
    return likeTheVideo("JS practice");
  })
  .then((res) => {
    console.log(res);
    return shareTheVideo("JS practice");
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

const result = async () => {
  try {
    const message1 = await messageFunc("Code practice in JS");
    console.log(message1);
    const message2 = await likeTheVideo("JS practice");
    console.log(message2);
    const message3 = await shareTheVideo("JS practice");
    console.log(message3);
  } catch (error) {
    console.error("Promise failed", error);
  }
};

result();

console.log("end");

///Fifth Example>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
