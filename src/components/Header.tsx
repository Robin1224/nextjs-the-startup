"use client";

const Header = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <header className="p-5 bg-purple overlow-hidden">
      {children}
      <button className="text-base font-thin text-white mt-header-whiteline underline underline-offset-4 decoration-1">Read less</button>
    </header>
  );
};
export default Header;
