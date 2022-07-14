import { RootContextDispatch, RootContextState } from '@typescript/types/others';
import { useDispatch, useSelector } from 'react-redux';

export const useContextSelector = useSelector<RootContextState>;
export const useContextDispatch = useDispatch<RootContextDispatch>;
