const jsonServer = require('json-server');
const auth = require('json-server-auth');
 
const app = jsonServer.create();
const router = jsonServer.router('db.json');

const rules = auth.rewriter({
    users: 600,
    styles: 640,
    bookings: 640
});

 
// /!\ Bind the router db to the app
app.db = router.db
 

app.use(rules);
app.use(auth);
app.use(router);
app.listen(3000, ()=> console.log(`Watching port 3000`));