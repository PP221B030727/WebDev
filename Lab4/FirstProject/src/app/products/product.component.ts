import { Component, Input } from '@angular/core'
import { Product } from '../models/product'
@Component({
    selector: 'app-products',
    templateUrl: './product.component.html'

})
export class ProductComponent{
    @Input() products!:Product[]
}