export interface Issue {
    issueId: number;
    issueType: string;
    severity: string;
    cityId: number;
    latitude: number;
    longitude: number;
    linkImg: string;
    issueDescription: string;
    issueStatus: string;
    issueUpvotes: number
  }