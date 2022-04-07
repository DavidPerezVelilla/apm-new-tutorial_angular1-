import { Component, OnInit } from "@angular/core";
import { ProductService } from "./product.service";
import { IProduct } from "./products";

@Component({
selector: "pm-products",
templateUrl: "./product-list.component.html",
styleUrls: ["./product-list.component.css"],

})
export class ProductListComponent implements OnInit{
    
    pageTitle = 'Lista de Productos';
    imageWidth = 50;
    imageMargin = 2;
    mostrarImagen = false;
    
    private _listFilter : string = "";
    
    get listFilter(): string{
      return this._listFilter;
    }
    set listFilter(value:string){
     this._listFilter = value; 
     this.filteredProducts = this.perfomFilter(value);
    }

    filteredProducts: IProduct[] = [];
    products: IProduct[] = [];

    constructor (private productService: ProductService){}

    activarImagen(): void{
      this.mostrarImagen = !this.mostrarImagen
    }

    perfomFilter(filterBy: string):IProduct[]{
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().includes(filterBy)        
      )
    }

    ngOnInit(): void {
      this.products = this.productService.getProducts();
      this.filteredProducts = this.products;
    }

    onRatingClicked (message:string){
      
      this.pageTitle = "Lista de Productos: "+message;
    }
}
