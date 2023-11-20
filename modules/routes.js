import db from "../Database/index.js";
function ModuleRoutes(app) {
    app.get("/api/courses/:cid/modules", (req, res) => {
        const { cid } = req.params;
        const modules = db.modules
            .filter((m) => m.course === cid);
        res.send(modules);
    });
    app.post("/api/courses/:cid/modules", (req, res) => {
        const { cid } = req.params;
        const newModule = {
            ...req.body,
            _id: new Date().getTime().toString(),
        };
        console.log(db.modules);
        db.modules.push(newModule);
        console.log(db.modules);
        res.send(newModule);
    });

    app.delete("/api/modules/:mid", (req, res) => {
        const { mid } = req.params;
        db.modules = db.modules.filter((m) => m._id !== mid);
        res.sendStatus(200);
    });

    app.put("/api/modules/:mid", (req, res) => {
        const { mid } = req.params;
        const moduleIndex = db.modules.findIndex(
          (m) => m._id.$oid === mid);
        if (moduleIndex === -1) {
            res.sendStatus(404);
            return;
        }
        db.modules[moduleIndex] = {
          ...db.modules[moduleIndex],
          ...req.body
        };
        res.sendStatus(204);
      });
    
}
export default ModuleRoutes;