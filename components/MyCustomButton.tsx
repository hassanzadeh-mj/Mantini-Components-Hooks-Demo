import {Button, useMantineTheme} from "@mantine/core";
import {ButtonProps} from "@mantine/core/lib/components/Button/Button";

type MyButton = {
    ButtonProps?: ButtonProps
    children?: any
}

const Index = (props: MyButton) => {

    const {ButtonProps, children} = props

    return (
        <Button
            variant="filled"
            fullWidth
            {...ButtonProps}
        >
            {children}
        </Button>
    );
};

export default Index;
