const http = require("http");
const queryString = require("querystring");
const url = require("url");

// //get() method
function onRequest(req, res) {
    var path = url.parse(req.url).pathname;
    var query = url.parse(req.url).query;
    console.log(query);
    var name = queryString.parse(query)["name"];
    var email = queryString.parse(query)["email"];
    res.write("<h1>hello</h1>name: " + name + " email: " + email);
    console.log(name);
    console.log(email);
    res.end();
}

// //post() method
// onRequest = (req, res) => {
//     var data = "";
//     req.on("data", (chunk) => {
//         data += chunk;
//         console.log(chunk + " chunk data");
//     });
//     req.on("end", () => {
//         var name = queryString.parse(data)["name"];
//         var email = queryString.parse(data)["email"];
//         res.write("<h1>hello</h1><br>name: " + name + "<br> email: " + email);
//         res.end();
//     });
// };

http.createServer(onRequest).listen(3000);