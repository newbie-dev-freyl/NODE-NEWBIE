const fs = require('fs')
const htmlHeader = fs.readFileSync('./templates/partials/header.html', 'utf-8')
const htmlNavTop = fs.readFileSync('./templates/partials/nav-top.html', 'utf-8')
const htmlFooter = fs.readFileSync('./templates/partials/footer.html', 'utf-8')

let partialsArray = (template, content) => {
    let output = template.replace('{{%HEADER%}}', htmlHeader);
    output = output.replace('{{%NAVTOP%}}', htmlNavTop);
    output = output.replace('{{%CONTENT%}}', content);
    output = output.replace('{{%FOOTER%}}', htmlFooter);
    return output
}
module.exports = {partialsArray}