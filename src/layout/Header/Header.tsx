import cn from "classnames";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={cn(className, styles.header)} {...props}>
      {/* <nav className="nav-container"> */}
      <div className="nav-item-container">
        <p>Blog Header</p>
      </div>
      {/* </nav> */}
    </header>
  );
};

export default Header;
