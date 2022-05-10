import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
    return (
        <main className="bg-slate-200 scroll-smooth">
            <header className="flex p-2 bg-white px-40 sticky top-0 z-10">
                <div className="relative h-14 w-14 hidden md:block">
                    <Image
                        src="/gather_icon.webp"
                        alt="Gather Church Logo"
                        layout="fill"
                        objectFit="scale-down"
                    />
                </div>
                <nav className="flex flex-grow space-x-10 items-center justify-center py-3">
                    <a
                        className="hover:text-yellow-600 transition-all ease-in-out duration-500"
                        href="#worship"
                    >
                        Worship
                    </a>
                    <a
                        className="hover:text-yellow-600 transition-all ease-in-out duration-500"
                        href="#what-to-expect"
                    >
                        What to Expect
                    </a>
                    <a
                        className="hover:text-yellow-600 transition-all ease-in-out duration-500"
                        href="#about-us"
                    >
                        About Us
                    </a>
                    <a
                        className="hover:text-yellow-600 transition-all ease-in-out duration-500"
                        href="#where"
                    >
                        Where
                    </a>
                    <a
                        className="hover:text-yellow-600 transition-all ease-in-out duration-500"
                        href="#youth"
                    >
                        Youth
                    </a>
                </nav>
                <div className="relative h-14 w-14 hidden md:block"></div>
            </header>
            <section className="w-full relative h-full min-h-[45rem]">
                <Image
                    src="/gather_hero.webp"
                    alt="hero image"
                    layout="fill"
                    objectFit="cover"
                    className="filter brightness-75"
                />
                <div className="absolute inset-0 bg-gray-700 bg-opacity-70">
                    <Image
                        src="/gather_hero_text.webp"
                        alt="Gather Church"
                        layout="fill"
                        objectFit="scale-down"
                        className="transform scale-75"
                    />
                </div>
            </section>
            <div className="px-20">
                <section
                    id="worship"
                    className="flex gap-10 mt-10 min-h-[30em] scroll-my-36"
                >
                    <div className="basis-2/5 flex flex-col items-center gap-8 text-gray-700 font-serif justify-center bg-gray-200 p-5 rounded-md shadow-md">
                        <div className="text-3xl">WORSHIP</div>
                        <div className="text-xl w-3/4 text-center">
                            Come ready to encounter the Lord through His people.
                            Be prepared to not just sing, but to be used by the
                            Holy Spirit, to share, to pray for people and to
                            study God&apos;s Word - the Bible.
                        </div>
                    </div>
                    <div className="relative basis-3/5">
                        <Image
                            src="/gather_worship.webp"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </section>
                <section
                    id="what-to-expect"
                    className="flex gap-10 mt-10 scroll-m-36"
                >
                    <div className="basis-1/2 relative">
                        <Image
                            src="/gather_potluck.webp"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="basis-1/2 flex flex-col items-center gap-8 text-gray-700 font-serif justify-center bg-gray-200 p-5 rounded-md shadow-md">
                        <div className="text-3xl">WHAT TO EXPECT</div>
                        <div className="text-xl text-center w-2/3">
                            We&apos;re a casual bunch, so dress comfortable. Be
                            ready to talk to others - there’s lots of
                            opportunity to interact with those around you. We
                            sing a lot, share a lot, laugh and cry a lot,
                            celebrate a lot, study the Bible a lot. We’re a
                            family and we want you to experience that. We have a
                            great kids ministry for infants through 5th graders,
                            and amazing Youth Ministry Sunday nights. On top of
                            all that, we love food and we love eating it
                            together so the first and third Sundays of the month
                            we have a Potluck. Mmm!
                        </div>
                    </div>
                </section>
                <section
                    id="about-us"
                    className="relative mt-10 w-full min-h-[40em] scroll-m-36"
                >
                    <Image
                        src="/gather_sermon.webp"
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        className="filter brightness-50 blur-sm"
                    />

                    <div className="absolute inset-0 flex flex-col justify-center items-center  text-gray-200 font-serif text-center">
                        <div className="text-6xl">About Us</div>
                        <div className="mt-3 text-3xl w-3/4">
                            We are a new church in the Redding area, which
                            started in December of 2016. Our Lead Pastor, Chad
                            Putnam, was on staff at another amazing local church
                            for 16 years as the High School Pastor before God
                            called him to lead a team to start Gather. We place
                            great emphasis on relationships, belonging and the
                            reality that we are a family. We believe that the
                            “average” believer in Jesus is much more than
                            average and is called to encourage and build up the
                            church through their gifts and abilities as well as
                            pastor their circles of influence. Our Mission is
                            simple: Gather as family, Grow as Disciples, Go to
                            our circles.
                        </div>
                    </div>
                </section>
                <section id="where" className="flex gap-10 mt-10 scroll-m-36">
                    <div className="basis-2/5 flex flex-col items-center gap-8 text-gray-700 font-serif justify-center bg-gray-200 p-5 rounded-md shadow-md">
                        <div className="text-3xl">WHERE</div>
                        <div className="text-2xl w-3/4 text-center leading-10">
                            We meet at 20276 Skypark Drive, in Redding, CA.
                            We&apos;re right next to Burrito Bandito off Airport
                            Road.
                        </div>
                    </div>
                    <div className="relative basis-3/5 min-h-[25em]">
                        <Image
                            src="/gather_sermon_2.webp"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </section>
                <section
                    id="youth"
                    className="w-full relative mt-10 min-h-[40rem] scroll-m-36"
                >
                    <Image
                        src="/gather_mountains.webp"
                        alt=""
                        layout="fill"
                        objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-gray-100 opacity-50" />
                    <div className="absolute inset-0 flex justify-center align-middle flex-col items-center text-gray-800 font-light">
                        <div className="text-6xl tracking-[0.45em]">
                            GATHER YOUTH
                        </div>
                        <div>JR HIGH &amp; HIGH SCHOOL MINISTRY</div>
                        <div className="mt-4 text-3xl">
                            Sunday nights - doors open at 5:45 PM.
                        </div>
                        <div className="mt-4 text-3xl">
                            Food. Community. Worship. JESUS
                        </div>
                    </div>
                </section>
            </div>
            <footer>footer</footer>
        </main>
    );
};

export default Home;
