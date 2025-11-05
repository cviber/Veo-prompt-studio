import { BaseItem } from '../types';

export const initialAges: BaseItem[] = Array.from({ length: 100 }, (_, i) => {
    const age = i + 1;
    return {
        id: `age_${age}`,
        name: `${age} year${age > 1 ? 's' : ''} old`,
    };
});
