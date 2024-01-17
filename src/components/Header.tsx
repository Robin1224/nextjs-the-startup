"use client";

const Header = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <header className="p-5 bg-purple md:content-end md:w-full flex @container/header lg:grid lg:grid-cols-subgrid lg:gap-3 lg:col-start-1 lg:col-span-12 lg:px-0">
      <div className="flex flex-col items-start md:ml-auto md:mr-auto @md/header:!mr-16 transition-all lg:col-start-2 lg:col-span-10 lg:m-0">
      {children}
      <button className="text-base font-thin text-white mt-header-whiteline underline underline-offset-4 decoration-1">Read less</button>
      </div>
    </header>
  );
};
export default Header;
