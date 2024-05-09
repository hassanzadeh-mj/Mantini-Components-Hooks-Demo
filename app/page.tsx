import MyCustomButton from "components/MyCustomButton";
import {Container, Stack} from "@mantine/core";
import {IconDownload } from '@tabler/icons-react';

export default function HomePage() {
    return <Container h={'100vh'} w={'100%'}>
        <Stack align={'center'}>
            <MyCustomButton ButtonProps={{ c: 'gray'}}>
                دکمه سفارشی
            </MyCustomButton>
        </Stack>
    </Container>;
}
