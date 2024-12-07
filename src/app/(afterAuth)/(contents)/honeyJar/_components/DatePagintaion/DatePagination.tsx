'use client';

import * as style from './datePagination.css';
import LeftIcon from '@public/svgs/leftLocation.svg';
import RightIcon from '@public/svgs/rightLocation.svg';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useAtom } from 'jotai';
import { dateYearAtom, dateMonthAtom } from '@store/dateStore';

export default function DatePagination() {
  //나중에 jotai로 변경
  const [year, setYear] = useAtom(dateYearAtom);
  const [month, setMonth] = useAtom(dateMonthAtom);

  const getMonth = () => {
    const month = Array.from({ length: 12 }, (_, i) => i + 1);
    return month;
  };

  const handleMonthChange = (month: number) => {
    setMonth(month);
  };

  const handleYearChange = (year: number, type: 'next' | 'prev') => {
    if (type === 'next') {
      setYear(year + 1);
    } else {
      setYear(year - 1);
    }
  };

  return (
    <main className={style.container}>
      <div className={style.selectOptionsWrapper}>
        <select className={style.choicePublicNPrivate}>
          <option>공개된 글</option>
          <option>비공개된 글</option>
        </select>
        <div className={style.changeYearWrapper}>
          <button onClick={() => handleYearChange(year, 'prev')} className={style.changeYearIcon}>
            <LeftIcon />
          </button>
          <h2>{year}년도 꿀통</h2>
          <button onClick={() => handleYearChange(year, 'next')} className={style.changeYearIcon}>
            <RightIcon />
          </button>
        </div>
      </div>
      <ul className={style.monthListWrapper}>
        {getMonth().map(ele => {
          return (
            <li key={`${ele}monthIndex`}>
              <button
                onClick={() => handleMonthChange(ele)}
                className={style.eachMonth}
                style={assignInlineVars({
                  [style.nowDateBgVar]: ele === month ? '#F43F5E' : 'inherit',
                  [style.nowDateColorVar]:
                    ele === month ? '#FFFFFF' : 'inherit',
                  [style.nowDateBgHoverVar]:
                    ele === month ? '#F43F5E' : 'rgba(132, 132, 132, 0.1)',
                })}
              >
                {ele}월
              </button>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
