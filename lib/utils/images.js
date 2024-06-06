// import { v2 as cloudinary } from 'cloudinary';
import { extname, join } from "path";
import { stat, mkdir, writeFile } from "fs/promises";

const sanitizeFilename = (filename) => filename.replace(/[^a-zA-Z0-9_\u0600-\u06FF.]/g, "_");

export async function uploadImagetoServer(file){
  // if(process.env.NODE_ENV === "production"){
  //   let mime = file.type
  //   let encoding = 'base64'
  //   let arrayBuffer = await file.arrayBuffer();
  //   let base64Data = Buffer.from(arrayBuffer).toString('base64');
  //   let uri = 'data:' + mime + ';' + encoding + ',' + base64Data

  //   let uploadResult = await new Promise((resolve, reject) => {
  //     cloudinary.uploader.upload(uri)
  //       .then((result) => {
  //         console.log("File uploaded")
  //         return resolve(result);
  //       })
  //       .catch((error) => {
  //         console.log("Error in uploading");
  //         return reject(error) ;
  //       })
  //   });
  // }  
  // else{
      let date = new Date()
      let year = date.getFullYear().toString()
      let month = (date.getMonth()+1).toString().padStart(2,'0')
      let day = date.getDate().toString().padStart(2,'0')
  
      const buffer = Buffer.from(await file.arrayBuffer());
      const pathDist = join(process.cwd(), "/public/images");
      const relativeUploadDir = `${day}-${month}-${year}`;
      const uploadDir = join(pathDist, relativeUploadDir)
  
      try {
          await stat(uploadDir);
      }catch (e) {
        if (e.code === "ENOENT") {
          await mkdir(uploadDir, { recursive: true });
        } else {
          console.error(
            "File upload error! Please try again!\n",
          );
          return { error: "An error occured" };
        }
      }
  
      try {
        const uniqueSuffix = `${Date.now()}_${Math.round(Math.random() * 1e9)}`;
        const fileExtension = extname(file.name);
        const originalFilename = file.name.replace(/\.[^/.]+$/, "");
        const sanitizedFilename = sanitizeFilename(originalFilename);
        const filename = `${sanitizedFilename}_${uniqueSuffix}${fileExtension}`;
        console.log('filename : ' + filename);
        await writeFile(`${uploadDir}/${filename}`, buffer);
        return { url: '/images/' + `${relativeUploadDir}/${filename}` };
        
      } catch (e) {
        console.error("Error while trying to upload a file\n", e);
        return { error: "File upload error! Please try again!." };
      }
  // } 
}

export function checkIfFileIsAnImage(file){
  const imagesExtensions = ["jpg","png","avif","webp","jpeg","svg","gif"]
  if(file?.name){
    const fileType = file.name.split(".").pop()
    if(imagesExtensions.includes(fileType)) return true;
  }
  return false;
}