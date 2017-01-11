// ES6 Configuration

export function homepage(request, response){
    response.setHeader("Content-Type", "text/html");
    response.end("<h1>Hello World</h1>");
}

export function profile(request, response){
    var profile = {
        name:"Lenny",
        age: "25",
    };

    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(profile));
}

export function notFound(request, response){
    response.statusCode = 404;
    response.setHeader("Content-Type", "text/html");
    response.end("<h1>404 Not Found</h1>")
}

export function error(request, response){
    response.statusCode = 500;
    response.setHeader("Content-Type", "text/html");
    response.end("<h1>Error with Application</h1>");
}