import { Body, Controller, Get } from '@nestjs/common';
import { ContactInfoService } from './contact-info.service';

@Controller('contact-info')
export class ContactInfoController {
    constructor(private contactInfoService:ContactInfoService) { }
    @Get()
    async contactRequest(@Body() info:any){
        try{
            const response = await this.contactInfoService.newInfo(info)
            return response
        }catch(error){
            throw new Error(error)
        }
    }
}
