import { api } from '../../api/api';


export const fetchUser = () => api('whoami').get()
  .then((resp) => resp.data)