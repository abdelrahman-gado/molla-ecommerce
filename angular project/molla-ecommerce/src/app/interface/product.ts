import { Category } from "./category"

export interface Product {
  id: number,
  name: string
  image: string,
   price: number,
  description: string,
  discount: number,
  category_id: number,
  color_id: number,
  category: Category
}
