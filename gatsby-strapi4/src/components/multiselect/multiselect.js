import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";

const MultiSelect = () => {
  const [options, setOptions] = useState(
    [
      {
        name: 'option 1',
        id:1
      },
      {
        name: 'option 2',
        id:2
      }
    ]
  );

  const onSelect = (selectedList, selectedItem) => {
    
  }

  const onRemove = (selectedList, removedItem) => {
    
  }
    

  return (
    <div style={{paddingBottom: 50 + 'px'}}>
      <Multiselect
        options={options} // Options to display in the dropdown
        // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
        // onSelect={onSelect} // Function will trigger on select event
        // onRemove={onRemove} // Function will trigger on remove event
        displayValue="name" // Property name to display in the dropdown options
        showCheckbox={true}
        showArrow={true}
      />
    </div>
  );
}

export default MultiSelect;