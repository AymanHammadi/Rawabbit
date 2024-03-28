import { cn } from "@/lib/utils";
import Image from "next/image";

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className="h1-bold text-primary-main flex">
        <span>
          <Image
            src={"/assets/images/logo.png"}
            alt={"logo"}
            width={50}
            height={50}
          />
        </span>
        روابط{" "}
      </h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
