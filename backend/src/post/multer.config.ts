import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';

export const multerConfig = {
  storage: diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
      const fileExtName = path.extname(file.originalname);
      const randomName = uuidv4();
      cb(null, `${randomName}${fileExtName}`);
    },
  }),
  limits: {
    fileSize: 5 * 1024 * 1024, // Limite de taille de fichier de 5MB
  },
};

@Module({
  imports: [
    MulterModule.register({
      storage: multerConfig.storage,
      limits: multerConfig.limits,
    }),
  ],
  exports: [MulterModule],
})
export class MulterConfigModule {}
