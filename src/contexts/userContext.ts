import { createContext } from 'react';

import { UserContextType } from '../types/userTypes.js';

export const UserContext = createContext({} as UserContextType);
