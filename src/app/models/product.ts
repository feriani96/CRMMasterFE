export interface Product {
}
/* import { Food } from "./Food"; */

// copying same variable names of Restaurant dto in spring boot BE
export class Product {
    id:string;
    name:string;
    price:number;
    favorite:boolean;
    photo:any;
    description:string;
    stars:number;
    supplier:string;

       
    constructor() {
      this.id='';
      this.name= '';
      this.price= 0;
      this.favorite= false;
      this.photo= '';
      this.description= '';
      this.stars= 0;
      this.supplier= '';
     
    }


  
  }
  
  
  
  export interface ProductDto {
    id:string;
    name:string;
    price:number;
    favorite:boolean;
    photo:any;
    description:string;
    stars:number;
    supplier:string;

  }