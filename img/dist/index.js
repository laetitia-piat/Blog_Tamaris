"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 4000;
const storage = multer_1.default.diskStorage({
    destination: function (_req, _file, cb) {
        cb(null, path_1.default.join(__dirname, "../uploads/"));
    },
    filename: function (_req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});
const upload = (0, multer_1.default)({ storage: storage });
app.get("/", (_req, res) => {
    res.send("Healthcheck Okay");
});
app.post("/img", upload.single("file"), (req, res) => {
    fs_1.default.readFile(req.file.path, (err) => {
        if (err) {
            console.log("error while reading file");
            console.log("Error: ", err);
            res.status(500).json({ error: err });
        }
        else {
            res
                .status(201)
                .json({ status: "success", filename: "/img/" + req.file.filename });
        }
    });
});
app.get("/img/:filename", (req, res) => {
    let file = path_1.default.join(__dirname + "/../uploads", req.params.filename);
    console.log("file", file);
    fs_1.default.readFile(file, (err, content) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text" });
            res.write("File Not Found!");
            res.end();
        }
        else {
            res.writeHead(200, { "Content-Type": "application/octet-stream" });
            res.write(content);
            res.end();
        }
    });
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
//# sourceMappingURL=index.js.map