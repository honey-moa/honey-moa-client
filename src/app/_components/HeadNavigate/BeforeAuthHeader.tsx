import * as style from './beforeAuthHeader.css';
import Link from 'next/link';
import Button from '../../../components/Button/Button';
import SigninIcon from '@public/svgs/loginicon.svg';
import SignupIcon from '@public/svgs/signinicon.svg';

export function BeforeAuthHeader() {
  return (
    <div className={style.container}>
      <div className={style.contents}>
        <div>꿀모아</div>
        <div className={style.authWrapper}>
          <div className={style.buttonWrapper}>
            <Link href="/auth/signin">
              <Button
                text="로그인"
                colorType="#FFFFFF"
                icon={<SigninIcon />}
                iconPosition="left"
              />
            </Link>
          </div>
          <div className={style.buttonWrapper}>
            <Link href="/auth/signup">
              <Button
                text="회원가입"
                colorType="#F43F5E"
                icon={<SignupIcon className={style.signinIcon} />}
                iconPosition="left"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
