import Sections from '@/components/layouts/sections';
import SectionNav from '@/components/section-nav';

export default function Home() {
    return (
        <div>
            <Sections>
                <div id="about-me" className="flex h-screen w-full items-center justify-center">
                    <h1 className="text-4xl font-bold">About me</h1>
                </div>
                <div id="employment" className="flex h-screen w-full items-center justify-center">
                    <h1 className="text-4xl font-bold">Employment</h1>
                </div>
                <div id="skills" className="flex h-screen w-full items-center justify-center">
                    <h1 className="text-4xl font-bold">Skills</h1>
                </div>
                <div id="projects" className="flex h-screen w-full items-center justify-center">
                    <h1 className="text-4xl font-bold">Projects</h1>
                </div>
                <div
                    id="certifications"
                    className="flex h-screen w-full items-center justify-center"
                >
                    <h1 className="text-4xl font-bold">Certifications</h1>
                </div>
            </Sections>
            <SectionNav />
        </div>
    );
}
