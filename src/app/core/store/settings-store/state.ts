import { Host } from '../../models';

export interface State {
  hosts: Host[];
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  hosts: [],
  isLoading: false,
  error: null
};
