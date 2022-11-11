import { Box, InputLabel } from '@mui/material';
import React, { ChangeEvent, ReactNode, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { InputBasic } from '../../BasicComponents';
import { EditIcon } from '../../svg';

interface IInputTypeFile {
  htmlFor: string;
  id: string;
  registerName: string;
  children: ReactNode;
}

export const InputTypeFile = ({ htmlFor, id, registerName, children }: IInputTypeFile) => {
  const [selectedFile, setSelectedFile] = useState<string>('');
  const { register } = useFormContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = URL.createObjectURL(e.target.files[0]);
      setSelectedFile(file);
    }
  };

  return (
    <Box className="labelWrapper">
      {selectedFile ? <img style={{ width: '100%', height: '100%' }} src={selectedFile} /> : children}
      <InputLabel htmlFor={htmlFor}>
        <EditIcon />
      </InputLabel>
      <InputBasic
        id={id}
        type="file"
        // {...register(registerName)}
        onChange={handleChange}
      />
    </Box>
  );
};