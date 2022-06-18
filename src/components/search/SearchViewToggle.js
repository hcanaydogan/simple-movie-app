import React from "react";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { viewModeChanged } from '../../store/filters/filters.actions';
import SvgIcon from '@mui/material/SvgIcon';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Tooltip from '@mui/material/Tooltip';

const selectViewMode = state => state.filters.viewMode;

function SearchViewToggle() {
  const dispatch = useDispatch();
  const viewMode = useSelector(selectViewMode, shallowEqual);

  function handleViewModeChange(event, value) {
    console.log('handleViewModeChange', value);
    if (value !== null) {
      dispatch(viewModeChanged(value));
    };
  }

  return (
    <ToggleButtonGroup
      sx={{ margin: '1rem', marginLeft: 'auto' }}
      color="secondary"
      value={viewMode}
      exclusive
      onChange={handleViewModeChange}
    >
      <ToggleButton value="table">
        <Tooltip title="View as Table">
          <SvgIcon>
            <path d="M21 8H3V4h18v4zm0 2H3v4h18v-4zm0 6H3v4h18v-4z"></path>
          </SvgIcon>
        </Tooltip>
      </ToggleButton>
      <ToggleButton value="grid">
        <Tooltip title="View as Grid">
          <SvgIcon>
            <path d="M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z"></path>
          </SvgIcon>
        </Tooltip>
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default SearchViewToggle;