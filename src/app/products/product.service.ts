import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { IProduct } from "./products";
import { catchError, tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root',
})

export class ProductService{

  private productUrl = "api/products/products.json"

  constructor(private http: HttpClient){


  }
    getProducts(): Observable<IProduct[]>{
       return this.http.get<IProduct[]>(this.productUrl).pipe(
         tap(data => console.log('Todos', JSON.stringify(data))),
         catchError(this.handleError)
       ) 
    }

    private handleError(err: HttpErrorResponse){
      let errorMessage = '';
      if (err.error instanceof ErrorEvent){
        errorMessage = `Ha ocurrido un error: ${err.error.message}`;
      }else{
        errorMessage = `El servidor devuelve el codigo: ${err.status}, el mensaje de error es: ${err.message}`
      }

      console.error(errorMessage);
      return throwError(errorMessage);
    }

}
