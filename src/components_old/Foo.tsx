/**
 * @file /src/components/Foo.tsx
 * @name Foo
 */

type FooProps = {
    text: string;
};

const Foo: React.FC<FooProps> = ({ text }) => {
    return <div>{text}</div>;
};

export default Foo;
