import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './products';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Pagina Detalle'
  product: IProduct | undefined;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += ` ${id}`;
    this.product ={
      "productId": 1,
      "productName": "Rastrillo",
      "productCode": "GDN-0011",
      "releaseDate": "06-04-22",
      "description": "Rastrillo de hojas con mango de madera de 120cm.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    }
  }

  volver(): void {
    this.router.navigate(['/products']);
  }

}
