import Image from 'next/image';
import * as style from './honeyMoa.css';

export default function HoneyMoa() {
  return (
    <div className={style.container}>
      <div className={style.contentWrapper}>
        <div className={style.contentImageWrapper}>
          <Image src="" fill alt="꿀 게시글" />
        </div>
        <h1>보정된 추억 #1</h1>
        <p>2021.08.30</p>
        <div>
          <p>본문 내용 어쩌고 저쩌고 쏼라쏼라...</p>
        </div>
      </div>
    </div>
  );
}
