import { atom } from 'jotai';

export const dateYearAtom = atom(new Date().getFullYear());
export const dateMonthAtom = atom(new Date().getMonth() + 1);
