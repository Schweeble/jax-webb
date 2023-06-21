import fs from 'fs';
import path from 'path';

export const GET = (request: Request) => {
  const dirRelativeToPublicFolder = 'images/products';

  const dir = path.resolve('./public', dirRelativeToPublicFolder);

  const filenames = fs.readdirSync(dir);

  const images = filenames.map((name) =>
    path.join('/', dirRelativeToPublicFolder, name)
  );

  return new Response(JSON.stringify(images));
};
