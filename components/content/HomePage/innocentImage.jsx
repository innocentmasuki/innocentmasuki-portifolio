import Image from "next/image";

export default function InnocentImage() {
  return (
    <div className="absolute md:relative opacity-5 md:mx-10  md:block md:opacity-70">
      <Image
        src={"/images/innocent.png"}
        alt="Innocent Masuki Background"
        height="500"
        width="500"
      />
    </div>
  );
}
