const fetchuser = (uid) => {
    return new Promise((resolve, reject) => {
        const isconnected = false;

        setTimeout(() => {
            if (isconnected) {
                resolve({ userid: uid, uname: "Uday", posts: 24, followers: 512, folloinng: 270, })
            } else {
                reject(`ERROR : "user not found"`);
            }
        }, 3000);
    })
}

fetchuser(110)
    .then(
        (output) => {
            console.log("user found", output)
        }
    )
    .catch(
        (error) => {
            console.log(error);

        }
    )
