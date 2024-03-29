import Image from "next/image";
import { Inter } from "next/font/google";
import ShopCart from "@/components/ShopCart";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <>
    <ShopCart/>
   </>
    
  );
}
