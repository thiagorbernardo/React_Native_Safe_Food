
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
  key: number;
  name: string;
  price: string;
  category: string;
  img: string;
};

export interface DailyMedicine {
  name: string;
  height?: number;
  weight?: number;
  email: string;
  date: string;
  medicines: Food[];
}