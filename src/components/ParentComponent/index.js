import React, { useState } from 'react'
import { Grid, Stack } from "@mui/material";
import DynamicField from '../DynamicField';

const ParentComponent = () => {
    const [formData, setFormData] = useState({
        selectValue: "",
        textValue: "",
        numberValue: 0,
        checkboxValue: false,
        currencyValue: 0,
        passwordValue:"",
        radioValue:"",
    })
    const handleChange = (fieldName) =>
        (value) => {
            setFormData({
                ...formData,
                [fieldName]: value,
            })

        }

    const optionsCity = ["pune", "mumbai", "delhi", "nagpur"];
    const radioGender=["male","female"];
    return (
        <Grid sx={{ margin: "50px" }}>
            <Stack spacing={2}>
              
{/* type text */}
                <DynamicField type="text" title="Name" placeholder="name"
                    disable={false}
                    value={formData.textValue}
                    onChange={handleChange("textValue")}
                ></DynamicField>
 {/* type number */}
                <DynamicField type="number" title="Age" placeholder="age"
                    disable={false}
                    value={formData.numberValue}
                    onChange={handleChange("numberValue")}
                ></DynamicField>
{/* type currancy */}
                <DynamicField type="currency" title="Salary" placeholder="enter salary"
                    disable={false}
                    value={formData.currencyValue}
                    onChange={handleChange("currencyValue")}
                ></DynamicField>

                  {/* type select */}
                  <DynamicField type="select" title="Select City" placeholder="select an option"
                    disable={false}
                    options={optionsCity}
                    value={formData.selectValue}
                    onSelectChange={handleChange("selectValue")}
              ></DynamicField>

                {/* type password */}
                <DynamicField type="password" title="Create Password" placeholder="enter password"
                    disable={false}
                    
                    value={formData.passwordValue}
                    onChange={handleChange("passwordValue")}
              ></DynamicField>

                {/* type radio */}
                <DynamicField type="radio" title="Gender" 
                    disable={false}
                    options={radioGender}
                    value={formData.radioValue}
                    onChange={handleChange("radioValue")}
              ></DynamicField>

               {/* type checkbox */}
               <DynamicField type="check" title="agree" 
                    disable={false}
                    value={formData.checkboxValue}
                    onChange={handleChange("checkboxValue")}
              ></DynamicField>



            </Stack>
        </Grid>
    )
}

export default ParentComponent