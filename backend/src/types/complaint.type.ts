export type TCreateComplaint = {
    ticketNo: number;
    complaintStatus: object;
    complaintCategory: object;
    complaintType: object;
    complaintDetails: object;
    photoUri: string;
    isUrgent: boolean;
};