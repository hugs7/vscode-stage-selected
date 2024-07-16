/**
 * @file /src/components/Foo.tsx
 * @name Foo
 */

type FooProps = {
    text: string;
    moreText?: string;
};

const Foo: React.FC<FooProps> = ({ text, moreText }) => {
    return (
        <div style={{ backgroundColor: "dodgerblue", border: "1px solid white" }}>
            <div>{text}</div>
            <div>{moreText ? moreText : "No more text"}</div>
        </div>
    );
};

export default Foo;
