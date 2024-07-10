interface ICardDataRequest {
    number: string;
    expiration: string;
    securityCode: string;
    zip: string;
}

export default interface ITransactionRequest {
    accountId: number;
    courseId: number;
    currency: string;
    paymentMethod: string;
    card: ICardDataRequest;
}
