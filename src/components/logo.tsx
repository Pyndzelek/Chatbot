import Image from "next/image";
import logo from "@/../public/logo.png";

export default function Logo({ width = 150, height = 40 }) {
  return <Image src={logo} alt="IAESTE Logo" width={width} height={height} />;
}
