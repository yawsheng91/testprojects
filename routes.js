var appRouter = function(app) {
 app.get("/test", function(req, res) {
    res.send("We have received your message");
});
}
 
module.exports = appRouter;