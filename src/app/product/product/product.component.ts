import { Component } from '@angular/core';
import { Product, ProductDto } from 'app/models/product';
import { ProductService } from 'app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: Product[] = [];
  productsDto:  ProductDto[] = [];

  constructor(private productService:ProductService ) { }

  ngOnInit(): void {

  this.productService.getRestaurants().subscribe((data: Product[]) => {
    this.products = data;
    this.productsDto = this.inintProductDto(this.products);
    console.log(this.products);

  });
}


inintProductDto(products: Product[]):ProductDto[] {
  let tempProductDto: ProductDto[] = [];
 
  products.forEach((product) => {

    const restDto: ProductDto = {
      id: product.id,
      name: product.name,
      price: product.price,
      photo: this.getPhoto(product.photo),
      favorite: product.favorite,
      description: product.description,
      stars: product.stars,
      supplier: product.supplier,

    
    };

    tempProductDto.push(restDto);

   });

  return tempProductDto;
}
 
private getPhoto(data: string): any {
  return 'data:image/jpg;base64,' + data;
}


}
