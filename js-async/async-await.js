const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
    const error = true;

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

const displayUser = async () => {
    try {
    const user = await loginUser("thabata@gmail.com", "123456");
    const videos = await getUserVideos(user.email);
    const videoDetails = await getVideoDetails(videos[0]);

    console.log({ videoDetails });
    
    } catch (error) {
        console.log({ error });
    }
};

displayUser();
