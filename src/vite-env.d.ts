/// <reference types="vite/client" />

declare module "remoteMfeReact/Card" {
  const Card: React.ComponentType<{title: string, description: string}>;
  export default Card;
}
