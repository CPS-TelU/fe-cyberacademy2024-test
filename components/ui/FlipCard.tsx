import { cn } from "@/lib/utils";

interface FlipCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  description: string;
  subtitle?: string;
  rotate?: "x" | "y";
}

export default function FlipCard({
  image,
  title,
  description,
  rotate = "y",
  className,
  ...props
}: FlipCardProps) {
  const rotationClass = {
    x: ["group-hover:[transform:rotateX(180deg)]", "[transform:rotateX(180deg)]"],
    y: ["group-hover:[transform:rotateY(180deg)]", "[transform:rotateY(180deg)]"],
  };
  const self = rotationClass[rotate];

  return (
    <div className={cn("group h-72 w-56 [perspective:1000px]", className)} {...props}>
      <div
        className={cn(
          "relative h-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]",
          self[0]
        )}
      >
        {/* Front */}
        <div className="absolute h-full w-full [backface-visibility:hidden]">
          <img
            src={image}
            alt="image"
            className="h-full w-full rounded-2xl object-cover shadow-2xl shadow-black/40"
          />
        </div>

        {/* Back */}
        <div
          className={cn(
            "absolute h-full w-full rounded-2xl bg-white p-4 text-black border-2 border-gray-300 shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]",
            self[1]
          )}
        >
          {/* Title in the center */}
          <div className="flex min-h-full flex-col justify-center items-center gap-2">
            <h1 className="text-xl font-bold gradient-text">{title}</h1>
          </div>

          {/* Title in the top-left and bottom-right like a poker card */}
          <div className="absolute top-4 left-4 text-sm font-bold">
            <h1>{title}</h1>
          </div>
          <div className="absolute bottom-4 right-4 text-sm font-bold rotate-180">
            <h1>{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
