export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>헤더</div>
      <div>
        <div>사이드 바</div>
        <main>{children}</main>
      </div>
    </div>
  );
}
