import React, {SyntheticEvent} from 'react';
import {
    Autocomplete,
    TextField,
    CircularProgress,
    AutocompleteChangeReason,
    AutocompleteChangeDetails
} from "@mui/material";

interface AutoCompletePhProps {
    open: boolean
    setOpen: (p: boolean) => void
    getOptionLabel: (option: any) => string
    options: any
    label: string
    placeholder?: string
    setValue: (value: any) => void
}

const AsyncAutoComplete: React.FC<AutoCompletePhProps> = ({ open, setOpen, options, getOptionLabel, label, placeholder, setValue, ...rest}) => {

    const loading = open && options.length === 0;

    const handleChange = (event: SyntheticEvent<Element, Event>, value: any[], reason: AutocompleteChangeReason, details?: AutocompleteChangeDetails<any> | undefined) => {
        setValue(value)
    }

    return (
        <div>
            <Autocomplete
                multiple
                id="tags-standard"
                options={options}
                getOptionLabel={getOptionLabel}
                open={open}
                onOpen = {() => setOpen(true)}
                onClose={() => setOpen(false)}
                onChange={handleChange}
                {...rest}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        label={label}
                        placeholder={placeholder || ''}
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <React.Fragment>
                                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                    {params.InputProps.endAdornment}
                                </React.Fragment>
                            ),
                        }}
                    />
                )}
            />
        </div>
    );
};

export {AsyncAutoComplete}
