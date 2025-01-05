import Image from "next/image";
import Link from "next/link";

const SOCIAL_URL = "https://x.com/b13ocom";
const HANDLE_NAME = "Blueberry Mojito";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <>
      <div className="bg-stone-50 py-16 space-y-8 min-h-screen">
        {/* header */}
        <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
          <div className="container max-w-6xl mx-auto py-4 flex items-center">
            <Link href="https://b13o.com">
              <Image src="/logo.svg" alt="b13o Logo" width={40} height={40} />
            </Link>
            <span className="text-gray-200 text-4xl mx-2">/</span>
            <Link className="text-xl font-bold text-stone-800" href="/">
              React Shootin’ Gallery <span className="text-3xl">🎯</span>
            </Link>
          </div>
        </header>

        {/* Page Content */}
        {props.children}

        {/* Footer */}
        <footer className="text-center">
          <p className="text-gray-700">
            Supported by{" "}
            <Link className="text-emerald-600" href={SOCIAL_URL}>
              @{HANDLE_NAME}
            </Link>{" "}
            &copy; 2024
          </p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
