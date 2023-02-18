import { ReactComponent as HeadsetSvg} from './headset.svg';
import { ReactComponent as OnSvg } from './on-icon.svg';
import { ReactComponent as OffSvg } from './off-icon.svg';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

export const HeadsetIcon: React.FC = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={() => <HeadsetSvg/> } {...props} />
);

export const OnIcon: React.FC = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={() => <OnSvg/> } {...props} />
);

export const OffIcon: React.FC = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={() => <OffSvg/> } {...props} />
);