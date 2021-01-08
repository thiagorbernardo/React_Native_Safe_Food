
export interface User {
  name: string;
  email: string;
  height?: number;
  weight?: number;
  birthday: string;
  medicines: Food[];
}

export interface Food {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  thumb: string;
  img: string[];
};

export interface FoodCardItem {
  content:  Food;
  quantity: number;
}
export interface Category {
  id:    string;
  name:  string;
  alias: string;
}