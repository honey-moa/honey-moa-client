export default function HomeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <div>
      <div>헤더</div>
      <div>
        <div>사이드 바</div>
        <main>{children}</main>
        <div>{modal}</div>
      </div>
    </div>
  );
}
