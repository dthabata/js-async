const loginUser = (email, password, onSuccess, onError) => {
    setTimeout(() => {
        const error = false;

        if (error) {
            return onError(new Error("Erro no login"))
        }

        console.log("Usuário logado!");
        onSuccess({ email });
    }, 1500);

    console.log("Depois do setTimeout");
};

const user = loginUser("thabata@gmail.com", "123456", (user) => {
    console.log({ user });
}, (error) =>  {
    console.log({ error });
});

// console.log({ user });
