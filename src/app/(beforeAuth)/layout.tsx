import getHeadNavigate from '../_components/HeadNavigate/getHeadNavigate';

interface BeforeAuthLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function BeforeAuthLayout({
  children,
  modal,
}: Readonly<BeforeAuthLayoutProps>) {
  return (
    <div>
      {getHeadNavigate({ location: 'beforeAuth' })}
      <>{children}</>
      <>{modal}</>
    </div>
  );
}
