import multer from 'multer';
import path from "path";
import fs from 'fs';

const uploadPath = path.join(__dirname, '../../uploads');
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = path.join(__dirname, '../../uploads');
        console.log("Diretório destino:", dir);
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        cb(null, `${uniqueSuffix}-${file.originalname}`);
    },
});



console.log("Caminho base (__dirname):", __dirname);
console.log("Caminho final (uploadPath):", uploadPath);


const uploadMulter = multer({ storage });
export default uploadMulter;