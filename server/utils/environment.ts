export const nodeEnvIs = (name: string): boolean => {
  if (name.length < 3) return false;

  const nodeEnv: string = process.env.NODE_ENV?.toLowerCase() || 'development';
  const env: string = name.toLowerCase();

  return nodeEnv.includes(env) || env.includes(nodeEnv);
};
