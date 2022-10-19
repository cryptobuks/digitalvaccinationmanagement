const express = require( "express" );
const app = express();

app.get(
    "/", (request,response) => {
        response.send( "hello Nkulu" );
    }
)

app.listen(
    3001, () => {
        console.log("running on port 3001");
    }
)