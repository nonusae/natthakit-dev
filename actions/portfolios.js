import axios from 'axios';
import { useState } from 'react';
import { useApiHandler } from "actions/index";

export const createPortfolio = (data) => {
  return axios.post('/api/v1/portfolios', data);
}

export const useCreatePortfolio = () => useApiHandler(createPortfolio)
