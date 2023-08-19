import Link from 'next/link';

export default function RedirectInduction({ to }: { to: string }) {
  return (
    <>
      <p className="mb-4">The page you requested does not exist.</p>
      <Link href={to} className="text-blue-600">
        Go to the main page
      </Link>
    </>
  );
}
