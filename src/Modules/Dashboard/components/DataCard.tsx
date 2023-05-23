import { Box, Card, CardBody, Text } from "@chakra-ui/react";
import { CardDataType } from "../dashboard.interface";

interface DataCardProps {
  data: CardDataType;
}

export const DataCard = ({ data }: DataCardProps): JSX.Element => {
  return (
    <Card w="100%" borderRadius="xl">
      <CardBody>
        <Box pt={{ lg: ".2rem" }} pb={{ lg: "1rem" }}>
          <Text
            fontWeight="800"
            fontSize={{ base: "2rem", md: "2.625rem", lg: "2.625rem" }}
          >
            {data.figure}
          </Text>
          <Text fontSize={{ lg: "1.125rem" }}>{data.text}</Text>
        </Box>
      </CardBody>
    </Card>
  );
};
