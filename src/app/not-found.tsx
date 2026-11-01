import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-3xl font-semibold">That page does not exist.</h1>
        <Link href="/" className="mt-6 inline-block text-accent underline underline-offset-4">Back to the portfolio</Link>
      </div>
    </main>
  );
}
