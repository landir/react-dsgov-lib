import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Button", module).add("default", () => {
    return <Button>Hello World</Button>;
});

storiesOf("Button", module).add("disabled", () => {
    return <Button disabled>😀 😎 👍 💯</Button>;
});
