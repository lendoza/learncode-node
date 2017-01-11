import http from "http";
import { homepage, profile, notFound, error } from "./handlers";

const server = http.createServer((request, response) =>{
    const url = request.url;

    if(url === "/"){
        homepage(request, response);
    } else if(url === "/profile"){
        profile(request, response);
    } else{
        notFound(request, response);
    }
});

server.listen(3000);