type ChildrenType = React.ReactNode;
interface ChildrenProps {
  children: React.ReactNode;
}

// Functions
type EmptyFunction = () => void;
type StringPromiseVoidFunction = (id: string) => Promise<void>;

export {ChildrenType, ChildrenProps, StringPromiseVoidFunction, EmptyFunction};
