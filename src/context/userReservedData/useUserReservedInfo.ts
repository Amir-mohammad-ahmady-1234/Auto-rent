import { useContext } from 'react';
import { UserReservedInfoContext } from './UserReservedInfoContext';

export const useUserRserveInfo = () => useContext(UserReservedInfoContext);
