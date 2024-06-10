// "use client";
// import { useRouter } from "next/navigation";
// 
import { Button } from "@/components/ui/button";
import Sidebar from "@/imported/components/layout/sidebar";
import Link from "next/link";

export default function NotFound() {
  // const router = useRouter();

  return (
    <div className="flex h-screen dark:bg-black dark:text-gray-50">
      <Sidebar />
      <main className="pt-16 container">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mb-16 items-center justify-center text-center">
          <span className="bg-gradient-to-b from-foreground to-transparent bg-clip-text text-[10rem] font-extrabold leading-none text-transparent">
            404
          </span>
          <h2 className="my-2 font-heading text-2xl font-bold">Something&apos;s missing</h2>
          <p>
            Sorry, the page you are looking for doesn&apos;t exist or has been
            moved.
          </p>
          <div className="mt-8 flex justify-center gap-2">
            <Link href={'/'}>Go back</Link>
            <Button
              // onClick={() => router.back()

              // } 
              variant="default" size="lg">
              Go back
            </Button>
            <Link href={'/dashboard'}>
              <Button
                // onClick={() => router.push("/dashboard")}
                variant="ghost"
                size="lg"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>

  );
}
