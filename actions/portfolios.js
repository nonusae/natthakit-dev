import axios from 'axios';
import { useState } from 'react';
import { useApiHandler } from "actions/index";
import useSWR from 'swr';
import { fetcher } from 'actions'

export const createPortfolio = (data) => {
  return axios.post('/api/v1/portfolios', data);
}

export const updatePortfolio = (id, data) => {
  return axios.patch(`/api/v1/portfolios/${id}`, data);
}

export const deletePortfolio = (id, data) => {
  return axios.delete(`/api/v1/portfolios/${id}`);
}

export const useCreatePortfolio = () => useApiHandler(createPortfolio)
export const useUpdatePortfolio = () => useApiHandler(updatePortfolio)
export const useDeletePortfolio = () => useApiHandler(deletePortfolio)


export const useGetPortfolio = (id) => {
  const { data, error, ...rest } = useSWR(id ? `/api/v1/portfolios/${id}` : null, fetcher)
  return { data, error, loading: !data && !error, ...rest }
}
