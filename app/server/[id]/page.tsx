export default function Server({ params, searchParams }: any) {
  return (
    <>
      <div>clientId:{params.id}</div>
      <div>clientSearchId:{searchParams.new}</div>
    </>
  );
}
