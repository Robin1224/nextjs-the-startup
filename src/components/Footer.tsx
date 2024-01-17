import Image from "next/image"

interface Props {}
const Footer = (props: Props) => {
  return (
    <footer className="h-screen w-screen bg-black-900 grid place-content-center md:col-start-1 md:col-span-2 md:row-start-3 md:row-span-1">
      <Image
        src="/footer_icon.svg"
        alt="Dept and FDND collaboration logo"
        className="h-[50px] w-[197px]"
        height={50}
        width={197}
      />
    </footer>
  )
}
export default Footer