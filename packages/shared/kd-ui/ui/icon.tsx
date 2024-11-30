import dynamic from 'next/dynamic'
import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { FC } from 'react';

export interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
}

const Icon: FC<IconProps> = ({ name, ...props })  => {
  const LucideIcon = dynamic(dynamicIconImports[name], { ssr: false })

  return <LucideIcon {...props} />
};

export default Icon;