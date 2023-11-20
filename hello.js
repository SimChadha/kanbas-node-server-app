function HelloRoutes(app) {
  const hello = (req, res) => {
    res.send("Life is good!");
  };
  app.get("/hello", hello);

  app.get('/', (req, res) => {
    res.send('Welcome to Full Stack Development!')
  })
}
export default HelloRoutes;
