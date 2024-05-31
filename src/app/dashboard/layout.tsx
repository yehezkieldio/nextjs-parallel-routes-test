export default function DashboardLayout({
  children,
  user,
  admin,
}: {
  children: React.ReactNode;
  admin: React.ReactNode;
  user: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-row gap-4">
        {children}
        {user}
        {admin}
      </div>
    </>
  );
}
