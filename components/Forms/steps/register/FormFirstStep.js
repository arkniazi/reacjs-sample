import { TextInput } from "../../../FormFields/TextInput"
import { FormInputWrapper } from "../../../FormFields/FormInputWrapper"
import { SelectFilter } from "../../../FormFields/SelectFilter"
import { FlexContainer } from "../../../styles/Page"
import { FormStepTitle } from './styled'
import { motion } from 'framer-motion'


export const FormFirstStep = ({ variants, intitial, animate, exit }) => {
    const states = [
        { value: 'WA', label: 'WA' },
        { value: 'NSW', label: 'NSW' },
        { value: 'QLD', label: 'QLD' },
        { value: 'SA', label: 'SA' },
        { value: 'NT', label: 'NT' },
        { value: 'VIC', label: 'VIC' },
        { value: 'TAS', label: 'TAS' },
    ];

    return (
        <motion.div>
            <FormStepTitle>Get Started</FormStepTitle>
            <p style={{ marginBottom: '25px' }}>
                Enter a few details to join the 2ndsurf community
            </p>

            <h4 className="form-heading">Your Details</h4>
            <FormInputWrapper margin="0 0 10px 0">
                <FlexContainer>
                    <TextInput
                        label="fname"
                        name="fname"
                        type="text"
                        placeholder="First Name / Shop Name"
                        fullWidth
                        altStyle
                        noLabel
                        color='black'
                    />
                    <TextInput
                        label="lname"
                        name="lname"
                        type="text"
                        placeholder="Last Name"
                        fullWidth
                        altStyle
                        noLabel
                        color='black'
                    />
                </FlexContainer>
            </FormInputWrapper>

            <FormInputWrapper margin="0 0 10px 0">
                <TextInput
                    label="email"
                    name="email"
                    type="text"
                    placeholder="Email"
                    color="black"
                    altStyle
                    noLabel
                />
            </FormInputWrapper>


            <h4 className="form-heading">Create your username and password</h4>
            <FormInputWrapper margin="0 0 10px 0">
                <TextInput
                    label="username"
                    name="username"
                    type="text"
                    placeholder="Username"
                    color="black"
                    altStyle
                    noLabel
                />
            </FormInputWrapper>
            <FormInputWrapper margin="0 0 10px 0">
                <TextInput
                    label="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    color="black"
                    altStyle
                    noLabel
                />
            </FormInputWrapper>
            <FormInputWrapper margin="0 0 10px 0">
                <TextInput
                    label="confirmPass"
                    name="confirmPass"
                    type="password"
                    placeholder="Confirm Password"
                    color="black"
                    altStyle
                    noLabel
                />
            </FormInputWrapper>

            <h4 className="form-heading">Your Location</h4>
            <FormInputWrapper margin="0 0 10px 0">
                <SelectFilter
                    options={states}
                    name="state"
                    label="state"
                    placeholder="Your State"
                    color="black"
                    fullWidth
                    noLabel
                />
            </FormInputWrapper>
            <FormInputWrapper>
                <TextInput
                    label="postcode"
                    name="postcode"
                    type="text"
                    placeholder="Postcode"
                    color="black"
                    altStyle
                    noLabel
                />
            </FormInputWrapper>

        </motion.div>
    )
}