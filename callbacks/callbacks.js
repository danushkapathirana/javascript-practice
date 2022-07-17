const userLeft = false
const userWatchingVideo = false

function watchVideo(successCallback, errorCallback) {
    if(userLeft) {
        errorCallback({
            message: " user left"
        })
    }
    else if(userWatchingVideo) {
        errorCallback({
            message: "user watching video"
        })
    }
    else {
        successCallback({
            message: "callbacks complete"
        })
    }
}

const callback1 = (data) => {
    console.log(data.message)
}

const callback2 = (data) => {
    console.log(data.message)
}

watchVideo(callback1, callback2)

// callbacks are sync nature
