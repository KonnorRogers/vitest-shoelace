import SlInput from '@shoelace-style/shoelace/dist/react/input/index.js';

export default function Input({
  children = '',
  ...props
}: {
  children?: any;
  [key: string]: any;
}) {
  return (
    <>
      <SlInput {...props} value="BLAH">
        {children}
      </SlInput>
    </>
  );
}
