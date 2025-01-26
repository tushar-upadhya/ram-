import logo from "@/app/favicon.ico";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://facebook.com",
    icon: (
      <svg
        className="w-4 h-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 8 19"
      >
        <path d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" />
      </svg>
    ),
    name: "Facebook",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#0F0D0E] text-[#F9F4DA]">
      <div className="mx-auto w-full max-w-screen-xl container">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <Image src={logo} priority height={70} alt="logo" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    href="https://flowbite.com/"
                    className="hover:underline"
                  >
                    Flowbite
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {socialLinks.map((social) => (
                  <li key={social.name} className="mb-4">
                    <Link href={social.href} className="hover:underline">
                      {social.icon}
                      <span className="sr-only">{social.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link href="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
