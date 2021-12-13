import styled from 'styled-components';
import { Link as RouterLink } from 'components/common/common';

const Link = styled(RouterLink)`
  display: block;
  font-size: ${({ theme }) => theme.font.base};
  line-height: 16px;
  letter-spacing: 0.03em;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 5%;

  color: ${({ theme }) => theme.color.tangerine};

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.color.tangerine};
  }
`;

export {Link};
