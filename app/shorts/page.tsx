"use client";

import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import { TextField } from '@radix-ui/themes'
import { FaListAlt, FaSearchLocation  } from "react-icons/fa";

// Pass a list of ids the filtered houses

// interface ShortsProps {
//     externalID: string;
//     coverVideo: string;

// }



// const Shorts = ({ externalID, coverVideo }: ShortsProps) => {
const Shorts = () => {
    const property = {
        externalID: "ABC123",
        youtube: "4SoXO9YWYBg",
    };
    
    
    const { 
        externalID,  
        youtube,
    } = property;

    const ratio = (382 / 678) * 100;
    return (
        <div>
            <TextField.Root>
                <TextField.Slot>
                    <FaSearchLocation height="16" width="16" />
                </TextField.Slot>
                
                <TextField.Input placeholder="Search for a home…" />
            </TextField.Root>

            <Box paddingTop={`${ratio}%`} position="relative" height="0" overflow="hidden" >
                <iframe 
                style={{position:"absolute", top: 0, bottom: 0}}
                width="382"
                height="678"
                src={`https://www.youtube.com/embed/${youtube}`}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; autoplay=1; muted=1"/>

            </Box>
            
            
  
            <Box
                className="fixed left-0 right-0 flex justify-center bottom-5"
                >
                <Box className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Link href={`/home/${externalID}`} className="text-4xl mr-4 w-full hover:bg-gray-200">
                        <FaListAlt />
                    </Link>
                </Box>
            </Box>
        </div>

  );
};

export default Shorts
