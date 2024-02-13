import NavBar from "@/components/NavBar";
import bg from "../../public/images/bacground.webp";
import HeroLeft from "@/components/HeroLeft";
import HeroForm from "@/components/HeroForm";
import ServicesHero from "@/components/ServicesHero";
import ChooseUs from "@/components/ChooseUs";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { client } from "../../lib/contentful/client";
import PostCard from "@/components/PostCard";
import FAQs from "@/components/FAQs";
import AreasHero from "@/components/AreasHero";
import Footer from "@/components/Footer";
import imagesrow from "../../public/images/imagesrow.png";
import Head from "next/head";

export default function Home({ posts }: any) {
  return (
    <>
      <Head>
        <title>Spark Electrics | 24/7 London Electricians</title>
        <meta
          name="description"
          content="Professional electrician services in London, offering expert electrical repairs, installations, and maintenance. Trusted local electricians ready to solve your electrical needs efficiently and safely."
        />
      </Head>
      <main>
        <NavBar />
        <div className="relative w-full overflow-hidden pb-20">
          <div
            style={{
              backgroundImage: `url(${bg.src})`,
            }}
            className="hidden md:block absolute inset-0 -mt-20 bg-cover brightness-50"
          ></div>
          <div
            style={{
              backgroundImage: `url(${bg.src})`,
            }}
            className="block md:hidden absolute inset-0 -mt-20 bg-cover brightness-50"
          ></div>

          <div className="md:px-20 lg:px-30 flex flex-col px-14 md:flex-row w-full h-max mt-8 md:mt-20">
            <div className="w-full md:w-2/3 items-center justify-center flex relative">
              <HeroLeft />
            </div>
            <div className="w-full md:w-1/3">
              <HeroForm />
            </div>
          </div>
        </div>
        <ServicesHero />
        <div className="w-full flex items-center py-10 md:py-16 bg-[#3152F4] justify-center">
          <h1 className="text-white text-center text-xl md:text-4xl font-semibold">
            Professional and experienced team
          </h1>
        </div>
        <ChooseUs />
        <div className="px-6 md:px-20 flex w-full py-14 bg-gray-200 overflow-hidden flex-col">
          <h1 className="text-2xl md:text-4xl pb-4 md:pb-8 text-center font-light text-gray-800">
            Check out our <span className="font-bold">Blog Page</span> for
            updates
          </h1>
          <div className="flex flex-wrap md:flex-row w-full items-center justify-center gap-4 md:gap-2 flex-col">
            {posts.slice(0, 3).map((post: any, index: number) => (
              <PostCard post={post} key={index} />
            ))}
          </div>
          <div className="flex flex-row justify-between pt-4">
            <div></div>
            <Link href="/blog">
              <button className="text-sm text-gray-700 flex flex-row items-center gap-1 transition-all hover:opacity-70">
                See More <FaArrowRight className="text-xs text-gray-700" />
              </button>
            </Link>
          </div>
        </div>
        <FAQs />
        <AreasHero />
        <div className="flex-row justify-center hidden md:flex items-center border-b w-full">
          <img
            src={imagesrow.src}
            alt="Retail Jobs London"
            className="w-auto cursor-pointer h-44"
          />
        </div>
        <Footer />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: "post" });

  return {
    props: {
      posts: response.items,
      revalidate: 60,
    },
  };
};
