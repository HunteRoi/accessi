import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

import { ReactComponent as DaltonismeSvg } from '../../img/daltonisme.svg'
import { ReactComponent as LogoSvg } from '../../img/logo.svg'
import { ReactComponent as DyscalculieSvg } from '../../img/dyscalculie.svg'
import { ReactComponent as DyslexieSvg } from '../../img/dyslexie.svg'
import { ReactComponent as DysorthographieSvg } from '../../img/dysorthographie.svg'
import { ReactComponent as MalvoyanceSvg } from '../../img/malvoyance.svg'
import { ReactComponent as Pattern1Svg } from '../../img/pattern1.svg'
import { ReactComponent as Pattern2Svg } from '../../img/pattern2.svg'
import { ReactComponent as SchizophrenieSvg } from '../../img/schizophrenie.svg'
import { ReactComponent as SuggestionSvg } from '../../img/suggestion.svg'
import { ReactComponent as SurditeSvg } from '../../img/surdite.svg'
import { ReactComponent as TCASvg } from '../../img/TCA.svg'
import { ReactComponent as SettingSvg } from '../../img/settings.svg';

export const SettingIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={() => <SettingSvg height='2rem' width='2rem' />} {...props} />
);

export const DaltonismeIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={() => <DaltonismeSvg height='10rem' width='10rem' />} {...props} />
);

export const LogoIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={() => <LogoSvg height='10rem' width='10rem' />} {...props} />
);

export const DyscalculieIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={() => <DyscalculieSvg height='10rem' width='10rem' />} {...props} />
);

export const DyslexieIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={() => <DyslexieSvg height='10rem' width='10rem' />} {...props} />
);

export const DysorthographieIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={() => <DysorthographieSvg height='10rem' width='10rem' />} {...props} />
);

export const MalvoyanceIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={() => <MalvoyanceSvg height='10rem' width='10rem' />} {...props} />
);

export const Pattern1Icon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={() => <Pattern1Svg height='20rem' width='20rem' />} {...props} />
);

export const Pattern2Icon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={() => <Pattern2Svg height='20rem' width='20rem' />} {...props} />
);

export const SchizophrenieIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={() => <SchizophrenieSvg height='10rem' width='10rem' />} {...props} />
);

export const SuggestionIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={() => <SuggestionSvg height='10rem' width='10rem' />} {...props} />
);

export const SurditeIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={() => <SurditeSvg height='10rem' width='10rem' />} {...props} />
);

export const TCAIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={() => <TCASvg height='10rem' width='10rem' />} {...props} />
);
