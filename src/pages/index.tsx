import { Button, Center, Input, Stack, Text } from "@chakra-ui/react";
import axios from "axios";

import { useState } from "react";
import { useMutation, useQuery } from "react-query";

export default function Home() {
  const [url, setUrl] = useState("");
  const [shortUrl,setShturl] = useState("");
 

  const mutation = useMutation(req => {
    return axios.post('/server/api/create', req).then(res=>res.data);
  });

  const onShortenClick = async () => {
    await mutation.mutateAsync({URL:url},{
      onSuccess(data, variables, context) {
          setShturl(data.url);
      },
    });
  };

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
        <Button onClick={onShortenClick} isLoading={mutation.isLoading} width="100%">
          Shorten
        </Button>
        {mutation.isSuccess ? <Text fontSize="3xl">{shortUrl}</Text> : null}
      </Stack>
    </Center>
  );
}
