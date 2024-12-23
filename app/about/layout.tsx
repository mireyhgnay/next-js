export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <p>&copy; Next JS is great!</p>
    </div>
  );
}
