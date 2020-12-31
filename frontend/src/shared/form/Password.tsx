/*
The book project lets a user keep track of different books they would like to read, are currently
reading, have read or did not finish.
Copyright (C) 2020  Karan Kumar

This program is free software: you can redistribute it and/or modify it under the terms of the
GNU General Public License as published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR
PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.
If not, see <https://www.gnu.org/licenses/>.
*/

import React from 'react';
import { FormControl, IconButton, InputAdornment, InputLabel } from '@material-ui/core';
import OutlinedInput from '@material-ui/core/OutlinedInput';

function Password(props: PasswordProps) {
  return (
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">{props.fieldName}</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            className={props.class}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                >
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
  )
}

type PasswordProps = {
  fieldName: string,
  class?: string
}

export default Password;