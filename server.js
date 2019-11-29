const jsonServer = require('json-server');
const auth = require('json-server-auth');
var cors = require("cors");
 

const app = jsonServer.create();
app.use(cors());
const router = jsonServer.router('db.json');


const rules = auth.rewriter({
    "designs": 644,
    "styles": 644,
    "bookings": 644
});



// /!\ Bind the router db to the app
app.db = router.db
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
 

app.use(rules);
app.use(auth);
app.use(router);
app.listen(3000, ()=> console.log(`Watching port 3000`));