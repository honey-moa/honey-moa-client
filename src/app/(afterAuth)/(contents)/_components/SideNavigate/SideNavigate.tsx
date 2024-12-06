'use client';

import * as style from './sideNavigate.css';
import LikeIcon from '@public/svgs/likeIcon.svg';
import ComposeIcon from '@public/svgs/composeIcon.svg';
import ChatIcon from '@public/svgs/chatIcon.svg';
import Link from 'next/link';
import { assignInlineVars } from '@vanilla-extract/dynamic';

export default function SideNavigate() {
  return (
    <aside className={style.container}>
      <nav>
        <ul className={style.listContainer}>
          <li className={style.linkButtonContainer}>
            <Link
              href="/"
              className={style.hoveringSvg}
              style={assignInlineVars({
                [style.svgColorVar]: 'rgb(255, 0, 0)',
                [style.svgColorHoverVar]: 'rgba(255, 132, 132, 0.2)',
              })}
            >
              <LikeIcon />
            </Link>
          </li>
          <li className={style.linkButtonContainer}>
            <Link
              href="/"
              className={style.hoveringSvg}
              style={assignInlineVars({
                [style.svgColorVar]: 'rgb(255, 132, 0)',
                [style.svgColorHoverVar]: 'rgba(255, 132, 0, 0.2)',
              })}
            >
              <ComposeIcon />
            </Link>
          </li>
          <li className={style.linkButtonContainer}>
            <Link
              href="/"
              className={style.hoveringSvg}
              style={assignInlineVars({
                [style.svgColorVar]: 'rgb(0, 132, 255)',
                [style.svgColorHoverVar]: 'rgba(0, 132, 255, 0.2)',
              })}
            >
              <ChatIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
