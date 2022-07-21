export type TCreateComplaint = {
    ticketNo: number;
    complaintStatus: {
        whenRaised: string;
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
        complaintSelectedOptions;
        isUrgent: boolean;
    };
};