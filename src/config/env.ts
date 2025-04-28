import z from 'zod';

const createEnv = () => {
    const EnvSchema = z.object({
        NODE_ENV: z.enum(['development', 'production']).optional().default('development'),
    });

    const envVars = {
        NODE_ENV: process.env.NODE_ENV,
    };

    const parsedEnv = EnvSchema.safeParse(envVars);

    if (!parsedEnv.success) {
        throw new Error(
            `Invalid env provided.
  The following variables are missing or invalid:
  ${Object.entries(parsedEnv.error.flatten().fieldErrors)
      .map(([k, v]) => `- ${k}: ${v}`)
      .join('\n')}
  `,
        );
    }

    return parsedEnv.data ?? {};
};

export const ENV = createEnv();
