'use client';

import { useRouter } from 'next/navigation';
import * as style from './signinModal.css';
import Button from '@/components/Button/Button';
import Image from 'next/image';
import { ChangeEventHandler, useState } from 'react';
import Link from 'next/link';
import LoginIcon from '@public/svgs/loginicon.svg';

export default function SigninModal() {
  const [userAccess, setUserAccess] = useState({
    email: '',
    password: '',
  });
  const router = useRouter();

  const onClickRouteBack = () => {
    router.back();
  };

  const onClickReplaceRoute = (url: string) => {
    router.replace(url);
  };

  const onChangeEventHandler: ChangeEventHandler<HTMLInputElement> = e => {
    const { name, value } = e.target;
    setUserAccess(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div className={style.backGround}>
      <div className={style.container}>
        <div className={style.ModalWrapper}>
          <div className={style.ModalHeaderContainer}>
            <div className={style.siteIcon}>
              <Image src="/images/logo.jpg" alt="site icon" fill />
            </div>
            <h1 className={style.modalTitle}>로그인</h1>
            <div className={style.closeButton}>
              <Button
                onClick={onClickRouteBack}
                text="X"
                colorType="#FFFFFF"
              ></Button>
            </div>
          </div>
          <form>
            <div className={style.inputContainer}>
              <label className={style.inputLabel}>이메일</label>
              <input
                onChange={onChangeEventHandler}
                className={style.textInput}
                type="email"
                value={userAccess.email}
                name="email"
              ></input>
            </div>
            <div className={style.inputContainer}>
              <label className={style.inputLabel}>비밀번호</label>
              <input
                onChange={onChangeEventHandler}
                className={style.textInput}
                type="password"
                value={userAccess.password}
                name="password"
              ></input>
            </div>
            <div className={style.subFunctionContainer}>
              <div>
                <input type="checkbox" />
                <label>로그인 상태 유지</label>
              </div>
              <div>
                <Link className={style.LinkColorRed} href={'/searchPassword'}>
                  비밀번호 찾기
                </Link>
              </div>
            </div>
            <div className={style.submitButtonContainer}>
              <Button
                icon={<LoginIcon className={style.LoginIcon} />}
                iconPosition="left"
                text="로그인"
                colorType="#F43F5E"
              ></Button>
            </div>
            <div className={style.modalBottomContainer}>
              <p className={style.noId}>계정이 없으신가요?</p>
              <a
                className={style.LinkColorRed}
                onClick={() => onClickReplaceRoute('/auth/signup')}
              >
                회원가입
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
