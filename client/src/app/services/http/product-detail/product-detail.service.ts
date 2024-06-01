import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductExplanationModel } from '../../../models/product';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  constructor(private http:HttpClient) { }

  getProductDetails(productId:string): Observable<ProductExplanationModel>{
    return this.http.post<ProductExplanationModel>( `${environment.apiBaseUrl}/product/detail`, productId );
  }
}
