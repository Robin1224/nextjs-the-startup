import Image from "next/image"

interface Props {}
const Footer = (props: Props) => {
  return (
    <footer className="h-screen w-screen bg-black-900 grid place-content-center">
      <Image
        src="/footer_icon.svg"
        alt="Dept and FDND collaboration logo"
        className="h-[50px] h-[197px]"
        height={50}
        width={197}
      />
    </footer>
  )
}
export default Footer