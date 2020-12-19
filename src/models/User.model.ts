
export interface User {
  name: string;
  email: string;
  height?: number;
  weight?: number;
  birthday: string;
  medicines: Medicine[];
}

export interface Medicine {
  id: string;
  key: number;
  name: string;
  specs: string;
  hours: string;
  description: string;
  tookMed?: boolean;
  timestamp?: number;
};

export interface DailyMedicine {
  name: string;
  height?: number;
  weight?: number;
  email: string;
  date: string;
  medicines: Medicine[];
}