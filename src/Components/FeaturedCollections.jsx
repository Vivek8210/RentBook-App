import { Box, Text, Flex, Image } from "@chakra-ui/react";
import React from "react";

const FeaturedCollections = () => {
  return (
    <Box mt="30px" width="100%" height="auto" padding="0.2rem">
      <Text
        fontSize="32px"
        color="#403131"
        textAlign="left"
        fontWeight={"500"}
        mb="12px"
      >
        Featured Collections
      </Text>
      <Flex justifyContent="space-around" direction="row" cursor="pointer">
        <Box width="30%">
          <Image
            width="100%"
            height="250px"
            src="https://m.media-amazon.com/images/I/51X-pD3qaKL.jpg"
          />
          <Text fontSize={"20px"}>Coding Books Collections</Text>
        </Box>
        <Box width="30%">
          <Image
            width="100%"
            height="250px"
            src="https://images-na.ssl-images-amazon.com/images/I/71TWHAhREXL.jpg"
          />
          <Text fontSize={"20px"}>Engineering Books Collections</Text>
        </Box>
        <Box width="30%">
          <Image
            width="100%"
            height="250px"
            src="https://3.imimg.com/data3/IU/EB/MY-10841785/imgbooksmags-500x500.jpg"
          />
          <Text fontSize={"20px"}>Magazine Collections</Text>
        </Box>
        {/* <Box width='20%' >
         <Image height='160px'  width='100%' src='https://5.imimg.com/data5/XJ/SN/MY-46815014/data-structures-and-algorithms-made-easy-500x500.png' />
         <Text>DSA Books Collections</Text>
        </Box> */}
      </Flex>
    </Box>
  );
};

export default FeaturedCollections;
