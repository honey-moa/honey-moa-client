'use client';

import { useAtomValue } from 'jotai';
import { dateMonthAtom } from '../../../../../../store/dateStore';
import * as style from './honeyMoaList.css';
import HoneyMoa from './HoneyMoa';

export default function HoneyMoaList() {
  const month = useAtomValue(dateMonthAtom);

  //날짜별로 불러오는 api

  return (
    <>
      <h2 className={style.monthTitle}>{month}월</h2>
      <div className={style.honeyListGrid}>
        <HoneyMoa />
        <HoneyMoa />
        <HoneyMoa />
        <HoneyMoa />
        <HoneyMoa />
        <HoneyMoa />
        <HoneyMoa />
        <HoneyMoa />
      </div>
    </>
  );
}
