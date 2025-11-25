const fs = require('fs')
const http = require('http')

const fileName = 'customerdata.json'

function process_request(req, res){

    if(req.url === "/about"){
                res.writeHead(200,{'Content-Type':'text/html'})
                res.end("about")
    }else{

         fs.readFile(fileName, (err, data) => {
        if(err){
            console.error("Error reading customer file: ",err)
            return
        }

        try {
            
            const customers = JSON.parse(data)
            res.writeHead(200, {'content-Type':'text/html'})
            customers.forEach((customer, index ) => {
            // Display customer name and credit rating (for context)
            res.write(`  ${index + 1}. Name: ${customer.customer}, Rating: ${customer['credit-rating']} <br>`);
        });
            res.end()
            
        } catch (error) {
            console.log(error);
        }
    })

    }

   
}


const server = http.createServer(process_request)

server.listen(3000)
console.log("server is listening at port" + 3000)