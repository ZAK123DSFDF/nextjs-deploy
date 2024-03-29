export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>this is profile shared</div>
      {children}
    </>
  );
}
