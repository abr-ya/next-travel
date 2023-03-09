import Image from "next/image";
import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import cn from "classnames";
import logo from "../logo.png";
import { Htag } from "@/components/index";
import Link from "next/link";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Htag tag="h2">Sidebar</Htag>
      <Link href="/">
        <Image src={logo} alt="Travel Blog Logo" width={80} height={80} />
      </Link>
    </div>
  );
};
