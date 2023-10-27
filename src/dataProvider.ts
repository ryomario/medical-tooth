import jsonServerProvider from "ra-data-json-server";
import { ResourceCallbacks, withLifecycleCallbacks } from "react-admin";
import { createCanvas, loadImage, Image } from "canvas";

export const dataProvider = withLifecycleCallbacks(jsonServerProvider(
    import.meta.env.VITE_JSON_SERVER_URL
  ), [
    {
      /**
       * For posts update only, convert uploaded images to base 64 and attach them to
       * the `picture` sent property, with `src` and `title` attributes.
       */
      resource: 'users',
      async beforeUpdate(params, dProvider) {
          return await handleUploadImageUser(params); 
      },
      async beforeCreate(params, dataProvider) {
        return await handleUploadImageUser(params); 
      },
    }
  ]);

const handleUploadImageUser = async (params: any) => {
  // Freshly dropped pictures are File objects and must be converted to base64 strings
  if (params.data.avatar?.rawFile instanceof File){
    const filePicture = params.data.avatar;

    const base64Pictures = await convertFileToBase64(filePicture);

    params.data.avatar = base64Pictures;
  }

  return params;
}
/**
 * Convert a `File` object returned by the upload input into a base 64 string.
 * That's not the most optimized way to store images in production, but it's
 * enough to illustrate the idea of data provider decoration.
 */
const convertFileToBase64 = (file: any) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          loadImage(reader.result!.toString()).then(img => {
            const canvas = createCanvas(100, 100);
  
            const MAX_WIDTH = 100;
            const MAX_HEIGHT = 100;
            let width = img.width;
            let height = img.height;
  
            if (width > height) {
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
            } else {
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }
            }
            canvas.width = width;
            canvas.height = height;
  
            const ctx = canvas.getContext("2d");
            ctx?.drawImage(img, 0, 0, width, height);
  
            const dataUrl = canvas.toDataURL("image/png");
  
            resolve(dataUrl);

          })
          // const img = new Image();
          // img.src = reader.result!.toString();

        };
        reader.onerror = reject;
        reader.readAsDataURL(file.rawFile);
    });
