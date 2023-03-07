import { Button, Center, Input, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  return (
    <Center height="100vh">
      <Stack spacing={8} align="center">
        <Text fontSize="3xl">Enter a URL to shorten</Text>
        <Input
          type="url"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
          placeholder="Enter the URL to shorten"
        ></Input>
        <Button width="100%">Shorten</Button>
      </Stack>
    </Center>
  );
}
