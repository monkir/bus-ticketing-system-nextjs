
import "tw-elements/dist/css/tw-elements.min.css";
import 'flowbite';
import 'flowbite-react'
import 'react-icons'
import "@/styles/globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
