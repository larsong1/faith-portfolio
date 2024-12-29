import fs from 'fs';
import path from 'path';

export async function getStaticProps(imgDirPath: string) {
  const dirPath = path.join(process.cwd(), imgDirPath);
  const filenames = fs.readdirSync(dirPath);

  const modules = await Promise.all(
    filenames
      .filter((file) => file.endsWith('.ts') || file.endsWith('.js'))
      .map(async (file) => {
        const filePath = path.join(dirPath, file);
        const img = await import(filePath);
        return img.default;
      })
  );

  return modules;
}
