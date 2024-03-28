"use client";

import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import { Session } from "inspector";

// import { SignedOut, useAuth

const RightSadbar = () => {
  // const { userId } = useAuth();
  const { data: session } = useSession();

  const { push } = useRouter();

  const handleSignOut = async () => {
    const data = await signOut({ redirect: false, callbackUrl: "/" });

    push(data.url);
  };

  const pathname = usePathname();

  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen lg:w-[266px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden  ">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;

          // if (item.route === "/profile") {
          //   if (userId) {
          //     item.route = `${item.route}/${userId}`;
          //   } else {
          //     return null;
          //   }
          // }

          return (
            <Link
              href={item.route}
              key={item.label}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"
              }  flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p
                className={`${isActive ? "base-bold" : "base-medium"} max-lg:hidden`}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
      {session ? (
        <>
          <Button
            className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
            onClick={handleSignOut}
          >
            تسجيل الخروج
          </Button>
        </>
      ) : (
        <>
          <div className="flex flex-col gap-3">
            <Link href="/sign-in">
              <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                <Image
                  src="/assets/icons/account.svg"
                  alt="login"
                  width={20}
                  height={20}
                  className="invert-colors lg:hidden"
                />
                <span className="primary-text-gradient max-lg:hidden">
                  تسجيل دخول
                </span>
              </Button>
            </Link>

            <Link href="/sign-up">
              <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
                <Image
                  src="/assets/icons/sign-up.svg"
                  alt="sign up"
                  width={20}
                  height={20}
                  className="invert-colors lg:hidden"
                />
                <span className="max-lg:hidden">إنشاء حساب</span>
              </Button>
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

export default RightSadbar;
