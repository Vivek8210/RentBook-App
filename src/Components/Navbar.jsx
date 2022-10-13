import React, { useState, useEffect } from "react";

import { BsCart3 } from "react-icons/bs";
import styled from "styled-components";

import { Link } from "react-router-dom";

import {
  Box,
  Flex,
  Icon,
  Text,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  color,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Divider } from "@chakra-ui/react";

const Navbar = () => {
  const [text, setText] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={4} backgroundColor={"black"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
          
            <HStack
              className="nav"
              as={"nav"}
              margin={"auto"}
              spacing={2}
              fontSize={"24px"}
              color={"white"}
              alignItems={"center"}
              fontWeight={"600"}
              padding={"5px 8px"}
              display={{ base: "none", md: "flex" }}
              px={1.5}
              py={1}
              rounded={"md"}
              justifyContent={"space-between"}
              gap={"10px"}
              marginLeft={"650px"}
            >
                
              <Link to="/home">
              
                <Box cursor="pointer">Home</Box>
              </Link>
              <Link to="/cart">
                <Flex cursor="pointer">
                  <Icon as={BsCart3} boxSize="1.4rem" mt="14px" />
                  <Text></Text>
                  <Text paddingTop={"0.4rem"}>Cart</Text>
                </Flex>
              </Link>
              <SearchBarWrapper>
                <Image
                  src="https://image.shutterstock.com/image-vector/magnifying-glass-search-icon-flat-260nw-738763579.jpg"
                  alt=" Search logo"
                />
                <Input
                  placeholder="Search"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </SearchBarWrapper>
              
            </HStack>
          </HStack>

          <Flex alignItems={"center"} className="searchbar">
            <Menu>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack
              as={"nav"}
              spacing={4}
              fontSize={"14px"}
              // color={"#4f4d4d"}
              color={"white"}
              textAlign={"start"}
              fontWeight={"medium"}
            >
              <SearchBarWrapper className="searchbar" width={"100%"} >
                <Image
                width={'100%'}
                height={'100px'}
                  src="https://image.shutterstock.com/image-vector/magnifying-glass-search-icon-flat-260nw-738763579.jpg"
                  alt=" Search logo"
                />
                <Input
                height={'10px'}
                  placeholder="Search"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </SearchBarWrapper>
             
              
              <Link to="/home">
                <Box cursor="pointer">Home</Box>
              </Link>
              <Link to="/cart">
                <Flex cursor="pointer" color={"white"}>
                  <Icon
                    color={"white"}
                    as={BsCart3}
                    boxSize="1.1rem"
                    mt="7px"
                  />
                  <Text></Text>
                  <Text paddingTop={"0.4rem"}>Cart</Text>
                </Flex>
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Divider
        orientation="horizontal"
        bg={useColorModeValue("red", "gray.900")}
      />
    </>
  );
};

export default Navbar;

const SearchBarWrapper = styled.div`
  border: 1px solid;
  display: flex;
  height: 28px;
  width: 36%;
  margin: auto;
  background-color: white;
  border-radius: 5px;
  margin-left: -2%;
`;
const Input = styled.input`
  border: none;
  outline: none;
  font-size: 20px;
  flex: 1;
  color: black;
  width: 70%;
  padding-left: 1px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
`;
const Image = styled.img`
  height: 25px;
  padding: 3px 8px;
`;
