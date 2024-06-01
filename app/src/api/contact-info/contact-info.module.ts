import { Module } from '@nestjs/common';
import { ContactInfoService } from './contact-info.service';

@Module({
  providers: [ContactInfoService]
})
export class ContactInfoModule {}
