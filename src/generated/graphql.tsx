import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type UserInfo = {
  __typename?: 'UserInfo';
  id: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  dateOfBirth: Scalars['String']['output'];
  country: Scalars['String']['output'];
  postcode: Scalars['String']['output'];
  occupation: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
};

export type BusinessInfo = {
  __typename?: 'BusinessInfo';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  uen: Scalars['String']['output'];
  country: Scalars['String']['output'];
  postalCode: Scalars['String']['output'];
  address: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
};

export type Balance = {
  __typename?: 'Balance';
  amount: Scalars['Float']['output'];
  currency: Currency;
};

export enum Currency {
  USD = 'USD',
  SGD = 'SGD'
}

export type User = {
  __typename?: 'User';
  id: Scalars['String']['output'];
  username: Scalars['String']['output'];
  email: Scalars['String']['output'];
  emailVerificationSentAt?: Maybe<Scalars['DateTime']['output']>;
  emailVerified: Scalars['Boolean']['output'];
  accountType: AccountType;
  userInfo: UserInfo;
  businessInfo?: Maybe<BusinessInfo>;
  balances: Array<Balance>;
  updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
};

export enum AccountType {
  INDIVIDUAL = 'INDIVIDUAL',
  BUSINESS = 'BUSINESS'
}

export type PayPalDeposit = {
  __typename?: 'PayPalDeposit';
  id: Scalars['String']['output'];
  paypalCheckoutId?: Maybe<Scalars['String']['output']>;
  currency: Currency;
  amount: Scalars['Float']['output'];
  userId: Scalars['String']['output'];
  user: User;
  fees?: Maybe<Scalars['Float']['output']>;
  status: PayPalStatus;
  updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
};

export enum PayPalStatus {
  BEFORE_REQUEST = 'BEFORE_REQUEST',
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED'
}

export type PayPalWithdraw = {
  __typename?: 'PayPalWithdraw';
  id: Scalars['String']['output'];
  paypalPaymentId?: Maybe<Scalars['String']['output']>;
  currency: Currency;
  amount: Scalars['Float']['output'];
  userId: Scalars['String']['output'];
  user: User;
  status: PayPalStatus;
  fees?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
};

export type MerchantPayment = {
  __typename?: 'MerchantPayment';
  id: Scalars['String']['output'];
  orderId: Scalars['String']['output'];
  customerId?: Maybe<Scalars['String']['output']>;
  customer?: Maybe<User>;
  merchantId: Scalars['String']['output'];
  merchant: User;
  amount: Scalars['Float']['output'];
  currency: Currency;
  merchantPaymentStatus: MerchantPaymentStatus;
  updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
};

export enum MerchantPaymentStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  EXPIRED = 'EXPIRED'
}

export type Transaction = {
  __typename?: 'Transaction';
  id: Scalars['String']['output'];
  userId: Scalars['String']['output'];
  currency: Currency;
  amount: Scalars['Float']['output'];
  type: TransactionType;
  internalTransferId?: Maybe<Scalars['String']['output']>;
  paypalDepositId?: Maybe<Scalars['String']['output']>;
  paypalWithdrawalId?: Maybe<Scalars['String']['output']>;
  merchantPaymentId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
};

export enum TransactionType {
  DEPOSIT = 'DEPOSIT',
  WITHDRAWAL = 'WITHDRAWAL',
  INTERNAL_TRANSFER_SENT = 'INTERNAL_TRANSFER_SENT',
  INTERNAL_TRANSFER_RECEIVED = 'INTERNAL_TRANSFER_RECEIVED',
  MERCHANT_PAYMENT_RECEIVED = 'MERCHANT_PAYMENT_RECEIVED',
  MERCHANT_PAYMENT_SENT = 'MERCHANT_PAYMENT_SENT',
  WITHDRAWAL_REFUND = 'WITHDRAWAL_REFUND'
}

export type InternalTransfer = {
  __typename?: 'InternalTransfer';
  id: Scalars['String']['output'];
  senderId: Scalars['String']['output'];
  sender: User;
  amount: Scalars['Float']['output'];
  currency: Currency;
  receiverId: Scalars['String']['output'];
  receiver: User;
  note: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  accessToken: Scalars['String']['output'];
};

export type LoginRequestPayload = {
  __typename?: 'LoginRequestPayload';
  loginToken: Scalars['String']['output'];
};

export type ApiKeyPayload = {
  __typename?: 'ApiKeyPayload';
  label: Scalars['String']['output'];
  merchantId: Scalars['String']['output'];
  type: ApiKeyType;
  prefix: Scalars['String']['output'];
  webhookUrl: Scalars['String']['output'];
};

export enum ApiKeyType {
  CREATE_PAYMENT_QR = 'CREATE_PAYMENT_QR'
}

export type TransactionDetails = {
  __typename?: 'TransactionDetails';
  transactionsIn: Array<Transaction>;
  transactionsOut: Array<Transaction>;
};

export type TransactionSummary = {
  __typename?: 'TransactionSummary';
  amountIn: Scalars['Float']['output'];
  amountOut: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String']['output'];
  getApiKeyList: Array<ApiKeyPayload>;
  me: User;
  transactions: TransactionDetails;
  getTransactionSummary: TransactionSummary;
  merchantGetQRDetails: MerchantPayment;
  getInternalTransfer: InternalTransfer;
};


export type QueryTransactionsArgs = {
  fromDate?: InputMaybe<Scalars['DateTime']['input']>;
  toDate?: InputMaybe<Scalars['DateTime']['input']>;
  sortOrder?: SortOrder;
  currency: Currency;
};


export type QueryGetTransactionSummaryArgs = {
  fromDate?: InputMaybe<Scalars['DateTime']['input']>;
  toDate?: InputMaybe<Scalars['DateTime']['input']>;
  sortOrder?: SortOrder;
  currency: Currency;
};


export type QueryMerchantGetQrDetailsArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetInternalTransferArgs = {
  id: Scalars['String']['input'];
};

export enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type Mutation = {
  __typename?: 'Mutation';
  registerBusiness: AuthPayload;
  registerIndividual: AuthPayload;
  loginRequest: LoginRequestPayload;
  login: AuthPayload;
  generateApiKey: Scalars['String']['output'];
  revokeApiKey: Scalars['Boolean']['output'];
  requestDeposit: PayPalDeposit;
  confirmDeposit: PayPalDeposit;
  requestWithdraw: PayPalWithdraw;
  merchantRequestQR: MerchantPayment;
  merchantPayQR: MerchantPayment;
  makeInternalTransfer: InternalTransfer;
};


export type MutationRegisterBusinessArgs = {
  username: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  dateOfBirth: Scalars['String']['input'];
  country: Scalars['String']['input'];
  postcode: Scalars['String']['input'];
  occupation: Scalars['String']['input'];
  businessName: Scalars['String']['input'];
  uen: Scalars['String']['input'];
  businessCountry: Scalars['String']['input'];
  businessPostcode: Scalars['String']['input'];
  businessAddress: Scalars['String']['input'];
};


export type MutationRegisterIndividualArgs = {
  username: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  dateOfBirth: Scalars['String']['input'];
  country: Scalars['String']['input'];
  postcode: Scalars['String']['input'];
  occupation: Scalars['String']['input'];
};


export type MutationLoginRequestArgs = {
  usernameOrEmail: Scalars['String']['input'];
  password: Scalars['String']['input'];
  accountType: AccountType;
};


export type MutationLoginArgs = {
  loginToken: Scalars['String']['input'];
  otp: Scalars['String']['input'];
};


export type MutationGenerateApiKeyArgs = {
  label: Scalars['String']['input'];
  type: ApiKeyType;
  webhookUrl: Scalars['String']['input'];
};


export type MutationRevokeApiKeyArgs = {
  prefix: Scalars['String']['input'];
};


export type MutationRequestDepositArgs = {
  amount: Scalars['Float']['input'];
  currency: Currency;
};


export type MutationConfirmDepositArgs = {
  paypalCheckoutId: Scalars['String']['input'];
};


export type MutationRequestWithdrawArgs = {
  amount: Scalars['Float']['input'];
  currency: Currency;
  paypalEmail: Scalars['String']['input'];
};


export type MutationMerchantRequestQrArgs = {
  orderId: Scalars['String']['input'];
  amount: Scalars['Float']['input'];
  currency: Currency;
};


export type MutationMerchantPayQrArgs = {
  id: Scalars['String']['input'];
};


export type MutationMakeInternalTransferArgs = {
  amount: Scalars['Float']['input'];
  currency: Currency;
  toUsername: Scalars['String']['input'];
  note: Scalars['String']['input'];
};

export type MerchantGetQrDetailsQueryVariables = Exact<{
  merchantGetQrDetailsId: Scalars['String']['input'];
}>;


export type MerchantGetQrDetailsQuery = { __typename?: 'Query', merchantGetQRDetails: { __typename?: 'MerchantPayment', id: string, orderId: string, customerId?: string | null, merchantId: string, amount: number, currency: Currency, merchantPaymentStatus: MerchantPaymentStatus, updatedAt: any, createdAt: any } };

export type MerchantRequestQrMutationVariables = Exact<{
  orderId: Scalars['String']['input'];
  amount: Scalars['Float']['input'];
  currency: Currency;
}>;


export type MerchantRequestQrMutation = { __typename?: 'Mutation', merchantRequestQR: { __typename?: 'MerchantPayment', id: string, orderId: string, customerId?: string | null, merchantId: string, amount: number, currency: Currency, merchantPaymentStatus: MerchantPaymentStatus, updatedAt: any, createdAt: any } };


export const MerchantGetQrDetailsDocument = gql`
    query merchantGetQRDetails($merchantGetQrDetailsId: String!) {
  merchantGetQRDetails(id: $merchantGetQrDetailsId) {
    id
    orderId
    customerId
    merchantId
    amount
    currency
    merchantPaymentStatus
    updatedAt
    createdAt
  }
}
    `;

/**
 * __useMerchantGetQrDetailsQuery__
 *
 * To run a query within a React component, call `useMerchantGetQrDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMerchantGetQrDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMerchantGetQrDetailsQuery({
 *   variables: {
 *      merchantGetQrDetailsId: // value for 'merchantGetQrDetailsId'
 *   },
 * });
 */
export function useMerchantGetQrDetailsQuery(baseOptions: Apollo.QueryHookOptions<MerchantGetQrDetailsQuery, MerchantGetQrDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MerchantGetQrDetailsQuery, MerchantGetQrDetailsQueryVariables>(MerchantGetQrDetailsDocument, options);
      }
export function useMerchantGetQrDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MerchantGetQrDetailsQuery, MerchantGetQrDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MerchantGetQrDetailsQuery, MerchantGetQrDetailsQueryVariables>(MerchantGetQrDetailsDocument, options);
        }
export type MerchantGetQrDetailsQueryHookResult = ReturnType<typeof useMerchantGetQrDetailsQuery>;
export type MerchantGetQrDetailsLazyQueryHookResult = ReturnType<typeof useMerchantGetQrDetailsLazyQuery>;
export type MerchantGetQrDetailsQueryResult = Apollo.QueryResult<MerchantGetQrDetailsQuery, MerchantGetQrDetailsQueryVariables>;
export const MerchantRequestQrDocument = gql`
    mutation MerchantRequestQR($orderId: String!, $amount: Float!, $currency: Currency!) {
  merchantRequestQR(orderId: $orderId, amount: $amount, currency: $currency) {
    id
    orderId
    customerId
    merchantId
    amount
    currency
    merchantPaymentStatus
    updatedAt
    createdAt
  }
}
    `;
export type MerchantRequestQrMutationFn = Apollo.MutationFunction<MerchantRequestQrMutation, MerchantRequestQrMutationVariables>;

/**
 * __useMerchantRequestQrMutation__
 *
 * To run a mutation, you first call `useMerchantRequestQrMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMerchantRequestQrMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [merchantRequestQrMutation, { data, loading, error }] = useMerchantRequestQrMutation({
 *   variables: {
 *      orderId: // value for 'orderId'
 *      amount: // value for 'amount'
 *      currency: // value for 'currency'
 *   },
 * });
 */
export function useMerchantRequestQrMutation(baseOptions?: Apollo.MutationHookOptions<MerchantRequestQrMutation, MerchantRequestQrMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MerchantRequestQrMutation, MerchantRequestQrMutationVariables>(MerchantRequestQrDocument, options);
      }
export type MerchantRequestQrMutationHookResult = ReturnType<typeof useMerchantRequestQrMutation>;
export type MerchantRequestQrMutationResult = Apollo.MutationResult<MerchantRequestQrMutation>;
export type MerchantRequestQrMutationOptions = Apollo.BaseMutationOptions<MerchantRequestQrMutation, MerchantRequestQrMutationVariables>;