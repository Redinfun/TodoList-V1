const express = require('express');
const bodyParser = require('body-parser');

const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

let items = ['Estudar', 'Trabalhar', 'Relaxar']
let workItems = []

app.get('/', (req, res) => {
    let today = new Date()
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }

    let day = today.toLocaleDateString('en-US', options)

    res.render('list', {
        kindOfDay: day, newListItem: items
    })
})


app.get('/work', (req, res) => {
    res.render('list', { kindOfDay: "Work List", newListItem: workItems })
})

app.post('/item', (req, res) => {
    let item = req.body.newItem
    if (req.body.list === "Work") {
        workItems.push(item)
        res.redirect('/work')
    } else {
        items.push(item)
        res.redirect('/')
    }

})

app.post('/work', (req, res) => {

    let item = req.body.newItem
    workItems.push(item)
    res.redirect('/work')
})



/*app.get("/", (req, res) => {
    let today = new Date()

      let day = ""
    let currentDay = today.getDay()
    let currentDateToday = "" + today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear()

    switch (currentDay) {
        case 0:
            day = "Sunday"
            break

        case 1:
            day = "Monday"
            break

        case 2:
            day = "Tuesday"
            break

        case 3:
            day = "Wednesday"
            break

        case 4:
            day = "Thursday"
            break

        case 5:
            day = "Friday"
            break

        case 6:
            day = "Saturday"
            break

        default:
            console.log("Error");
    }

    if (today.getDay() === 6 || today.getDay() === 0) {
        res.render('list', { kindOfDay: day, kindOfJob: "take a rest", currentDate: currentDateToday, itsDay: day })
    } else if (today.getDay() === 5) {

        res.render('list', { kindOfDay: day, kindOfJob: "to have some fun", currentDate: currentDateToday, itsDay: day })
    } else { 
        res.write("<h1>Damn I have to work!</h1>")
        res.write("<h2>Daaaaaaaaaaaaaaaamn</h2>")
        res.send() 
        //res.sendFile(__dirname+"/index.html")
        res.render('list', { kindOfDay: day, kindOfJob: "work", currentDate: currentDateToday, itsDay: day })

    } 

})
*/

app.listen(3000, () => {
    console.log("Server connected on port 3000");
})

