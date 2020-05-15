import React from 'react'
import {Button} from 'semantic-ui-react'


export default ({elements,setFieldValue,name}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleActive = (index) => {
    setActiveIndex(index);
  }

  return (<Button.Group floated='left'>
    {elements != null && elements.map((item, index) => {
        return <Button key={index} type="button" onClick={() => {
          handleActive(index);
          setFieldValue(name, item.value)
        }} active={index === activeIndex ? true : false}>{item.label}</Button>
      }
    )}

  </Button.Group>);
}
