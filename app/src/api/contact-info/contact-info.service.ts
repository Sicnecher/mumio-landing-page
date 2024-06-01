import { Injectable } from '@nestjs/common';
import { CONTACT } from 'src/data/schemas/contact.schema';

@Injectable()
export class ContactInfoService {
    async newInfo(info:any){
        try{
            const response = await CONTACT.create(info)
        }catch(error){
            throw new Error(error)
        }
    }
}
