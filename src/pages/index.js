import Head from "next/head";
import { Inter } from "next/font/google";
import Intro from "@/components/Sections/Intro";
import styled from "styled-components";
import Sections from "@/components/Sections";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Builder </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <Intro />
        <SectionWrapper>
          <LeftSpace></LeftSpace>
          <SectionStack>
            <Sections />
          </SectionStack>
        </SectionWrapper>
      </main>
    </>
  );
}

//styles

const SectionWrapper = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  gap: 2rem;
`;

const LeftSpace = styled.div`
  width: 40%;
  height: 100%;
`;

const SectionStack = styled.div`
  height: 100%;
`;
