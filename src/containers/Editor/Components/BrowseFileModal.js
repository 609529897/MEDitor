import React, { PureComponent } from "react"
import PropTypes from "prop-types"

import FileList from "./fileList"
import Dialog from '@material-ui/core/Dialog'
import Button from "@material-ui/core/Button"
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'

class BrowseFileModal extends PureComponent {
  static propTypes = {
    isBrowsing: PropTypes.bool,
    toggleBrowse: PropTypes.func,
    savedFiles: PropTypes.object,
    loadLocalFiles: PropTypes.func,
    openFile: PropTypes.func,
    removeFile: PropTypes.func
  };

  render() {
    const {
      isBrowsing,
      toggleBrowse,
      savedFiles,
      openFile,
      removeFile,
      onCancel
    } = this.props;

    return (
      <div>
        <Dialog
          open={isBrowsing}
          // onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          {/* <DialogTitle id="alert-dialog-title">文件列表</DialogTitle> */}
          <DialogContent>
          <DialogContentText>文件列表</DialogContentText>
            {Object.keys(savedFiles).length
              ? <FileList
                savedFiles={savedFiles}
                openFile={openFile}
                toggleBrowse={toggleBrowse}
                removeFile={removeFile}
              />
              : <span>您的列表为空，请您添加内容！</span>}
            <DialogContentText id="alert-dialog-description" />
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={() => onCancel()}>
              取消
          </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default BrowseFileModal;
