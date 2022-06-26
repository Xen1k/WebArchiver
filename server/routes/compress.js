const { Router } = require("express");
const fs = require('fs');
const fsExtra = require('fs-extra')
const path = require('path');

const router = Router();

const multer = require('multer')
const upload = multer();

const zlib = require('zlib')



router.post("/compress", upload.single("file"), async (req, res) => {

    const destination = `compressed/${req.file.originalname}.zip`;
    let fileBuffer = req.file.buffer;

    await zlib.gzip(fileBuffer, (err, response) => {
        if (err)
            console.log(err);

        fs.writeFile(path.join(__dirname, destination), response, (err, data) => {
            if (err)
                console.log(err);
            res.download(path.join(__dirname, destination));
        });
    });


    fsExtra.emptyDirSync("routes/compressed")
})

module.exports = router;