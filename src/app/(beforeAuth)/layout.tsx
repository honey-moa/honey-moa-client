import * as style from './beforeAuth.css';

export default function BeforeAuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={style.authContainer}>
      <div className={style.authLeft}>꿀모아</div>
      <div className={style.authRight}>{children}</div>
    </div>
  );
}
