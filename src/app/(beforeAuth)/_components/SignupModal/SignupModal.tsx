'use client';

import { useRouter } from 'next/navigation';
import * as style from './signupModal.css';
import Button from '@/components/Button/Button';
import Image from 'next/image';
import { ChangeEventHandler, useState } from 'react';
import SigninIcon from '@public/svgs/signinicon.svg';

export default function SignupModal() {
  const [userAccess, setUserAccess] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    name: '',
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
            <h1 className={style.modalTitle}>회원가입</h1>
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
            <div className={style.inputContainer}>
              <label className={style.inputLabel}>비밀번호 확인</label>
              <input
                onChange={onChangeEventHandler}
                className={style.textInput}
                type="password"
                value={userAccess.password}
                name="passwordCheck"
              ></input>
            </div>
            <div className={style.inputContainer}>
              <label className={style.inputLabel}>이름</label>
              <input
                onChange={onChangeEventHandler}
                className={style.textInput}
                type="text"
                value={userAccess.password}
                name="name"
              ></input>
            </div>
            <div className={style.subFunctionContainer}>
              <div>
                <input type="checkbox" />
                <label>이용약관과 개인정보방침에 동의합니다.</label>
              </div>
            </div>
            <div className={style.submitButtonContainer}>
              <Button
                icon={<SigninIcon className={style.signinIcon} />}
                iconPosition="left"
                text="회원가입"
                colorType="#F43F5E"
              ></Button>
            </div>
            <div className={style.modalBottomContainer}>
              <p className={style.noId}>이미 계정이 있으신가요?</p>
              <a
                className={style.LinkColorRed}
                onClick={() => onClickReplaceRoute('/auth/signin')}
              >
                로그인
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
