import AWS from 'aws-sdk';
import {Base64} from "aws-sdk/clients/ecr";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/../.env" });

//configuring the AWS environment
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'eu-west-3'
});

const s3Bucket= new AWS.S3({ params: {Bucket: process.env.AWS_BUCKET_NAME} });

export const imageUpload = (img:Base64,uniqueId:string) => {
    const buf = Buffer.from(img.replace(/^data:image\/\w+;base64,/, ""), 'base64')
    const data = {
        Key: uniqueId,
        Body: buf,
        ContentEncoding: 'base64',
        ContentType: 'image/jpeg',
        Bucket: process.env.AWS_BUCKET_NAME || 'on-life-bucket'
    };
    s3Bucket.putObject(data, (err, data) => {
        if (err) {
            console.log(err);
            console.log('Error uploading data: ', data);
        } else {
            console.log('successfully uploaded the image!');
        }
    });
    return `https://on-life-bucket.s3.eu-west-3.amazonaws.com/${uniqueId}`;
}
