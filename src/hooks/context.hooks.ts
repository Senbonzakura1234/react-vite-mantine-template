import { RootContextState, RootContextDispatch } from '@typescript';
import { useSelector, useDispatch } from 'react-redux';

export const useContextSelector = useSelector<RootContextState>;
export const useContextDispatch = useDispatch<RootContextDispatch>;
