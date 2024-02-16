const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
    const error = false;

    if (error) {
        reject(new Error("Erro no login"));
    }

    console.log("Usuário logado");
    resolve({ email });
    });
};

const getUserVideos = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getUserVideos");
            resolve(["video1", "video2", "video3"]);
        }, 2000);
    });
};

const getVideoDetails = (video) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getVideoDetails");
            resolve({ title: "Título do vídeo" });
        }, 2500);
    });
};

loginUser("thabata@gmail.com", "123456")
    .then((user) => getUserVideos(user.email))
    .then((videos) => getVideoDetails(videos[0]))
    .then((videoDetails) => console.log({ videoDetails }))
    .catch((error) => console.log({ error }));

// Promise.all
const yt = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Vídeos do Youtube");
    }, 2000);
});

const fb = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Posts do Facebook");
    }, 5000);
});

Promise.all([yt, fb]).then((result) => {
    console.log({ result });
});
