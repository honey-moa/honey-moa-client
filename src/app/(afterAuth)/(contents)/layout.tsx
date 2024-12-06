import getHeadNavigate from '../../_components/HeadNavigate/getHeadNavigate';
import SideNavigate from './_components/SideNavigate/SideNavigate';

export default function HomeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <div>
      {getHeadNavigate({ location: 'afterAuth' })}
      <div style={{ display: 'flex' }}>
        <SideNavigate />
        <main style={{ flex: 1 }}>{children}</main>
        <div>{modal}</div>
      </div>
    </div>
  );
}
