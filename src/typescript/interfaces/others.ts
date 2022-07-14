import { FC } from 'react';
import { CommonProps } from './props';

export type CFC<P = unknown> = FC<CommonProps & P>;
