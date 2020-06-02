import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'
import classNames from 'classnames'
import UL from '../styled/UL'

import Preview from '@material-ui/icons/Visibility'
import Save from '@material-ui/icons/Save'
import File from '@material-ui/icons/FolderOpen'

class EditorPanel extends PureComponent {
  static propTypes = {
    toggleBrowse: PropTypes.func,
    togglePreview: PropTypes.func,
    toggleSaveFile: PropTypes.func,
    isBrowsing: PropTypes.bool,
    isPreview: PropTypes.bool,
    isSaving: PropTypes.bool
  };
  render() {
    const {
      toggleBrowse,
      togglePreview,
      toggleSaveFile,
      isBrowsing,
      isPreview,
      isSaving
    } = this.props;
    const previewIconCls = classNames({ active: isPreview });
    const saveIconCls = classNames({ active: isSaving });
    const browseIconCls = classNames({ active: isBrowsing });
    return (
      <UL>
        <Preview className={previewIconCls} onClick={togglePreview} />
        <Save className={saveIconCls} onClick={toggleSaveFile} />
        <File className={browseIconCls} onClick={toggleBrowse} />
      </UL>
    );
  }
}

export default EditorPanel;

