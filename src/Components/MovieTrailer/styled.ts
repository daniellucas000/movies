import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 576px) {
    min-width: 22rem;
  }

  iframe {
    @media (max-width: 576px) {
      width: 350px;
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: -2.5rem;
  right: -2.5rem;
  line-height: 0;
  cursor: pointer;
  color: #fff;
  outline: 0;

  @media (max-width: 576px) {
    right: -1.5rem;
  }
`;

export const TrailerNotFound = styled('div')`
  img {
    position: relative;
  }

  h1 {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
`;
