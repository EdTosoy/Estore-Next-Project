import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['Int']>;
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type CartList = {
  __typename?: 'CartList';
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  user_id: Scalars['String'];
  url: Scalars['String'];
  price: Scalars['String'];
  username: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  bye: Scalars['String'];
  getCartList?: Maybe<Array<CartList>>;
  hello: Scalars['String'];
  me?: Maybe<User>;
  UserList: Array<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addToCart: Scalars['Boolean'];
  charge: Scalars['Boolean'];
  login: LoginResponse;
  logout: Scalars['Boolean'];
  register: Scalars['Boolean'];
  removeFromCart: Scalars['Boolean'];
};


export type MutationAddToCartArgs = {
  url: Scalars['String'];
  user_id: Scalars['String'];
  price: Scalars['String'];
  name: Scalars['String'];
};


export type MutationChargeArgs = {
  amount: Scalars['Float'];
  id: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationRemoveFromCartArgs = {
  user_id: Scalars['String'];
  id: Scalars['Float'];
};

export type AddToCartMutationVariables = Exact<{
  user_id: Scalars['String'];
  url: Scalars['String'];
  price: Scalars['String'];
  name: Scalars['String'];
}>;


export type AddToCartMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'addToCart'>
);

export type ChargeMutationVariables = Exact<{
  amount: Scalars['Float'];
  id: Scalars['String'];
}>;


export type ChargeMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'charge'>
);

export type GetCartListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCartListQuery = (
  { __typename?: 'Query' }
  & { getCartList?: Maybe<Array<(
    { __typename?: 'CartList' }
    & Pick<CartList, 'id' | 'url' | 'name' | 'price' | 'user_id'>
  )>> }
);

export type RemoveFromCartMutationVariables = Exact<{
  user_id: Scalars['String'];
  id: Scalars['Float'];
}>;


export type RemoveFromCartMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removeFromCart'>
);


export const AddToCartDocument = gql`
    mutation AddToCart($user_id: String!, $url: String!, $price: String!, $name: String!) {
  addToCart(user_id: $user_id, url: $url, price: $price, name: $name)
}
    `;
export type AddToCartMutationFn = Apollo.MutationFunction<AddToCartMutation, AddToCartMutationVariables>;

/**
 * __useAddToCartMutation__
 *
 * To run a mutation, you first call `useAddToCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddToCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addToCartMutation, { data, loading, error }] = useAddToCartMutation({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      url: // value for 'url'
 *      price: // value for 'price'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useAddToCartMutation(baseOptions?: Apollo.MutationHookOptions<AddToCartMutation, AddToCartMutationVariables>) {
        return Apollo.useMutation<AddToCartMutation, AddToCartMutationVariables>(AddToCartDocument, baseOptions);
      }
export type AddToCartMutationHookResult = ReturnType<typeof useAddToCartMutation>;
export type AddToCartMutationResult = Apollo.MutationResult<AddToCartMutation>;
export type AddToCartMutationOptions = Apollo.BaseMutationOptions<AddToCartMutation, AddToCartMutationVariables>;
export const ChargeDocument = gql`
    mutation Charge($amount: Float!, $id: String!) {
  charge(amount: $amount, id: $id)
}
    `;
export type ChargeMutationFn = Apollo.MutationFunction<ChargeMutation, ChargeMutationVariables>;

/**
 * __useChargeMutation__
 *
 * To run a mutation, you first call `useChargeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChargeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [chargeMutation, { data, loading, error }] = useChargeMutation({
 *   variables: {
 *      amount: // value for 'amount'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useChargeMutation(baseOptions?: Apollo.MutationHookOptions<ChargeMutation, ChargeMutationVariables>) {
        return Apollo.useMutation<ChargeMutation, ChargeMutationVariables>(ChargeDocument, baseOptions);
      }
export type ChargeMutationHookResult = ReturnType<typeof useChargeMutation>;
export type ChargeMutationResult = Apollo.MutationResult<ChargeMutation>;
export type ChargeMutationOptions = Apollo.BaseMutationOptions<ChargeMutation, ChargeMutationVariables>;
export const GetCartListDocument = gql`
    query GetCartList {
  getCartList {
    id
    url
    name
    price
    user_id
  }
}
    `;

/**
 * __useGetCartListQuery__
 *
 * To run a query within a React component, call `useGetCartListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCartListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCartListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCartListQuery(baseOptions?: Apollo.QueryHookOptions<GetCartListQuery, GetCartListQueryVariables>) {
        return Apollo.useQuery<GetCartListQuery, GetCartListQueryVariables>(GetCartListDocument, baseOptions);
      }
export function useGetCartListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCartListQuery, GetCartListQueryVariables>) {
          return Apollo.useLazyQuery<GetCartListQuery, GetCartListQueryVariables>(GetCartListDocument, baseOptions);
        }
export type GetCartListQueryHookResult = ReturnType<typeof useGetCartListQuery>;
export type GetCartListLazyQueryHookResult = ReturnType<typeof useGetCartListLazyQuery>;
export type GetCartListQueryResult = Apollo.QueryResult<GetCartListQuery, GetCartListQueryVariables>;
export const RemoveFromCartDocument = gql`
    mutation RemoveFromCart($user_id: String!, $id: Float!) {
  removeFromCart(user_id: $user_id, id: $id)
}
    `;
export type RemoveFromCartMutationFn = Apollo.MutationFunction<RemoveFromCartMutation, RemoveFromCartMutationVariables>;

/**
 * __useRemoveFromCartMutation__
 *
 * To run a mutation, you first call `useRemoveFromCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFromCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFromCartMutation, { data, loading, error }] = useRemoveFromCartMutation({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveFromCartMutation(baseOptions?: Apollo.MutationHookOptions<RemoveFromCartMutation, RemoveFromCartMutationVariables>) {
        return Apollo.useMutation<RemoveFromCartMutation, RemoveFromCartMutationVariables>(RemoveFromCartDocument, baseOptions);
      }
export type RemoveFromCartMutationHookResult = ReturnType<typeof useRemoveFromCartMutation>;
export type RemoveFromCartMutationResult = Apollo.MutationResult<RemoveFromCartMutation>;
export type RemoveFromCartMutationOptions = Apollo.BaseMutationOptions<RemoveFromCartMutation, RemoveFromCartMutationVariables>;