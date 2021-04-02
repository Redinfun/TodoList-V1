exports.getDate = getDate
var getDate = () => {

    let today = new Date()

    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }

    let day = today.toLocaleDateString('en-US', options)

    return day

}


exports.getDay = () => {

    let today = new Date()

    let options = {
        day: 'numeric'
    }

    let day = today.toLocaleDateString('en-US', options)

    return day

}