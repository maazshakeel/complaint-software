export type TCreateComplaint = {
  ticketNo: number;
  complaintStatus: {
    isResolved: boolean;
    isClosed: boolean;
  };
  complaintCategory: {
    name: string;
  };
  complaintType: {
    type: string;
  };
  complaintDetails: {
    complaintDetail: string;
    complaintSelectedOptions: string;
    isUrgent: boolean;
  };
  clientId: string
};
