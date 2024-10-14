import Image from "next/image";


export default function DashboardHero() {
  return (
    <div className="flex items-center justify-center w-full h-[100px] sm:h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px]">
      <Image
        src="/bg-dashboard.jpg"
        alt="Dashboard Banner"
        width={100}
        height={800}
        className="w-[1100px] h-full object-cover object-center rounded-lg"
      />
    </div>
  );
}
