import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function BrandLogo({
  href = "/",
  className,
  imageClassName,
  priority = false,
  size = "default",
}: {
  href?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  size?: "default" | "footer";
}) {
  const sizeClasses =
    size === "footer"
      ? {
          wrapper: "gap-3 px-2 py-1.5",
          icon: "h-[46px] w-[41px] sm:h-[50px] sm:w-[44px]",
          wordmark: "h-[30px] w-[94px] sm:h-[34px] sm:w-[106px]",
        }
      : {
          wrapper: "gap-3 px-2 py-1",
          icon: "h-[42px] w-[37px] sm:h-[46px] sm:w-[41px]",
          wordmark: "h-[28px] w-[88px] sm:h-[32px] sm:w-[100px]",
        };

  return (
    <Link
      href={href}
      aria-label="Home"
      className={cn("group inline-flex items-center", className)}
    >
      <div
        className={cn(
          "relative inline-flex shrink-0 items-center",
          sizeClasses.wrapper,
        )}
      >
        <div className="absolute inset-0 rounded-full bg-white/8 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute inset-x-5 inset-y-2 rounded-full bg-blue-500/15 blur-2xl transition-opacity duration-300 group-hover:bg-blue-400/20" />

        <div className={cn("relative shrink-0", sizeClasses.icon)}>
          <Image
            src="/brand-icon.png"
            alt="Parall Forensics Logo"
            fill
            priority={priority}
            className={cn(
              "object-contain drop-shadow-[0_4px_18px_rgba(15,23,42,0.4)]",
              imageClassName,
            )}
          />
        </div>

        <div className={cn("relative shrink-0", sizeClasses.wordmark)}>
          <Image
            src="/brand-wordmark-white.png"
            alt=""
            fill
            priority={priority}
            className={cn(
              "object-contain drop-shadow-[0_4px_18px_rgba(15,23,42,0.35)]",
              imageClassName,
            )}
          />
        </div>
      </div>
    </Link>
  );
}
