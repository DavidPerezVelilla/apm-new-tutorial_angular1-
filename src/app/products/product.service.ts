import { Injectable } from "@angular/core";
import { IProduct } from "./products";

@Injectable({
    providedIn: 'root',
})

export class ProductService{
    getProducts(): IProduct[]{
       return [{
        "productId": 1,
        "productName": "Rastrillo",
        "productCode": "GDN-0011",
        "releaseDate": "06-04-22",
        "description": "Rastrillo de hojas con mango de madera de 120cm.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "assets/images/leaf_rake.png"
      },
      {
        "productId": 2,
        "productName": "Carretilla",
        "productCode": "GDN-0023",
        "releaseDate": "06-04-22",
        "description": "Carretilla con capacidad para 20 litros",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "assets/images/garden_cart.png"
      },
      {
        "productId": 5,
        "productName": "Martillo",
        "productCode": "TBX-0048",
        "releaseDate": "06-04-22",
        "description": "Martillo de acero de garras curvas",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "assets/images/hammer.png"
      },
      {
        "productId": 8,
        "productName": "Sierra",
        "productCode": "TBX-0022",
        "releaseDate": "06-04-22",
        "description": "Sierra de mano con hoja de acero de 40cm",
        "price": 11.55,
        "starRating": 3.7,
        "imageUrl": "assets/images/saw.png"
      },
      {
        "productId": 10,
        "productName": "Mando para videojuegos",
        "productCode": "GMG-0042",
        "releaseDate": "06-04-22",
        "description": "Mando de videojuegos estándar de dos botones",
        "price": 35.95,
        "starRating": 4.6,
        "imageUrl": "assets/images/xbox-controller.png"
      }] 
    }

}
