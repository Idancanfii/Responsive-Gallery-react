import React from 'react'
import { motion } from 'framer-motion';


const BackDrop = ({ selectedImage, setSelectedImage }) => {
    // second onClick event calls handleClick func in order to 
    // close the selected image and go back to gallery view, 
    // sets setSelectedImage back to "null" 
    const handleClick = (e) => {
        setSelectedImage(null)
    }

    return (
        <motion.div className="backdrop" onClick={handleClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.img src={selectedImage} alt="enlarge"
                initial={{ y: '-70px' }}
                animate={{ y: 0 }}
            />
        </motion.div>
    )
}

export default BackDrop
