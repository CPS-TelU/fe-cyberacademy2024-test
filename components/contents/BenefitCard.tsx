import { poppins } from "@/styles/font";
import FlipCard from "@/components/ui/FlipCard";



export function BenefitCard() {
  const FlipDataBenefit = [
    {
      title: "TAK",
      description: "Time and Attendance",
      image: "/kartuIjo.png",
      rotate: "y" as const,
    },
    {
        title: "E-CERTIFICATE",
        description: "Time and Attendance",
        image: "/kartu.png",
        rotate: "y" as const,
    },
    {
        title: "INSIGHT ON CPS",
        description: "Time and Attendance",
        image: "/kartuIjo2.png",
        rotate: "y" as const,
      },
      {
        title: "TAK",
        description: "Time and Attendance",
        image: "/kartu.png",
        rotate: "x" as const,
      },
      
  ];

  return (
    
    <div className="flex gap-4 p-12 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4">
      {FlipDataBenefit.map((card, index) => (
        <FlipCard
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
          rotate={card.rotate}
          className="mt-8"
        />
      ))}
    </div>
  );
}
