export interface ICreateComplaint {
    ticketNo: number
    complaintStatus: object
    complaintCategory: object
    complaintType: object
    complaintDetails: object
    photoUri: string
    isUrgent: boolean
}