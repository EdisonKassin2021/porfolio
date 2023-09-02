/**
 * All the props defined here are used
 * in the Tabs component wrapping the Tab
 */
interface ITab {
  id: string;
  label: string;
  children: React.ReactNode;
  badgeContent?: string;
  hidden?: boolean;
  boxShadow?: boolean;
  noOverflow?: boolean;
}

/**
 * The props passed to Tab are not used directly by the component,
 * but by Tabs component wrapping the Tab
 */
const Tab = ({ children }: ITab) => {
  return <>{children}</>;
};

export default Tab;
