/**
 * @file /src/components/Foo.tsx
 * @name Foo
 */

type FooProps = {
    text: string;
    moreText?: string;
};

const Foo: React.FC<FooProps> = ({ text }) => {
    return <div style={{ backgroundColor: "dodgerblue" }}>{text}</div>;
};

export default Foo;
