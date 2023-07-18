import { PremiumPrefixType } from '../../types/types';

type PremiumTagProps = {
  prefix: PremiumPrefixType;
}

export default function PremiumTag ({prefix}: PremiumTagProps): JSX.Element {
  return (
    <div className={`${prefix}__mark`}>
      <span>Premium</span>
    </div>
  );
}

