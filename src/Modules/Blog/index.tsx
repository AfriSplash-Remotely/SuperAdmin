import React from 'react'
import { Box, Button, SimpleGrid } from '@chakra-ui/react'
import BlogSearch from './components/blogSearch'
import BlogCard from './components/blogCard'
import { BlogData } from './components/mockData'
import { useNavigate } from "react-router-dom";



export default function Blog(): JSX.Element {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/dashboard/blog/add-new-blog")
    }
    return (
        <>
            <Box>
                <Box display='flex' alignItems='center'
                    justifyContent='space-between'
                    mt={{ lg: "2rem" }}
                >
                    <BlogSearch />

                    <Box>
                        <Button
                            _hover={{ bgColor: "primary" }}
                            _active={{ bgColor: "primary" }}
                            borderRadius=".5rem"
                            px={{ base: "1.5rem", md: "2rem", lg: "2rem" }}
                            py="1rem"
                            onClick={handleNavigate}
                        >
                            Create Post
                        </Button>
                    </Box>
                </Box>

                <Box>
                    <SimpleGrid
                        pt={{ base: "1rem", md: "2.5rem", lg: "3.188rem" }}
                        columns={{ base: 1, sm: 1, md: 1, lg: 3, "2xl": 4 }}
                        spacing={{ base: "1.5rem", md: "2rem", lg: "2rem" }}
                    >
                        {BlogData.map((blog, index) => (
                            <BlogCard  {...blog} key={index} />

                        ))}
                    </SimpleGrid>

                </Box>
            </Box>

        </>
    )
}
