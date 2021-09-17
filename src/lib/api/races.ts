import { AxiosResponse } from 'axios';
import { StatusCodes } from 'http-status-codes';
import { RACES_API } from '../../constants/api';
import { RacesApiResponse } from '../../models/race';
import httpClient from '../services/apiClient';

const RacesApi = {
  getRacesData: async (): Promise<AxiosResponse<RacesApiResponse>> => {
    const response = await httpClient.get(RACES_API);
    console.log(response);
    if (response.status !== StatusCodes.OK) {
      throw response.status;
    }
    return response;
  },
};

export default RacesApi;
