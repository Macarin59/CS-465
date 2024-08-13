var fs = require('fs');
var menu = JSON.parse(fs.readFileSync('./data/menu.json', 'utf8'));

/* GET meals view */
const meals = (req, res) => {
    res.render('meals', {title: 'Travlr Getaways', isMeals: true, menu})
}

module.exports = {
    meals
}