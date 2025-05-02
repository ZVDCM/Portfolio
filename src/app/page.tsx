import Sections from '@/components/layouts/sections';
import SectionNav from '@/components/section-nav';
import AboutMe from '@/components/sections/about-me';
import Employment from '@/components/sections/employment';
import Skills from '@/components/sections/skills';

export default function Home() {
    return (
        <div>
            <Sections>
                <AboutMe id="about-me" />
                <Skills id="skills" />
                <Employment id="employment" />
            </Sections>
            <SectionNav />
        </div>
    );
}
