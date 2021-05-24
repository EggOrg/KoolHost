const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                const reqparse = JSON.parse(body);
                if (reqparse.mode == "write") {
                    fs.writeFile(reqparse.name, reqparse.content, err => {
                        if (err) {
                            console.log(err);
                        }
                    });
                }
                else if (reqparse.mode == "read") {
                    fs.readFile(reqparse.name, 'utf8', function (err,data) {
                          if (err) {
                              console.log(err);
                          }
                          res.end(`{"content":"${data}"}`);
                    });
                }
                else {
                    res.end(`{"documentation":""}`);
                }
            }
            catch (e) {
                res.end(`{"err":"caught", "errdesc":"${e}"}`);
            }
        });
    }
    else {
        res.end(`{"err":"405", "errdesc":"Method ${req.method} invalid."}`);
    }
});

server.listen(8080);