import React from 'react';
import {Autocomplete, AutocompleteProps, TextField, CircularProgress} from "@mui/material";

interface AutoCompletePhProps {
    open: boolean
    setOpen: (p: boolean) => void
    getOptionLabel: (option: any) => string
    options: any
    label: string
    placeholder?: string
}

const AsyncAutoComplete: React.FC<AutoCompletePhProps> = ({ open, setOpen, options, getOptionLabel, label, placeholder, ...rest}) => {

    const loading = open && options.length === 0;

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
