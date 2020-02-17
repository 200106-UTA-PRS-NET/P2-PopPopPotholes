export interface Issue {
    id: number;
    time: Date;
    type: string;
    severity: string;
    cityId: number;
    latitude: number;
    longitude: number;
    imglink: string;
    description: string;
    status: string;
    upvotes: number
  }