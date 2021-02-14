import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { motion } from 'framer-motion';

function DataFetching({ setSelectedImage }) {
    const [images, setImages] = useState([]) // current and updated params
    // Fetching data from picsum api with UseEffect
    useEffect(() => {
        axios.get('https://picsum.photos/v2/list')
            .then(res => {
                setImages(res.data)
                console.log('images loaded');
            })
            .catch(err => {
                console.error(err)
            })
    }, []);// [] is to prevent an infinite loop

    return (
        <div className="img-grid">
            {images.map(image => (
                <motion.div className="img-wrap" key={image.id}
                    // Animation from "framer-motion"
                    whileHover={{ opacity: 1 }}
                    initial={{ x: -50 }}
                    animate={{ x: 0 }}
                    transition={{ ease: "easeOut", duration: 2 }}
                    // End of Animation
                    onClick={() => {
                        setSelectedImage(image.download_url)
                        console.log(`user selected: ${image.id}`);
                    }
                    }>
                    <motion.img src={image.download_url} alt="Stock photo"
                        // Animation
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    // End of Animation
                    />
                </motion.div>
            ))}
        </div>


    )

}

export default DataFetching
