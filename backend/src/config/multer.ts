import multer from 'multer';
import path from "path";
import fs from 'fs';

const uploadPath = path.join(__dirname, '../../uploads');
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.memoryStorage();

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
  
        if (!allowedTypes.includes(file.mimetype)) {
            return cb(new Error("Tipo de arquivo não suportado") as any, false);
        }
        
        cb(null, true);
    },
});

export default upload;