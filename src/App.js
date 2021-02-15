import React, { useState } from 'react';
import DataFetching from './comps/DataFetching';
import BackDrop from './comps/BackDrop';
import Title from './comps/Title';

function App() {
  // useState Hook - begins with no arg(null),
  // otherwise when we load the page it will not load successfully
  // setSelectedImage is the prop for the "DataFetching" func,
  // and for the source for the first onClick event 
  const [selectedImage, setSelectedImage] = useState(null);

  // Sending the prop to the DataFetching component class
  // I have added a conditional rendering to "Backdrop" component 
  // so only when an image is selected it will take over the screen (when selected image has a value)
  return (
    <div>
      <Title />
      <DataFetching setSelectedImage={setSelectedImage} />
      { selectedImage && <BackDrop selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
    </div>
  );
}

export default App;
