import Image from 'next/image';
import * as style from './honeyJar.css';
import DatePagination from './_components/DatePagintaion/DatePagination';
import HoneyMoaList from './_components/HoneyMoa/HoneyMoaList';

export default function HoneyJarPage() {
  return (
    <div className={style.container}>
      <div className={style.bannerWrapper}>
        <div className={style.backgroundBanner}>
          <Image src="/images/cat-7755394_1280.jpg" fill alt="banner" />
        </div>
        <div className={style.insertContentsWrapper}>
          <div className={style.coupleProfileImageArea}>
            <div className={style.eachProfileImageWrapper}>
              <Image src="/images/logo.jpg" alt="logo" fill />
            </div>
            <div className={style.eachProfileImageWrapper}>
              <Image src="/images/logo.jpg" alt="logo" fill />
            </div>
          </div>
          <span className={style.coupleNickName}>재진 & 비호</span>
          <p className={style.coupleDescription}>
            대충 커플을 소개하는 글임 어쩌고저쩌고
            쏼라쏼라ㅁㅇㄹㄴㅁㄹㅇㅁㄴㄻㄴㄹ
          </p>
        </div>
      </div>
      <DatePagination />
      <HoneyMoaList />
    </div>
  );
}
