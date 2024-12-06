'use client';

import Link from 'next/link';
import * as style from './afterAuthHeader.css';
import Button from '../../../components/Button/Button';
import UnlockIcon from '@public/svgs/unLockIcon.svg';
import SettingIcon from '@public/svgs/settingIcon.svg';
import { useEffect } from 'react';

export function AfterAuthHeader() {
  const user = {
    id: 1,
    name: '이재진',
    image: '@public/images/logo.jpg',
    coupleState: false,
  };

  useEffect(() => {
    //커플 정보 불러오는 api
  }, []);

  return (
    <div className={style.container}>
      <div className={style.contents}>
        <Link href="/profile/setting">
          <h1 className={style.coupleTitle}>우리의 꿀통 이름을 정해주세요✏️</h1>
        </Link>
        {user.coupleState && <h1>커플 이름 담김</h1>}
        <div className={style.rightWrapper}>
          <div>
            <Link href="/other/honeyJar" className={style.unLockSvg}>
              <Button
                text="비공개 글 보기"
                colorType="#FFE4E6"
                icon={<UnlockIcon />}
                iconPosition="left"
              />
            </Link>
          </div>
          <div>
            <Link href="/setting">
              <SettingIcon className={style.settingSvg} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
