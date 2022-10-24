import Image from "next/image";

export default function InnocentImage() {
  return (
    <div className=" hidden md:block opacity-70">
      <Image
        src={"/images/innocent.png"}
        alt="Innocent Masuki Background"
        height="500"
        width="500"
      />
    </div>
  );
}
