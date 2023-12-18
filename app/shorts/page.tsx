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
        coverVideo: "1Kb6kYUCEWo?si=pol1LELZXbaehWiT",
    };
    
    
    const { 
        externalID,  
        coverVideo,
    } = property;

    const ratio = (315 / 560) * 100;
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
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${coverVideo}`}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; autoplay=1; muted=1"/>

            </Box>
            
            <Link href={`/home/${externalID}`}>
                    <FaListAlt />
            </Link>
        </div>

  );
};

export default Shorts
