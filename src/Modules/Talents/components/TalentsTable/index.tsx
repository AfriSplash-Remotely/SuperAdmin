import {
  Box,
  Table,
  TableContainer,
  Tbody,
  useDisclosure,
} from "@chakra-ui/react";
import { TalentsTableHeader } from "./TalentsTableHeader";
import { TalentsTableData } from "./TalentsTableData";
import { ITalentsTableResponsePayload } from "./talents.interface";
import { TalentsTableBody } from "./TalentsTableBody";
import { TalentsTableFooter } from "./TalentsTableFooter";
import { SendEmailModal } from "./SendEmailModal";
import TalentsDetailsDrawer from "../TalentsDetailsDrawer";

const TalentsTable = (): JSX.Element => {
  const modal1 = useDisclosure();
  const modal2 = useDisclosure();
  return (
    <>
      <Box
        shadow="100"
        borderRadius="1rem"
        overflow="hidden"
        mt={{ base: "1rem", md: "1.5rem", lg: "3rem" }}
      >
        <TableContainer bgColor="white">
          <Table size="lg" variant="simple">
            <TalentsTableHeader />
            <Tbody>
              {TalentsTableData.map((item: ITalentsTableResponsePayload) => {
                return (
                  <TalentsTableBody
                    item={item}
                    key={item.name}
                    sendEmailModal={modal1.onOpen}
                    openUserDetails={modal2.onOpen}
                  />
                );
              })}
            </Tbody>
          </Table>
          <TalentsTableFooter />
        </TableContainer>
        <SendEmailModal isOpen={modal1.isOpen} onClose={modal1.onClose} />
        <TalentsDetailsDrawer isOpen={modal2.isOpen} onClose={modal2.onClose} />
      </Box>
    </>
  );
};

export default TalentsTable;
