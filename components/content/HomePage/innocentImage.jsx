import Image from "next/image";

export default function InnocentImage() {
  return (
    <div className="absolute md:relative opacity-0 md:mx-10  md:block md:opacity-70">
      <aside>
        <Image
          src={"/images/innocent_santa.png"}
          alt="Innocent Masuki Background"
          height="500"
          width="500"
        />
      </aside>
    </div>
  );
}
