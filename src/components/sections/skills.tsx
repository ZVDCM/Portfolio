'use client';

import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';
import {
    FaAngular,
    FaAws,
    FaBitbucket,
    FaBootstrap,
    FaCloudflare,
    FaCss3Alt,
    FaDigitalOcean,
    FaDocker,
    FaFigma,
    FaFly,
    FaGit,
    FaGithub,
    FaHtml5,
    FaJenkins,
    FaLaravel,
    FaNodeJs,
    FaPhp,
    FaReact,
    FaVuejs,
    FaWordpress,
} from 'react-icons/fa6';
import { RiFirebaseFill, RiNextjsFill, RiSupabaseFill } from 'react-icons/ri';
import {
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiAdobexd,
    SiAlgolia,
    SiChai,
    SiChakraui,
    SiCheerio,
    SiCommitlint,
    SiCypress,
    SiD3Dotjs,
    SiDotnet,
    SiDrizzle,
    SiElectron,
    SiEslint,
    SiExpo,
    SiGithubactions,
    SiGoogleanalytics,
    SiGooglecloud,
    SiGoogletagmanager,
    SiGraphql,
    SiHeroku,
    SiInertia,
    SiJavascript,
    SiJest,
    SiKubernetes,
    SiMongodb,
    SiMongoose,
    SiMui,
    SiMysql,
    SiNestjs,
    SiNetlify,
    SiNgrok,
    SiNgrx,
    SiNuxtdotjs,
    SiNx,
    SiP5Dotjs,
    SiPostgresql,
    SiPostman,
    SiPrettier,
    SiPrimefaces,
    SiPrisma,
    SiPuppeteer,
    SiRabbitmq,
    SiRedis,
    SiRedux,
    SiRender,
    SiSendgrid,
    SiShadcnui,
    SiStorybook,
    SiStrapi,
    SiStripe,
    SiStylelint,
    SiSwagger,
    SiTailwindcss,
    SiThreedotjs,
    SiTurborepo,
    SiTypescript,
    SiVercel,
    SiXendit,
    SiZod,
} from 'react-icons/si';

import { Button } from '@/components/ui/button';

interface ISkill {
    href: string;
    icon: IconType;
}

const SKILLS = [
    { href: 'https://developer.mozilla.org/docs/Web/HTML', icon: FaHtml5 },
    { href: 'https://developer.mozilla.org/docs/Web/CSS', icon: FaCss3Alt },
    { href: 'https://tailwindcss.com', icon: SiTailwindcss },
    { href: 'https://getbootstrap.com', icon: FaBootstrap },
    { href: 'https://ui.shadcn.com', icon: SiShadcnui },
    { href: 'https://chakra-ui.com', icon: SiChakraui },
    { href: 'https://mui.com', icon: SiMui },
    { href: 'https://www.primefaces.org', icon: SiPrimefaces },
    { href: 'https://d3js.org', icon: SiD3Dotjs },
    { href: 'https://p5js.org', icon: SiP5Dotjs },
    { href: 'https://threejs.org', icon: SiThreedotjs },
    { href: 'https://developer.mozilla.org/docs/Web/JavaScript', icon: SiJavascript },
    { href: 'https://www.typescriptlang.org', icon: SiTypescript },
    { href: 'https://react.dev', icon: FaReact },
    { href: 'https://nextjs.org', icon: RiNextjsFill },
    { href: 'https://redux-toolkit.js.org', icon: SiRedux },
    { href: 'https://vuejs.org', icon: FaVuejs },
    { href: 'https://nuxt.com', icon: SiNuxtdotjs },
    { href: 'https://angular.dev', icon: FaAngular },
    { href: 'https://nestjs.com', icon: SiNestjs },
    { href: 'https://ngrx.io', icon: SiNgrx },
    { href: 'https://inertiajs.com', icon: SiInertia },
    { href: 'https://expo.dev', icon: SiExpo },
    { href: 'https://www.electronjs.org', icon: SiElectron },
    { href: 'https://wordpress.com', icon: FaWordpress },
    { href: 'https://storybook.js.org', icon: SiStorybook },
    { href: 'https://www.figma.com', icon: FaFigma },
    { href: 'https://www.adobe.com/products/illustrator', icon: SiAdobeillustrator },
    { href: 'https://www.adobe.com/products/photoshop', icon: SiAdobephotoshop },
    { href: 'https://adobexdplatform.com', icon: SiAdobexd },
    { href: 'https://nodejs.org/en', icon: FaNodeJs },
    { href: 'https://graphql.org', icon: SiGraphql },
    { href: 'https://strapi.io', icon: SiStrapi },
    { href: 'https://supabase.com', icon: RiSupabaseFill },
    { href: 'https://firebase.google.com', icon: RiFirebaseFill },
    { href: 'https://turborepo.com', icon: SiTurborepo },
    { href: 'https://nx.dev', icon: SiNx },
    { href: 'https://prettier.io', icon: SiPrettier },
    { href: 'https://eslint.org', icon: SiEslint },
    { href: 'https://stylelint.io', icon: SiStylelint },
    { href: 'https://commitlint.js.org', icon: SiCommitlint },
    { href: 'https://zod.dev', icon: SiZod },
    { href: 'https://orm.drizzle.team', icon: SiDrizzle },
    { href: 'https://www.prisma.io', icon: SiPrisma },
    { href: 'https://jestjs.io', icon: SiJest },
    { href: 'https://www.cypress.io', icon: SiCypress },
    { href: 'https://pptr.dev', icon: SiPuppeteer },
    { href: 'https://www.chaijs.com', icon: SiChai },
    { href: 'https://cheerio.js.org', icon: SiCheerio },
    { href: 'https://www.php.net', icon: FaPhp },
    { href: 'https://laravel.com', icon: FaLaravel },
    { href: 'https://dotnet.microsoft.com/learn/dotnet/what-is-dotnet', icon: SiDotnet },
    { href: 'https://www.mysql.com', icon: SiMysql },
    { href: 'https://www.postgresql.org', icon: SiPostgresql },
    { href: 'https://www.mongodb.com', icon: SiMongodb },
    { href: 'https://redis.io', icon: SiRedis },
    { href: 'https://ngrok.com', icon: SiNgrok },
    { href: 'https://sendgrid.com', icon: SiSendgrid },
    { href: 'https://stripe.com', icon: SiStripe },
    { href: 'https://www.xendit.co', icon: SiXendit },
    { href: 'https://www.algolia.com', icon: SiAlgolia },
    { href: 'https://www.rabbitmq.com', icon: SiRabbitmq },
    { href: 'https://swagger.io', icon: SiSwagger },
    { href: 'https://www.postman.com', icon: SiPostman },
    { href: 'https://mongoosejs.com', icon: SiMongoose },
    { href: 'https://cloud.google.com', icon: SiGooglecloud },
    { href: 'https://aws.amazon.com', icon: FaAws },
    { href: 'https://www.cloudflare.com', icon: FaCloudflare },
    { href: 'https://www.digitalocean.com', icon: FaDigitalOcean },
    { href: 'https://www.netlify.com', icon: SiNetlify },
    { href: 'https://vercel.com', icon: SiVercel },
    { href: 'https://fly.io', icon: FaFly },
    { href: 'https://render.com', icon: SiRender },
    { href: 'https://www.heroku.com', icon: SiHeroku },
    { href: 'https://www.jenkins.io', icon: FaJenkins },
    { href: 'https://github.com/features/action', icon: SiGithubactions },
    { href: 'https://www.docker.com', icon: FaDocker },
    { href: 'https://kubernetes.io', icon: SiKubernetes },
    { href: 'https://developers.google.com/analytics', icon: SiGoogleanalytics },
    { href: 'https://tagmanager.google.com', icon: SiGoogletagmanager },
    { href: 'https://git-scm.com', icon: FaGit },
    { href: 'https://github.com', icon: FaGithub },
    { href: 'https://bitbucket.org', icon: FaBitbucket },
] as const satisfies ISkill[];

interface ISkillsProps {
    id: string;
}

export default function Skills({ id }: ISkillsProps) {
    return (
        <>
            <h2 className="sr-only">{id}</h2>
            <div className="container grid grid-cols-[repeat(auto-fit,minmax(64px,1fr))] gap-8 p-8">
                {SKILLS.map((skill, index) => {
                    const Icon = skill.icon;

                    return (
                        <Link passHref key={`skill-${index}`} href={skill.href}>
                            <Button variant="ghost" className="aspect-square size-16">
                                <Icon className="size-[2rem]" />
                            </Button>
                        </Link>
                    );
                })}
            </div>
        </>
    );
}
