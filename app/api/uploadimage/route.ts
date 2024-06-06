import { extname, join } from "path";
import { stat, mkdir, writeFile } from "fs/promises";
import { auth } from "@/lib/auth";

export async function POST(request: Request) {
    //@ts-ignore
    let { user } = await auth()

    if(!user) return Response.json({ error:true, message: "Vous n'êtes pas autorisé" },{ status: 403 });

    const formData = await request.formData()
    const image = formData.get('image')

    const sanitizeFilename = (filename : string) =>{
        return filename.replace(/[^a-zA-Z0-9_\u0600-\u06FF.]/g, "_");
    }

    let date = new Date()
    let year = date.getFullYear().toString()
    let month = (date.getMonth()+1).toString().padStart(2,'0')
    let day = date.getDate().toString().padStart(2,'0')
  
    //@ts-ignore
    const buffer = Buffer.from(await image.arrayBuffer());
    const pathDist = join(process.cwd(), "/public/images");
    const relativeUploadDir = `${day}-${month}-${year}`;
    const uploadDir = join(pathDist, relativeUploadDir)
  
    try {
        await stat(uploadDir);
    }catch (e: any) {
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
        //@ts-ignore
        const fileExtension = extname(image?.name);
        //@ts-ignore
        const originalFilename = image?.name?.replace(/\.[^/.]+$/, "");
        const sanitizedFilename = sanitizeFilename(originalFilename);
        const filename = `${sanitizedFilename}_${uniqueSuffix}${fileExtension}`;
        console.log('filename : ' + filename);
        await writeFile(`${uploadDir}/${filename}`, buffer);
        return Response.json({ succes:true,  data: {url: 'http://localhost:3000/images/' + `${relativeUploadDir}/${filename}`}},{ status:200 });
    } catch (e) {
      console.error("Error while trying to upload a file\n", e);
      return Response.json({ error:true, message: "File upload error! Please try again!." },{ status: 400 })
    }
  }