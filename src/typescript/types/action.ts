import { PayloadAction } from '@reduxjs/toolkit';
import { ThemeNameEnum } from '@typescript/enums/others';

export type ThemeAction = PayloadAction<ThemeNameEnum>;
