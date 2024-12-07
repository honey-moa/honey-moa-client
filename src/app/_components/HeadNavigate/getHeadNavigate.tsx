import { AfterAuthHeader } from './AfterAuthHeader';
import { BeforeAuthHeader } from './BeforeAuthHeader';

/**조건부 렌더링
 * 1. Auth이전 header
 * 2. Auth이후 header
 * 3. profile setting header
 */
interface HeadNavigateProps {
  location: 'beforeAuth' | 'afterAuth';
}

export default function getHeadNavigate({ location }: HeadNavigateProps) {
  const obj = {
    beforeAuth: <BeforeAuthHeader />,
    afterAuth: <AfterAuthHeader />,
  } as const;
  return obj[location];
}
