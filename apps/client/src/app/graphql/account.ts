import { gql } from '@apollo/client';

export const GET_ACCOUNTS = gql`
  query GetAccounts {
    getAccounts {
      id
      username
      email
      firstName
      lastName
      gender
      age
      createdAt
      updatedAt
    }
  }
`;

export const GET_ACCOUNT = gql`
  query GetAccount($id: Int!) {
    getAccount(id: $id) {
      id
      username
      email
      firstName
      lastName
      gender
      age
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_ACCOUNT = gql`
  mutation CreateAccount($input: CreateAccountInput!) {
    createAccount(input: $input) {
      id
      username
      email
      firstName
      lastName
      gender
      age
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_ACCOUNT = gql`
  mutation UpdateAccount($id: Int!, $input: UpdateAccountInput!) {
    updateAccount(id: $id, input: $input) {
      id
      username
      email
      firstName
      lastName
      gender
      age
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_ACCOUNT = gql`
  mutation DeleteAccount($id: Int!) {
    deleteAccount(id: $id) {
      id
      username
      email
      firstName
      lastName
      gender
      age
      createdAt
      updatedAt
    }
  }
`;
