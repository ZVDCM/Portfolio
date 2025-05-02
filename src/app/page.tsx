import Sections from '@/components/layouts/sections';
import SectionNav from '@/components/section-nav';
import AboutMe from '@/components/sections/about-me';
import Employment from '@/components/sections/employment';

export default function Home() {
    return (
        <div>
            <Sections>
                <AboutMe id="about-me" />
                <Employment id="employment" />
            </Sections>
            <SectionNav />
        </div>
    );
}
