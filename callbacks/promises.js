const userLeft = false
const userWatchingVideo = false

function watchVideo() {
    return new Promise((resolve, reject) => { //success, error
        if(userLeft) {
            reject({
                message: " user left"
            })
        }
        else if(userWatchingVideo) {
            reject({
                message: "user watching video"
            })
        }
        else {
            resolve({
                message: "callbacks complete"
            })
        }
    })
}

watchVideo().then((data) => {
    console.log(data.message)

}).catch((data) => {
    console.log(data.message)
})

// promises are async nature

// syntax
function myFun() {
    return new Promise(() => {})
}

myFun().then(() => {}).catch(() => {})
