import Button from '@/components/Button/Button';
import * as style from './root.css';
import Image from 'next/image';
import Link from 'next/link';
import ArrowIcon from '@public/svgs/arrowRight.svg';

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.contents}>
        <div className={style.left}>
          <h2 className={style.slogan}>
            연인과의 특별한
            <br /> 순간을 기록하세요
          </h2>
          <p className={style.subSlogan}>
            소중한 추억을 기록하고 공유하는 공간.
            <br /> 여러분의 이야기가 시작되는 곳 입니다.
          </p>
          <div className={style.buttonContainer}>
            <Link href="/honey">
              <Button
                text="시작하기"
                colorType="#F43F5E"
                icon={<ArrowIcon className={style.ArrowIcon} />}
                iconPosition="right"
              />
            </Link>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.imageRelative}>
            <Image src="/images/cat-7755394_1280.jpg" alt="예시이미지" fill />
          </div>
        </div>
      </div>
    </div>
  );
}
