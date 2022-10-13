import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Select,
  Image,
  Stack,
  Text,
  Heading,
} from "@chakra-ui/react";
import "./Header.css";
const Header = () => {
  const navigate = useNavigate();
  const handelChange = (e) => {
    if (e.target.value === "Historical") {
      navigate("/historical");
    } else if (e.target.value === "Fantasy") {
      navigate("/fantacy");
    } else if (e.target.value === "Science") {
      navigate("/science");
    } else if (e.target.value === "Mystery") {
      navigate("/mystery");
    } else if (e.target.value === "Horror") {
      navigate("/horror");
    }
  };
  return (
    <Box>
      <Flex width="100%" height="9rem" mt="3rem" justifyContent="space-between">
        <Flex width="30%" padding="0.5rem" gap="5">
          <Image
            src="https://thumbs.dreamstime.com/b/dreamstime-template-211205655.jpg"
            width="40%"
          />
          <Stack direction={"column"} border="2px solid #400788"></Stack>
          <Text
            fontSize="xl"
            fontWeight="bolder"
            padding="0.2rem"
            className="novellogo"
            color={"teal"}
          >
            Royal Novel Rent Book Shop
          </Text>
        </Flex>
        <Box width="40%" backgroundColor={"1px solid red"}>
          <Flex padding="2.5rem">
            <Box className="Collections">
              <Select
                placeholder="Collections"
                border="none"
                fontWeight="500"
                fontSize="20px"
                className="Collections"
              >
                <option value="option1">Coding Books </option>
                <option value="option2">Engineering Books </option>
                <option value="option3">Magazine</option>
                <option value="option3">DSA Books</option>
                <option value="option3">12th Books</option>
              </Select>
            </Box>
            <Box>
              <Select
                placeholder="Books"
                border="none"
                width="85%"
                fontWeight="500"
                fontSize="20px"
                onChange={handelChange}
              >
                <option value="Realistic">Realistic novels</option>
                <option value="Historical">
                  <Link to="/historical">Historical novels</Link>
                </option>
                <option value="Science">Science fiction novel</option>
                <option value="Autobiographical">
                  Autobiographical novels
                </option>
                <option value="Fantasy">Fantasy novels</option>
                <option value="Horror">Horror novels</option>
                <option value="Mystery">Mystery novels</option>
                <option value="Detective">Detective novels</option>
              </Select>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Box marginTop="15px" marginBottom="25px">
        <hr></hr>
      </Box>
    </Box>
  );
};

export default Header;
