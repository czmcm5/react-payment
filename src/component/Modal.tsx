import { ReactNode } from 'react';
import styles from '../style/modal.module.css';

const ModalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.background}>
      <div className={styles.box}>{children}</div>
    </div>
  );
};

export default ModalLayout;
