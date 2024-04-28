const fs = require('fs')
const parseJsonProducts = JSON.parse(fs.readFileSync('./data/products.json', 'utf-8'))
let productsArray = (template, prod) => {
    let output = template.replace('{{%IMAGE%}}', prod.image)
    output = output.replace('{{%NAME%}}', prod.name)
    output = output.replace('{{%OS%}}', prod.os)
    output = output.replace('{{%YEAR%}}', prod.year_release)
    output = output.replace('{{%PRICE%}}', prod.price)
    output = output.replace('{{%CHIPSET%}}', prod.chipset)
    output = output.replace('{{%RAM%}}', prod.ram)
    output = output.replace('{{%STORAGE%}}', prod.rom)
    output = output.replace('{{%BATTERY%}}', prod.battery)
    output = output.replace('{{%DESCRIPTION%}}', prod.specifications)
    output = output.replace('{{%ID%}}', prod.id)
    return output 
}
module.exports = {productsArray, parseJsonProducts}