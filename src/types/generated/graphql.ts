import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String'];
  userInfo: UserInfo;
};

export type ChangeResponseInput = {
  response: EventResponseInput;
};

export type ChangeResponseResult = {
  __typename?: 'ChangeResponseResult';
  event: Event;
  eventResponse: EventResponse;
};

export type CreateEventInput = {
  info: EventInput;
  userInfos: Array<UserInfoInput>;
};

export type EditEventInput = {
  eventId: Scalars['ID'];
  info: EventInput;
  userInfos: Array<UserInfoInput>;
};

export type Event = {
  __typename?: 'Event';
  eventId: Scalars['ID'];
  eventInfo: EventInfo;
  paticipantUsers: Array<UserInfo>;
  requestedUsers: Array<UserInfo>;
};

export type EventInfo = {
  __typename?: 'EventInfo';
  bring: Scalars['String'];
  created: Scalars['DateTime'];
  describes: Scalars['String'];
  endDate: Scalars['DateTime'];
  location: Scalars['String'];
  organizerId: Scalars['ID'];
  organizerName: Scalars['String'];
  purpose: Scalars['String'];
  startDate: Scalars['DateTime'];
};

export type EventInput = {
  bring: Scalars['String'];
  created: Scalars['DateTime'];
  describes: Scalars['String'];
  endDate: Scalars['DateTime'];
  location: Scalars['String'];
  organizerId: Scalars['ID'];
  organizerName: Scalars['String'];
  purpose: Scalars['String'];
  startDate: Scalars['DateTime'];
};

export type EventResponse = {
  __typename?: 'EventResponse';
  eventId: Scalars['String'];
  isAttend: Scalars['Boolean'];
  isResponse: Scalars['Boolean'];
  message: Scalars['String'];
  userId: Scalars['String'];
};

export type EventResponseInput = {
  eventId: Scalars['String'];
  isAttend: Scalars['Boolean'];
  isResponse: Scalars['Boolean'];
  message: Scalars['String'];
  userId: Scalars['String'];
};

export type LoginInput = {
  password: Scalars['String'];
  userId: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changeResponse: ChangeResponseResult;
  createEvent: Event;
  editEvent: Event;
  newRegistUser: UserInfo;
};


export type MutationChangeResponseArgs = {
  input: ChangeResponseInput;
};


export type MutationCreateEventArgs = {
  input: CreateEventInput;
};


export type MutationEditEventArgs = {
  input: EditEventInput;
};


export type MutationNewRegistUserArgs = {
  input: RegistUserInput;
};

export type Query = {
  __typename?: 'Query';
  TestQ: Test;
  allUserInfos: Array<UserInfo>;
  login: AuthPayload;
  user: User;
  userAbsentEvents: Array<UserEvent>;
  userAttendEvents: Array<UserEvent>;
  userNotResponseEvents: Array<UserEvent>;
  userResponsedEvents: Array<UserEvent>;
  userTodayEvents: Array<UserEvent>;
};


export type QueryTestQArgs = {
  input: UserInfoInput;
};


export type QueryLoginArgs = {
  input: LoginInput;
};


export type QueryUserArgs = {
  input: UserInfoInput;
};


export type QueryUserAbsentEventsArgs = {
  input: UserInfoInput;
};


export type QueryUserAttendEventsArgs = {
  input: UserInfoInput;
};


export type QueryUserNotResponseEventsArgs = {
  input: UserInfoInput;
};


export type QueryUserResponsedEventsArgs = {
  input: UserInfoInput;
};


export type QueryUserTodayEventsArgs = {
  input: UserInfoInput;
};

export type RegistUserInput = {
  password: Scalars['String'];
  userName: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  changeEvent: Event;
  newEvent: Event;
  sendResposne: EventResponse;
};


export type SubscriptionNewEventArgs = {
  input: UserInfoInput;
};

export type Test = {
  __typename?: 'Test';
  data: Scalars['String'];
  test: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  absentEvents: Array<Event>;
  attendEvents: Array<Event>;
  createdEvents: Array<Event>;
  eventResponses: Array<EventResponse>;
  info: UserInfo;
  notResponseEvents: Array<Event>;
  responsedEvents: Array<Event>;
  todayEvents: Array<Event>;
};

export type UserEvent = {
  __typename?: 'UserEvent';
  event: Event;
  response: EventResponse;
};

export type UserInfo = {
  __typename?: 'UserInfo';
  userId: Scalars['ID'];
  userName: Scalars['String'];
};

export type UserInfoInput = {
  userId: Scalars['ID'];
  userName: Scalars['String'];
};

export type LoginQueryVariables = Exact<{
  input: LoginInput;
}>;


export type LoginQuery = { __typename?: 'Query', login: { __typename?: 'AuthPayload', userInfo: { __typename?: 'UserInfo', userId: string, userName: string } } };


export const LoginDocument = gql`
    query Login($input: LoginInput!) {
  login(input: $input) {
    userInfo {
      userId
      userName
    }
  }
}
    `;

/**
 * __useLoginQuery__
 *
 * To run a query within a React component, call `useLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginQuery(baseOptions: Apollo.QueryHookOptions<LoginQuery, LoginQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
      }
export function useLoginLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoginQuery, LoginQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
        }
export type LoginQueryHookResult = ReturnType<typeof useLoginQuery>;
export type LoginLazyQueryHookResult = ReturnType<typeof useLoginLazyQuery>;
export type LoginQueryResult = Apollo.QueryResult<LoginQuery, LoginQueryVariables>;