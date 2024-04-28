// BUILT-IN EXPORTS
const fs = require('fs')
const http = require('http')
const url = require('url')
// LOCAL EXPORTS
const partials = require('./templates/partials/js/partials.js')
const pages = require('./templates/pages/js/pages.js')
const products = require('./templates/pages/js/products.js')
// FILE BASE ROUTING
let host = 'localhost'
let port = 5000
const htmlTemplate = fs.readFileSync('./templates/index.html', 'utf-8')
// STEP 1 CREATE SERVER
const server = http.createServer((req, res) => {
    // MANUAL ROUTING
    let {query, pathname: reqUrl} = url.parse(req.url, true)
    
    let mainContentHtml = ''
    if (reqUrl === '/' || reqUrl === '/home') {
        mainContentHtml = pages.pagesArray[0];
        res.statusCode = 200
        res.setHeader('Content-type', 'text/html')
        
    } else if (reqUrl === '/about') {
        mainContentHtml = pages.pagesArray[1];
        res.statusCode = 200
        res.setHeader('Content-type', 'text/html')
    
    } else if (reqUrl === '/about-us')  {
        res.statusCode = 300
        res.setHeader('Content-type', 'text/html')
        res.setHeader('Location', '/about')

    } else if (reqUrl === '/products')  {
        if (!query.id) {
            let mapProducts = products.parseJsonProducts.map(prod => {
                return products.productsArray(pages.pagesArray[2], prod)
            })
            mainContentHtml = mapProducts;
            res.statusCode = 200
            res.setHeader('Content-type', 'text/html')
        } else {
            let prod = products.parseJsonProducts[query.id - 1]
            let mapProductsDetails = products.productsArray(pages.pagesArray[3], prod)
            mainContentHtml = mapProductsDetails;
            res.statusCode = 200
            res.setHeader('Content-type', 'text/html')
        }
        
    } else  {
        query.id = null
        console.log(query.id)
        mainContentHtml = pages.pagesArray[3];
        res.statusCode = 404
        res.setHeader('Content-type', 'text/html')
    } 

    res.end(partials.partialsArray(htmlTemplate, mainContentHtml));
})

//STEP 2 START THE SERVER
server.listen(port, host, () => {
    console.log(`server has started.... at ${host}:${port}`)
})
