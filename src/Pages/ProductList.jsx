import React from "react";

import {
  Center,
  Box,
  Image,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  Flex,
  Button,
  Circle,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

import { Link } from "react-router-dom";
import "./ProductList.css";
const ProductList = ({ image, title, price, id, el }) => {
  return (
    <Center py={12}>
      <Box
        className="productList"
        role={"group"}
        maxW={"450px"}
        shadow={"2xl"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        rounded={"lg"}
        position={"relative"}
        zIndex={1}
      >
        <Image
          border={"1px solid black"}
          rounded={"lg"}
          height={"300px"}
          width={"350px"}
          objectFit={"contain"}
          src={image}
        />

        <Stack pt={10} align={"center"}>
          <Text
            fontSize={"18px"}
            fontFamily={"body"}
            fontWeight={500}
            textAlign={"center"}
          >
            {title}
          </Text>

          <Stack direction={"column"} align={"center"}>
            <Text
              textDecoration={"line-through"}
              color={"gray.600"}
              fontSize={"18px"}
            >
              ₹{price}
            </Text>
            <Flex justifyContent="center" gap={"10"}>
              <Text
                fontWeight={450}
                fontSize={"18px"}
                color={"gray.600"}
                padding="0.5rem"
              >
                ₹{Math.ceil(price - (price * 30) / 100)}
              </Text>
              <Box
                fontWeight={450}
                fontSize={"l"}
                color={"gray.600"}
                display="flex"
                paddingTop="-15px"
              >
                <Image
                  width={"35px"}
                  padding="0.1rem"
                  src={
                    "https://previews.123rf.com/images/creativepriyanka/creativepriyanka1905/creativepriyanka190500683/124082935-rent-icon.jpg"
                  }
                />
                <Text padding="0.5rem" ml="-15px">
                  {"5"}
                </Text>
              </Box>
            </Flex>
          </Stack>
          <Box width="100%" p="0.5rem" cursor="pointer">
            <Link to={`/product/${id}`}>
              <Box
                loadingText="Submitting"
                size="lg"
                width="100%"
                height="40px"
                color="white"
                p="5px"
                textAlign={"center"}
                backgroundColor="#242830"
                border="1px solid"
                _hover={{ bg: "grey", color: "white" }}
               
              >
                BUY OR RENT
              </Box>
            </Link>
          </Box>
        </Stack>
      </Box>
    </Center>
  );
};

export default ProductList;
