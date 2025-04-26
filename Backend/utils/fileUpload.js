const multer = require('multer');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');

// Configure AWS
aws.config.update({
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    region: process.env.AWS_REGION
});

const s3 = new aws.S3();

// File filter
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'application/pdf' || 
        file.mimetype === 'image/jpeg' || 
        file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type, only PDF, JPEG and PNG is allowed!'), false);
    }
};

const upload = multer({
    fileFilter,
    storage: multerS3({
        s3,
        bucket: process.env.AWS_BUCKET_NAME,
        acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString() + '-' + file.originalname);
        }
    })
});

module.exports = upload;