const fs = require('fs')
const htmlPageHome = fs.readFileSync('./templates/pages/home.html', 'utf-8')
const htmlPageAbout = fs.readFileSync('./templates/pages/about.html', 'utf-8')
const htmlPageProducts = fs.readFileSync('./templates/pages/products.html', 'utf-8')
const htmlPageProductsDetails = fs.readFileSync('./templates/pages/products-details.html', 'utf-8')
const htmlPage404 = fs.readFileSync('./templates/pages/404.html', 'utf-8')

let pagesArray = [
    htmlPageHome,
    htmlPageAbout,
    htmlPageProducts,
    htmlPageProductsDetails,
    htmlPage404
]
module.exports = {pagesArray}