import Script from "next/script";

export default function EducationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        src="https://www.tiktok.com/embed.js"
        strategy="lazyOnload"
      />
      {children}
    </>
  );
}