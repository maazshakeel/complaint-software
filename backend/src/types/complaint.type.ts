export type TCreateComplaint = {
  ticketNo: string;
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
};
