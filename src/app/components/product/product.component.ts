import { Component, Input } from '@angular/core';
import { IProduct } from "../../models/category.interface";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input({ required: true }) product!: IProduct;
}
