import Sections from '@/components/layouts/sections';
import SectionNav from '@/components/section-nav';
import AboutMe from '@/components/sections/about-me';

export default function Home() {
    return (
        <div>
            <Sections>
                <section id="about-me">
                    <AboutMe />
                </section>
                <div id="employment" className="flex h-screen w-full items-center justify-center">
                    <h1 className="text-4xl font-bold">Employment</h1>
                </div>
            </Sections>
            <SectionNav />
        </div>
    );
}
